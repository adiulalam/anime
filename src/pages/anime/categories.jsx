import { getFilterCategoryResults } from "@/services/queries";
import { useLazyQuery } from "@apollo/client";
import { Suspense, useEffect, useState } from "react";
import _ from "lodash";
import CategoryIcons from "@/components/category/categoryIcons";
import CategoryFilter from "@/components/category/categoryFilter";
import Link from "next/link";
import Image from "next/image";
import CategoryGrid from "@/components/category/categoryGrid";

const Categories = () => {
	const [searchQuery, { loading, data, error, fetchMore }] = useLazyQuery(
		getFilterCategoryResults,
		{
			fetchPolicy: "cache-and-network",
		}
	);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<>
				<h1>loading..</h1>
			</>
		);
	}

	const clickHandler = () => {
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
				<CategoryIcons />
			</div>
			<div>
				{/* <Test data={data} clickHandler={clickHandler} /> */}
				<CategoryGrid data={data} />
			</div>
		</div>
	);
};

const Test = ({ data, clickHandler }) => {
	return (
		<div>
			{data?.filter?.media?.map((e, i) => (
				<div key={i}>
					<Link href={`/${e.id}`}>{`Go to pages/post/[pid ${e.id}].js`}</Link>
					<h1 className="text-3xl font-bold underline">{e.title.userPreferred}</h1>
				</div>
			))}
			{data?.filter?.pageInfo?.hasNextPage && (
				<button onClick={() => clickHandler()}>Load more</button>
			)}
		</div>
	);
};

export default Categories;
