"use client";

import Link from "next/link";
import { logOut } from "@/lib/auth";
import { APP_ROUTES } from "@/routes";

const buttonStyles =
	"hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm text-gray-700";

export const SignOutButton = () => {
	return (
		<button
			type="button"
			onClick={async () => logOut()}
			className={buttonStyles}
		>
			Sign out
		</button>
	);
};
export const YourMoviesButton = () => {
	return (
		<Link href={APP_ROUTES.MOVIES.path} className={buttonStyles}>
			Your movies
		</Link>
	);
};
export const SignInButton = () => {
	return (
		<Link href={APP_ROUTES.LOGIN.path} className={buttonStyles}>
			Sign in
		</Link>
	);
};
