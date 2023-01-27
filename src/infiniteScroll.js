import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { client } from "./services/client";
import { getMedia } from "./services/queries";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
	const router = useRouter();
	const { id } = router.query;

	const { loading, error, data, fetchMore } = useQuery(getMedia, {
		variables: { page: 1 },
		fetchPolicy: "cache-and-network",
	});

	const clickHandler = () => {
		fetchMore({
			variables: {
				page: data.Page.pageInfo.currentPage ? data.Page.pageInfo.currentPage + 1 : 1,
			},
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
		<div>
			{data?.Page?.media?.map((e, i) => (
				<div key={i}>
					<Link href={`/${e.id}`}>{`Go to pages/post/[pid ${e.id}].js`}</Link>
					<h1 className="text-3xl font-bold underline">{e.title.native}</h1>
				</div>
			))}
			<button onClick={() => clickHandler()}>Load more</button>
		</div>
	);
}
