import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userExample = process.env.NEXT_PUBLIC_USER_EXAMPLE;
const passwordExample = process.env.NEXT_PUBLIC_PASSWORD_EXAMPLE;

export const { auth, handlers, signIn, signOut } = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@example.com",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "password",
				},
			},
			authorize: async (credentials) => {
				if (
					credentials?.email === userExample &&
					credentials?.password === passwordExample
				) {
					return { email: userExample };
				}
				throw new Error("Invalid credentials");
			},
		}),
	],
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});
