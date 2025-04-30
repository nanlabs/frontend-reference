import { NextResponse } from "next/server";
import { authMiddleware } from "@/middleware/auth";
import { auth } from "@/auth";
import { APP_ROUTES } from "@/routes";

export default auth((request) => {
	const protectedRoutes = Object.values(APP_ROUTES)
		.filter((route) => route.isProtected)
		.map((route) => route.path);

	const isProtectedRoute = protectedRoutes.some((route) =>
		request.nextUrl.pathname.startsWith(route),
	);

	if (isProtectedRoute) {
		return authMiddleware(request);
	}

	if (request.auth && request.nextUrl.pathname === APP_ROUTES.LOGIN.path) {
		const newUrl = new URL(APP_ROUTES.HOME.path, request.nextUrl.origin);
		return Response.redirect(newUrl);
	}

	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
