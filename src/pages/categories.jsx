import Head from "next/head";
import { getFilterCategoryResults } from "@/services/queries";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { Icon } from "@/components/molecules";
import { CategoryTable, CategoryFilter, CategoryGrid, CategoryCover } from "@/components/category";
import {
	CoverSkeleton,
	TableSkeleton,
	GridSkeleton,
	CategoryTableSkeleton,
	CategoryCoverSkeleton,
	CategoryGridSkeleton,
	FilterSkeleton,
} from "@/components/skeleton";

// todo Error handling and empty data..
export default function Categories() {
	const [searchQuery, { loading, data, error, fetchMore }] = useLazyQuery(
		getFilterCategoryResults,
		{
			fetchPolicy: "cache-and-network",
		}
	);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryView, setCategoryView] = useState("");

	useEffect(() => {
		setCategoryView(localStorage.getItem("categoryView") ?? "grid");
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<>
				<FilterSkeleton />
			</>
		);
	}

	const fetchMoreData = () => {
		fetchMore({
			variables: {
				page: data.filter.pageInfo.currentPage ? data.filter.pageInfo.currentPage + 1 : 1,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				filter: {
					pageInfo: {
						...fetchMoreResult.filter.pageInfo,
					},
					media: [...previousResult.filter.media, ...fetchMoreResult.filter.media],
				},
			}),
		});
	};

	return (
		<div className="bg-white dark:bg-black">
			<Head>
				<title>Category</title>
			</Head>
			<div className="flex items-center justify-center h-16 p-2">
				<CategoryFilter data={data} loading={loading} searchQuery={searchQuery} />
			</div>
			<div className="flex items-center justify-end px-2">
				<Icon categoryView={categoryView} setCategoryView={setCategoryView} home={true} />
			</div>
			{loading ? (
				categoryView === "cover" ? (
					<CategoryCoverSkeleton />
				) : categoryView === "table" ? (
					<CategoryTableSkeleton />
				) : (
					<CategoryGridSkeleton />
				)
			) : (
				<InfiniteScroll
					dataLength={data?.filter?.media ? data?.filter?.media?.length : 0}
					next={() => fetchMoreData()}
					hasMore={data?.filter?.pageInfo?.hasNextPage}
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
						<CategoryCover data={data} />
					) : categoryView === "table" ? (
						<CategoryTable data={data} />
					) : (
						<CategoryGrid data={data} />
					)}
				</InfiniteScroll>
			)}
		</div>
	);
}
