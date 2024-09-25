import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { [key: string]: unknown } },
) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  cookies().set("session", String(params.token), {
    httpOnly: true,
    // TODO: API 개발서버 배포 시 수정 필요
    // secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.redirect(request.nextUrl.origin);
}
