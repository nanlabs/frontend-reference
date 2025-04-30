import Link from "next/link";
import { Button } from "@/components/Button";
import { APP_ROUTES } from "@/routes";

interface LoginFormProps {
	credentials: {
		email: string;
		password: string;
	};
	error: string;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	loading: boolean;
	disableLoginButton: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
	credentials,
	error,
	handleSubmit,
	handleChange,
	loading,
	disableLoginButton,
}) => {
	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
		>
			{error && (
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
					{error}
				</div>
			)}
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="email"
				>
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					name="email"
					type="email"
					placeholder="Email"
					value={credentials.email}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					value={credentials.password}
					onChange={handleChange}
				/>
			</div>
			<div className="flex items-center justify-between">
				<Button
					className="!px-4 data-[disabled]:bg-gray-300"
					type="submit"
					disabled={disableLoginButton}
				>
					{loading ? "Loading..." : "Sign In"}
				</Button>

				<Link
					href={APP_ROUTES.SIGNUP.path}
					className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
				>
					Sign Up
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
