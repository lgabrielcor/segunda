import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const requireAuth = ["/company/companies"];
export async function middleware(request) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      const url = new URL(`/`, request.url);
      return NextResponse.redirect(url);
    }
  }
  return res;
}
