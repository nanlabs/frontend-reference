import { useQuery, useSubscription } from "@apollo/client";
import { client } from "@/lib/graphql/client";
import { LICENSE_STATUS_UPDATED } from "@/lib/graphql/subscriptions/license-status";
import { GET_SONG_BY_ID } from "@/lib/graphql/queries/songs";
import type { Song } from "@/types";

export function useSongWithLiveStatus(song: Song) {
	const { data: subscriptionData } = useSubscription(LICENSE_STATUS_UPDATED, {
		variables: { id: song.id },
		client,
	});
	const { data: queryData } = useQuery(GET_SONG_BY_ID, {
		variables: { id: song.id },
		client,
	});
	const songFromQuery = queryData?.song || song;
	const songFromSubscription = subscriptionData?.licenseChanged;
	const currentSong = songFromSubscription || songFromQuery;
	return currentSong;
}
