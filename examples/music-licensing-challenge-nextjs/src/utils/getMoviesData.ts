import { fetchApi } from "@/lib/fetchApi";
import type { MoviesData, Scene } from "@/types";

const fetchMoviesData = async (): Promise<MoviesData[]> => {
	const response = await fetchApi("/api/movies");
	return response.json();
};

const findSceneById = (movies: MoviesData[], sceneId: string): Scene | null => {
	return (
		movies
			.flatMap((movie) => movie.scenes)
			.find((scene) => scene.id === sceneId) || null
	);
};

export const getMoviesData = async ({
	movieId,
	sceneId,
}: {
	movieId?: string;
	sceneId?: string;
}): Promise<MoviesData[] | MoviesData | Scene | null> => {
	try {
		const movies = await fetchMoviesData();

		if (!movieId && !sceneId) {
			return movies;
		}

		if (sceneId) {
			return findSceneById(movies, sceneId);
		}

		if (movieId) {
			return movies.find((movie) => movie.id === movieId) || null;
		}

		return movies;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		return null;
	}
};

export const getScenesData = async ({
	sceneId,
}: {
	sceneId?: string;
}): Promise<Scene[] | Scene | null> => {
	try {
		const movies = await fetchMoviesData();
		const allScenes = movies.flatMap((movie) => movie.scenes);

		if (!sceneId) {
			return allScenes;
		}

		return findSceneById(movies, sceneId);
	} catch (error) {
		console.error("Error fetching scenes data:", error);
		return null;
	}
};
