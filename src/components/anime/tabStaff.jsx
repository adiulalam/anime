import { getStaffPage } from "@/services/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { AnimeCharacterCard } from "./animeCharacterCard";
import _ from "lodash";
import CardSkeleton from "../skeleton/cardSkeleton";
import AnimeCardSkeleton from "../skeleton/animeCardSkeleton";

export const TabStaff = () => {
	const router = useRouter();
	const { id } = router.query;

	const { loading, data, error, fetchMore } = useQuery(getStaffPage, {
		fetchPolicy: "cache-and-network",
		variables: { id: id },
	});

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
				page: data.media.staff.pageInfo.currentPage
					? data.media.staff.pageInfo.currentPage + 1
					: 1,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				media: {
					staff: {
						pageInfo: {
							...fetchMoreResult.media.staff.pageInfo,
						},
						edges: [
							...previousResult.media.staff.edges,
							...fetchMoreResult.media.staff.edges,
						],
					},
				},
			}),
		});
	};

	return (
		<div>
			<InfiniteScroll
				dataLength={data?.media.staff.edges ? data?.media?.staff?.edges?.length : 0}
				next={() => fetchMoreData()}
				hasMore={data?.media?.staff?.pageInfo?.hasNextPage}
				loader={<CardSkeleton showOverflow={false} />}
			>
				<AnimeCharacterCard
					data={data?.media?.staff?.edges}
					showDual={true}
					label={`All Staff`}
					hideBorder={true}
				/>
			</InfiniteScroll>
		</div>
	);
};
