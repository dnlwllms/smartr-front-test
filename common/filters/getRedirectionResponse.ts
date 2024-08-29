import { NextRequest, NextResponse, userAgent } from "next/server";

export default function getRedirectionResponse(request: NextRequest) {
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
  }

  return NextResponse.next();
}
