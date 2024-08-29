import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { [key: string]: unknown } },
) {
  // alert(request.nextUrl.searchParams.get("token"))
  //   const response = NextResponse.redirect(request.nextUrl.origin);

  return NextResponse.json({
    token: params.token,
  });
}
