"use server";

import { signIn, signOut, auth } from "@/auth";
import { APP_ROUTES } from "@/routes";

export const logIn = async ({
	email,
	password,
}: { email: string; password: string }) => {
	await signIn("credentials", {
		email,
		password,
		redirectTo: APP_ROUTES.HOME.path,
	});
};

export const logOut = async () => {
	await signOut({ redirectTo: APP_ROUTES.LOGIN.path });
};

export const getSession = async () => {
	return await auth();
};
