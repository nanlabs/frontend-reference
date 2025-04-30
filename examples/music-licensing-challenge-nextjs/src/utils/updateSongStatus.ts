import { client } from "@/lib/graphql/client";
import { UPDATE_SONG_LICENSE_STATUS } from "@/lib/graphql/mutations/songs";

interface UpdateSongVars {
	id: string;
	licenseStatus: string;
}

export const updateSongLicenseStatus = ({
	id,
	licenseStatus,
}: UpdateSongVars) => {
	const mutation = client.mutate({
		variables: {
			id,
			licenseStatus,
		},
		mutation: UPDATE_SONG_LICENSE_STATUS,
	});

	return mutation;
};
