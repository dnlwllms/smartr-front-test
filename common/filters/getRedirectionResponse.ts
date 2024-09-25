import { NextRequest, NextResponse, userAgent } from "next/server";

import r114Request from "../network/r114/request";
import { User } from "../network/r114/user";
import { cookies } from "next/headers";

export default async function getRedirectionResponse(request: NextRequest) {
  const { device } = userAgent({ headers: request.headers });

  let userData = null;

  try {
    const response = await r114Request<User>("/users", {
      headers: {
        Authorization: String(cookies().get("session")?.value),
      },
    });

    userData = response.body;
  } catch (e) {
    console.log(e);
  }

  if (!!userData && request.nextUrl.pathname.startsWith("/login")) {
    request.nextUrl.pathname = "/";
    return NextResponse.redirect(request.nextUrl.origin);
  }

  if (!userData && !request.nextUrl.pathname.startsWith("/login")) {
    request.nextUrl.pathname = "/login";

    return NextResponse.redirect(new URL(request.nextUrl));

    // TODO: 백엔드 개발환경 구성 시 변경 필요
    // if (device.type === "mobile") {
    //   return NextResponse.redirect(new URL(request.nextUrl));
    // } else {
    //   return NextResponse.redirect(`${SMARTR_ORIGIN_URL}/login`);
    // }
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    if (request.nextUrl.port === "8080" && device.type === "mobile") {
      request.nextUrl.port = "8081";
      return NextResponse.redirect(new URL(request.nextUrl));
    } else if (request.nextUrl.port === "8081" && device.type !== "mobile") {
      request.nextUrl.port = "8080";
      return NextResponse.redirect(new URL(request.nextUrl));
    }
  }

  return NextResponse.next();
}
