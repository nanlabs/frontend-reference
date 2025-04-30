export interface Song {
	id: string;
	title: string;
	artist: string;
	licenseStatus: string;
}

export interface Track {
	id: string;
	trackType: string;
	songs: Song[];
}

export interface Scene {
	id: string;
	sceneNumber: number;
	description: string;
	tracks: Track[];
}

export interface MoviesData {
	id: string;
	title: string;
	year: number;
	genre: string[];
	director: string;
	poster: string;
	description: string;
	scenes: Scene[];
}

export type LicenseStatus = {
	id: number;
	status: string;
};