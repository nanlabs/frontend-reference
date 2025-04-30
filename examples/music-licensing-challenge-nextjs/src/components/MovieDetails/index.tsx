import type { MoviesData } from "@/types";

interface MovieDetailsProps {
	movie: MoviesData;
}

type MovieDetailField = {
	label: string;
	value: string | number | string[];
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
	const movieDetailsFields: MovieDetailField[] = [
		{ label: "Year", value: movie.year },
		{ label: "Genre", value: movie.genre },
		{ label: "Director", value: movie.director },
		{ label: "Total Scenes", value: movie.scenes.length },
		{
			label: "Total Tracks",
			value: movie.scenes.reduce(
				(total, scene) => total + scene.tracks.length,
				0,
			),
		},
		{ label: "Description", value: movie.description },
	];

	return (
		<div className="flex flex-col gap-4">
			{movieDetailsFields.map((field) => (
				<p key={movie.id}>
					<span className="font-bold">{field.label}: </span>
					<span className="text-gray-700">
						{Array.isArray(field.value) ? field.value.join(", ") : field.value}
					</span>
				</p>
			))}
		</div>
	);
};

export default MovieDetails;
