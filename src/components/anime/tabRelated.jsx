import { getRelatedPage } from "@/services/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";
import { CategoryCover } from "../category/categoryCover";
import { CategoryTable } from "../category/categoryTable";
import { CategoryGrid } from "../category/categoryGrid";
import { CategoryCoverSkeleton } from "../skeleton/categoryCoverSkeleton";
import { CategoryTableSkeleton } from "../skeleton/categoryTableSkeleton";
import { CategoryGridSkeleton } from "../skeleton/categoryGridSkeleton";
import { CoverSkeleton } from "../skeleton/coverSkeleton";
import { TableSkeleton } from "../skeleton/tableSkeleton";
import { GridSkeleton } from "../skeleton/gridSkeleton";

export const TabRelated = ({ categoryView }) => {
	const router = useRouter();
	const { id } = router.query;

	const { loading, data, error, fetchMore } = useQuery(getRelatedPage, {
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
				page: data.media.relations.pageInfo.currentPage
					? data.media.relations.pageInfo.currentPage + 1
					: 1,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				media: {
					relations: {
						pageInfo: {
							...fetchMoreResult.media.relations.pageInfo,
						},
						edges: [
							...previousResult.media.relations.edges,
							...fetchMoreResult.media.relations.edges,
						],
					},
				},
			}),
		});
	};

	return (
		<div className="bg-white dark:bg-black">
			<InfiniteScroll
				dataLength={data?.media.relations.edges ? data?.media?.relations?.edges?.length : 0}
				next={() => fetchMoreData()}
				hasMore={data?.media?.relations?.pageInfo?.hasNextPage}
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
						data={data?.media?.relations?.edges}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"node"}
						accessorValue={null}
					/>
				) : categoryView === "table" ? (
					<CategoryTable
						data={data?.media?.relations?.edges}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"node"}
						accessorValue={null}
					/>
				) : (
					<CategoryGrid
						data={data?.media?.relations?.edges}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"node"}
						accessorValue={null}
					/>
				)}
			</InfiniteScroll>
		</div>
	);
};
