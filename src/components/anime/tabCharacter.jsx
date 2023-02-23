import { getCharacterPage } from "@/services/queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AnimeCharacterCard } from "./animeCharacterCard";
import _ from "lodash";
import cleanDeep from "clean-deep";
import { FilterAutocomplete } from "../filters/filterAutocomplete";
import { CardSkeleton } from "../skeleton/cardSkeleton";
import { AnimeCardSkeleton } from "../skeleton/animeCardSkeleton";

export const TabCharacter = () => {
	const router = useRouter();
	const { id } = router.query;

	const [characterVariables, setCharacterVariables] = useState({ id: id, language: "JAPANESE" });

	const [searchQuery, { loading, data, error, fetchMore }] = useLazyQuery(getCharacterPage, {
		fetchPolicy: "cache-and-network",
		variables: characterVariables,
	});

	useEffect(() => {
		!_.isEmpty(characterVariables) && searchQuery(cleanDeep(characterVariables));
	}, [characterVariables, searchQuery]);

	if (loading) {
		return (
			<>
				<AnimeCardSkeleton banner={true} />
			</>
		);
	}

	const fetchMoreData = () => {
		fetchMore({
			variables: {
				page: data.media.characters.pageInfo.currentPage
					? data.media.characters.pageInfo.currentPage + 1
					: 1,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				media: {
					characters: {
						pageInfo: {
							...fetchMoreResult.media.characters.pageInfo,
						},
						edges: [
							...previousResult.media.characters.edges,
							...fetchMoreResult.media.characters.edges,
						],
					},
				},
			}),
		});
	};

	return (
		<div>
			<div className="flex flex-row items-center justify-end w-full bg-black dark:bg-white p-2 rounded-lg gap-2">
				<label className="text-white dark:text-black text-sm sm:text-base font-medium">
					Language:
				</label>
				<FilterAutocomplete
					filterValue={characterVariables}
					setFilterValue={setCharacterVariables}
					filterKey={"language"}
				/>
			</div>
			<InfiniteScroll
				dataLength={
					data?.media.characters.edges ? data?.media?.characters?.edges?.length : 0
				}
				next={() => fetchMoreData()}
				hasMore={data?.media?.characters?.pageInfo?.hasNextPage}
				loader={<CardSkeleton showOverflow={false} />}
			>
				<AnimeCharacterCard
					data={data?.media?.characters?.edges}
					showDual={true}
					label={`Characters + ${characterVariables.language} VA`}
					hideBorder={true}
				/>
			</InfiniteScroll>
		</div>
	);
};
