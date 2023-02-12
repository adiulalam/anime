import { getFilterResults } from "@/services/queries";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import _ from "lodash";
import CategoryIcons from "@/components/category/categoryIcons";
import CategoryFilter from "@/components/category/categoryFilter";

const Categories = () => {
	const [searchQuery, { loading, data, error }] = useLazyQuery(getFilterResults);
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

	return (
		<div className="bg-white dark:bg-black">
			<div className="flex items-center justify-center h-16 p-2">
				<CategoryFilter data={data} loading={loading} searchQuery={searchQuery} />
			</div>
			<div className="flex items-center justify-end px-2">
				<CategoryIcons />
			</div>
		</div>
	);
};

export default Categories;
