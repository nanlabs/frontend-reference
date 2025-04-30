import MovieCard from "@/components/MovieCard";
import { client } from "@/lib/graphql/client";
import { GET_MOVIES } from "@/lib/graphql/queries/movies";
import type { MoviesData } from "@/types";

type Movies = {
	allMovies: MoviesData[];
};

const MoviesPage = async () => {
	const {
		data: { allMovies },
	} = await client.query<Movies>({
		query: GET_MOVIES,
	});
	return (
		<div>
			<h1 className="text-2xl mb-6">Movies Dashboard</h1>
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16">
				{allMovies?.length === 0 ? (
					<p>No movies available.</p>
				) : (
					allMovies?.map((movie) => (
						<MovieCard key={movie.id} movie={movie} showActionButton />
					))
				)}
			</div>
		</div>
	);
};

export default MoviesPage;
