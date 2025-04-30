import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { APP_ROUTES } from "@/routes";

export async function authMiddleware(request: NextRequest) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
	});
	if (!token) {
		console.log("No token found, redirecting to login");
		return NextResponse.redirect(new URL(APP_ROUTES.LOGIN.path, request.url));
	}

	return NextResponse.next();
}
