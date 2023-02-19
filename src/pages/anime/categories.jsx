import { getFilterCategoryResults } from "@/services/queries";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import _ from "lodash";
import CategoryFilter from "@/components/category/categoryFilter";
import CategoryGrid from "@/components/category/categoryGrid";
import CategoryCoverSkeleton from "@/components/skeleton/categoryCoverSkeleton";
import CategoryGridSkeleton from "@/components/skeleton/categoryGridSkeleton";
import { FilterSkeleton } from "@/components/skeleton/filterSkeleton";
import CategoryCover from "@/components/category/categoryCover";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoryTable from "@/components/category/categoryTable";
import CategoryTableSkeleton from "@/components/skeleton/categoryTableSkeleton";
import { Icon } from "@/components/molecules/icon";

// todo Error handling and empty data..
const Categories = () => {
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
							<CategoryCoverSkeleton showOverflow={false} />
						) : categoryView === "table" ? (
							<CategoryTableSkeleton showOverflow={false} />
						) : (
							<CategoryGridSkeleton showOverflow={false} />
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
};

export default Categories;
