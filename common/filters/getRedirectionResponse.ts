import { NextRequest, NextResponse, userAgent } from "next/server";

import { getUser } from "../network/r114/user";

export default async function getRedirectionResponse(request: NextRequest) {
  const { body: userData } = await getUser();

  if (!!userData && request.nextUrl.pathname.startsWith("/login")) {
    request.nextUrl.pathname = "/";
    return NextResponse.redirect(request.nextUrl.origin);
  }

  if (!userData && !request.nextUrl.pathname.startsWith("/login")) {
    request.nextUrl.pathname = "/login";
    return NextResponse.redirect(new URL(request.nextUrl));
  }

  const { device } = userAgent({ headers: request.headers });

  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    if (request.nextUrl.port === "8080" && device.type === "mobile") {
      request.nextUrl.port = "8081";
      return NextResponse.redirect(new URL(request.nextUrl));
    } else if (request.nextUrl.port === "8081" && device.type !== "mobile") {
      request.nextUrl.port = "8080";
      return NextResponse.redirect(new URL(request.nextUrl));
    }
  } else {
    if (
      request.nextUrl.hostname === "smartr-front-test-desktop.vercel.app" &&
      device.type === "mobile"
    ) {
      request.nextUrl.hostname = "smartr-front-test-mobile.vercel.app";
      return NextResponse.redirect(new URL(request.nextUrl));
    } else if (
      request.nextUrl.hostname === "smartr-front-test-mobile.vercel.app" &&
      device.type !== "mobile"
    ) {
      request.nextUrl.hostname = "smartr-front-test-desktop.vercel.app";
      return NextResponse.redirect(new URL(request.nextUrl));
    }
  }

  return NextResponse.next();
}
