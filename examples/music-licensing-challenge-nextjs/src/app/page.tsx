import { APP_ROUTES } from "@/routes";
import { Button } from "@/components/Button";
import Link from "next/link";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center">
			<h1 className="text-6xl font-bold mb-4">
				Welcome to our Music Licensing App!
			</h1>
			<Button>
				<Link href={APP_ROUTES.MOVIES.path}>Go to Movies</Link>
			</Button>
		</div>
	);
};
export default Home;
