import { SceneItem } from "@/components/SceneList/SceneItem";
import { client } from "@/lib/graphql/client";
import { GET_SCENE_BY_ID } from "@/lib/graphql/queries/scenes";
import type { Scene } from "@/types";

interface ScenePageProps {
	params: {
		sceneId: string;
	};
}

type SceneData = {
	scene: Scene;
};

export default async function ScenePage({ params }: ScenePageProps) {
	const { sceneId } = await params;
	const {
		data: { scene },
	} = await client.query<SceneData>({
		query: GET_SCENE_BY_ID,
		variables: { id: sceneId },
	});

	if (!scene) {
		return <div>Scene not found</div>;
	}

	return (
		<>
			<SceneItem scene={scene} isEditable />
		</>
	);
}
