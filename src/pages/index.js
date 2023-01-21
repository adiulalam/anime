import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { getLandingPage } from "./api/queries";
import Link from "next/link";

export default function Home() {
	const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
		fetchPolicy: "cache-and-network",
	});

	return (
		<div>
			{data?.trending?.media?.map((e, i) => (
				<div key={i}>
					<Link href={`/${e.id}`}>
						<h1 className="text-3xl font-bold underline">{e.title.userPreferred}</h1>
					</Link>
				</div>
			))}
		</div>
	);
}
