import { useQuery } from "@apollo/client";
import { GET_LICENSE_STATUS } from "@/lib/graphql/queries/licenses";
import { updateSongLicenseStatus } from "@/utils/updateSongStatus";
import { client } from "@/lib/graphql/client";
import { LicenseStatus } from "@/types";

const handleLicenseChange = async ({ id, licenseStatus }) => {
	try {
		await updateSongLicenseStatus({ id, licenseStatus });
	} catch (error) {
		console.error(error);
	}
};

export const getLicensesOptions = (songId) => {
	const { data: queryData } = useQuery(GET_LICENSE_STATUS, {
		client,
	});
	const licenseSStatusOptions = queryData?.allLicenseStatus || []
	return licenseSStatusOptions.map((value: LicenseStatus) => ({
		label: value.status,
		component: (
			<button
				type="button"
				onClick={() =>
					handleLicenseChange({ id: songId, licenseStatus: value.status })
				}
				className="hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm text-gray-700"
			>
				{value.status}
			</button>
		),
	}));
};
