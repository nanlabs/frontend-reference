import { Input } from "@headlessui/react";
import { Button } from "@/components/Button";
import MovieCard from "@/components/MovieCard";
import ScenesList from "@/components/SceneList";
import MovieDetails from "@/components/MovieDetails";
import { GET_MOVIE_BY_ID } from "@/lib/graphql/queries/movies";
import { client } from "@/lib/graphql/client";
import type { MoviesData } from "@/types";

interface Params {
	movieId: string;
}

type Movie = {
	movie: MoviesData;
};

const MovieDetailsPage = async ({ params }: { params: Params }) => {
	const { movieId } = await params;
	const {
		data: { movie },
	} = await client.query<Movie>({
		query: GET_MOVIE_BY_ID,
		variables: { id: movieId },
	});
	if (!movie) {
		return <p>Movie not found</p>;
	}
	return (
		<>
			<h1 className="text-2xl mb-20">Movie Details</h1>
			<div className="grid md:grid-cols-2 md:gap-6 gap-20">
				<div className="flex flex-col mx-auto xl:max-w-1/2">
					<div>
						<MovieCard movie={movie} />
					</div>
					<div className="mt-6">
						<MovieDetails movie={movie} />
					</div>
				</div>
				<div className="xl:max-w-4/5 order-3">
					<div className="flex gap-4">
						<Input
							type="text"
							name="track"
							className="border rounded-md data-[hover]:shadow data-[focus]:bg-blue-100"
						/>
						<Button>Search track</Button>
					</div>
					<ScenesList scenes={movie.scenes} />
				</div>
				<div className="order-2 md:order-3 md:invisible">
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
				</div>
			</div>
		</>
	);
};

export default MovieDetailsPage;
