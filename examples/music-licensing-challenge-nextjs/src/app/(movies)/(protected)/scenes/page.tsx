import { Input } from "@headlessui/react";
import { Button } from "@/components/Button";
import ScenesList from "@/components/SceneList";
import { client } from "@/lib/graphql/client";
import { GET_SCENES } from "@/lib/graphql/queries/scenes";
import type { Scene } from "@/types";

type Scenes = {
	allScenes: Scene[];
};

const ScenePage = async () => {
	const {
		data: { allScenes },
	} = await client.query<Scenes>({
		query: GET_SCENES,
	});
	return (
		<>
			<h1 className="text-2xl mb-6">Scenes</h1>
			<>
				<div className="flex gap-4">
					<Input
						type="text"
						name="track"
						className="border rounded-md data-[hover]:shadow data-[focus]:bg-blue-100"
					/>
					<Button>Search track</Button>
				</div>
				<ScenesList scenes={allScenes} />
			</>
		</>
	);
};

export default ScenePage;
