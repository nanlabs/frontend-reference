import { APP_ROUTES } from "@/routes";
import { getSession } from "@/lib/auth";
import { SignOutButton, SignInButton, YourMoviesButton } from "./actionButtons";

export const getNavbarLinks = () => {
	return Object.values(APP_ROUTES)
		.map(
			(route) =>
				route.isNavbarItem && {
					name: route.name,
					href: route.path,
					isProtected: route.isProtected,
				},
		)
		.filter(Boolean) as Array<{
		name: string;
		href: string;
		isProtected: boolean;
	}>;
};

export const getMenuOptions = async () => {
	const session = await getSession();
	if (session) {
		return [
			{
				label: "Your movies",
				component: <YourMoviesButton />,
			},
			{
				label: "Sign out",
				component: <SignOutButton />,
			},
		];
	}

	return [
		{
			label: "Sign in",
			component: <SignInButton />,
		},
	];
};
