"use client";

import { useState } from "react";
import { logIn } from "@/lib/auth";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setError("");

		try {
			await logIn({ ...credentials });
		} catch (error) {
			console.error(error);
			setError("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setError("");
		setCredentials({ ...credentials, [event.target.name]: event.target.value });
	};

	const disableLoginButton =
		loading || !credentials.email || !credentials.password;

	return (
		<div className="flex flex-col items-center justify-center my-auto h-full">
			<h1 className="text-3xl font-bold mb-6">Login Page</h1>
			<LoginForm
				credentials={credentials}
				error={error}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				loading={loading}
				disableLoginButton={disableLoginButton}
			/>
		</div>
	);
};

export default LoginPage;
