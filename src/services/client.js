import { ApolloClient, InMemoryCache } from "@apollo/client";

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
			},
		},
	},
});

export const client = new ApolloClient({
	uri: "https://graphql.anilist.co",
	cache: cache,
});
