import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

export const wsLink = new GraphQLWsLink(
	createClient({
		url: process.env.NEXT_PUBLIC_WS_URL,
	}),
);
