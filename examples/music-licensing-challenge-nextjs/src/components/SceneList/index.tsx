import Link from "next/link";
import { APP_ROUTES } from "@/routes";
import type { Scene } from "@/types";
import { SceneItem } from "./SceneItem";

const ScenesList = ({ scenes }: { scenes: Scene[] }) => {
	return (
		<ul className="flex flex-col space-y-6 mt-4">
			{scenes.map((scene) => (
				<Link
					key={scene.id}
					href={`${APP_ROUTES.SCENE_DETAILS.path}/${scene.id}`}
				>
					<SceneItem scene={scene} />
				</Link>
			))}
		</ul>
	);
};

export default ScenesList;
