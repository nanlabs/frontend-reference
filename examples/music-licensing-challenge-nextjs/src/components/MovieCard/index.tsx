import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import type { MoviesData } from "@/types";
import { APP_ROUTES } from "@/routes";

const MovieCard = ({
	movie,
	showActionButton = false,
}: { movie: MoviesData; showActionButton?: boolean }) => {
	return (
		<div className="flex flex-col gap-5 justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
			<div className="relative h-80">
				<Image
					className="rounded-t-lg mx-auto !max-w-3xs"
					src={movie.poster}
					alt={movie.title}
					loading="lazy"
					sizes="33vw"
					fill
				/>
			</div>
			<div>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{movie.title}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{movie.description}
				</p>
			</div>
			{showActionButton && (
				<div className="flex justify-center">
					<Button>
						<Link href={`${APP_ROUTES.MOVIES.path}/${movie.id}`}>
							Go to details
						</Link>
					</Button>
				</div>
			)}
		</div>
	);
};

export default MovieCard;
