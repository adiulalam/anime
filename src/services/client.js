import { ApolloClient, InMemoryCache } from "@apollo/client";
import { defaultDataIdFromObject } from "@apollo/client";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				Page: {
					merge: false,
				},
				media: {
					merge: true,
				},
				Media: {
					merge: false,
				},
				characters: {
					merge: true,
				},
				staff: {
					merge: true,
				},
			},
		},
	},
});

export const client = new ApolloClient({
	uri: "https://graphql.anilist.co",
	cache: cache,
	ssrMode: typeof window === "undefined",
});
