import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/welcome", req.url));
  }

  if (token?.pin !== null && !token?.isPinVerified) {
    if (pathname !== "/auth/input-pin") {
      return NextResponse.redirect(new URL("/auth/input-pin", req.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/user"],
};
