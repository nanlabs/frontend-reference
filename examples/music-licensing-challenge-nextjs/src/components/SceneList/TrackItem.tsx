import { SongItem } from "./SongItem";
import type { Track } from "@/types";

export const TrackItem = ({
	track,
	isEditable = false,
}: { track: Track; isEditable: boolean }) => (
	<li className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
		<p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
			{track.track_type}
		</p>
		<ul className="space-y-2">
			{track.songs.map((song) => (
				<SongItem key={song.title} song={song} isEditable={isEditable} />
			))}
		</ul>
	</li>
);
