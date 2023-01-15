import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { client } from "./api/client";

export default function Home() {
	const get_media = gql`
		query Media($page: Int) {
			Page(page: $page) {
				pageInfo {
					currentPage
					lastPage
					hasNextPage
				}
				media(type: ANIME) {
					id
					title {
						romaji
						english
						native
					}
				}
			}
		}
	`;

	const { loading, error, data, fetchMore } = useQuery(get_media, {
		variables: { page: 1 },
		fetchPolicy: "cache-and-network",
	});

	const clickHandler = () => {
		fetchMore({
			variables: { page: data.Page.pageInfo.currentPage ? data.Page.pageInfo.currentPage + 1 : 1 },
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				Page: {
					pageInfo: {
						...fetchMoreResult.Page.pageInfo,
					},
					media: [...previousResult.Page.media, ...fetchMoreResult.Page.media],
				},
			}),
		});
	};

	return (
		<>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			{data?.Page?.media?.map((e, i) => (
				<h1 key={i} className="text-3xl font-bold underline">
					{e.title.native}
				</h1>
			))}
			<button onClick={() => clickHandler()}>Load more</button>
		</>
	);
}
