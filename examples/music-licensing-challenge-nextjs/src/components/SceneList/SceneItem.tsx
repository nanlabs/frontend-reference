import { TrackItem } from "./TrackItem";
import type { Scene } from "@/types";

export const SceneItem = ({
	scene,
	isEditable = false,
}: { scene: Scene; isEditable?: boolean }) => (
	<li className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 border border-gray-200 dark:border-gray-700 list-none">
		<p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
			Scene {scene.scene_number}
		</p>
		<p className="text-gray-600 dark:text-gray-400 mb-4">{scene.description}</p>
		<ul className="space-y-4">
			{scene.tracks.map((track) => (
				<TrackItem key={track.id} track={track} isEditable={isEditable} />
			))}
		</ul>
	</li>
);
