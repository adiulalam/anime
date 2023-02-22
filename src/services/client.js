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
			},
		},
	},
});

// const cache = new InMemoryCache({
// 	dataIdFromObject(responseObject) {
// 		switch (responseObject.__typename) {
// 			case "Product":
// 				return console.log(responseObject);
// 			case "Person":
// 				return console.log(responseObject);
// 			default:
// 				return console.log(responseObject);
// 		}
// 	},
// });

export const client = new ApolloClient({
	uri: "https://graphql.anilist.co",
	cache: cache,
	ssrMode: typeof window === "undefined",
});
