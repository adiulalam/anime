import { getRecommendedPage } from "@/services/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";
import CategoryCover from "../category/categoryCover";
import CategoryTable from "../category/categoryTable";
import CategoryGrid from "../category/categoryGrid";
import CategoryCoverSkeleton from "../skeleton/categoryCoverSkeleton";
import CategoryTableSkeleton from "../skeleton/categoryTableSkeleton";
import CategoryGridSkeleton from "../skeleton/categoryGridSkeleton";
import CoverSkeleton from "../skeleton/coverSkeleton";
import TableSkeleton from "../skeleton/tableSkeleton";
import GridSkeleton from "../skeleton/gridSkeleton";

export const TabRecommended = ({ categoryView }) => {
	const router = useRouter();
	const { id } = router.query;

	const { loading, data, error, fetchMore } = useQuery(getRecommendedPage, {
		fetchPolicy: "cache-and-network",
		variables: { id: id },
	});

	if (loading) {
		return categoryView === "cover" ? (
			<CategoryCoverSkeleton />
		) : categoryView === "table" ? (
			<CategoryTableSkeleton />
		) : (
			<CategoryGridSkeleton />
		);
	}

	const fetchMoreData = () => {
		fetchMore({
			variables: {
				page: data.media.recommendations.pageInfo.currentPage
					? data.media.recommendations.pageInfo.currentPage + 1
					: 1,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				media: {
					recommendations: {
						pageInfo: {
							...fetchMoreResult.media.recommendations.pageInfo,
						},
						nodes: [
							...previousResult.media.recommendations.nodes,
							...fetchMoreResult.media.recommendations.nodes,
						],
					},
				},
			}),
		});
	};

	return (
		<div className="bg-white dark:bg-black">
			<InfiniteScroll
				dataLength={
					data?.media.recommendations.nodes
						? data?.media?.recommendations?.nodes?.length
						: 0
				}
				next={() => fetchMoreData()}
				hasMore={data?.media?.recommendations?.pageInfo?.hasNextPage}
				loader={
					categoryView === "cover" ? (
						<CoverSkeleton showOverflow={false} />
					) : categoryView === "table" ? (
						<TableSkeleton showOverflow={false} />
					) : (
						<GridSkeleton showOverflow={false} />
					)
				}
			>
				{categoryView === "cover" ? (
					<CategoryCover
						data={data?.media?.recommendations?.nodes}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"mediaRecommendation"}
						accessorValue={null}
					/>
				) : categoryView === "table" ? (
					<CategoryTable
						data={data?.media?.recommendations?.nodes}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"mediaRecommendation"}
						accessorValue={null}
					/>
				) : (
					<CategoryGrid
						data={data?.media?.recommendations?.nodes}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"mediaRecommendation"}
						accessorValue={null}
					/>
				)}
			</InfiniteScroll>
		</div>
	);
};
