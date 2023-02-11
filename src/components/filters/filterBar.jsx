import { useEffect, useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import _ from "lodash";
import { getFilterResults } from "@/services/queries";
import { FilterPopover } from "./filterPopover";
import cleanDeep from "clean-deep";

const Filter = () => {
	const [search, { loading, data }] = useLazyQuery(getFilterResults);
	const [filterValue, setFilterValue] = useState({
		search: null,
		format: null,
		status: null,
		genre_in: [],
		season: null,
		year: null,
		tag_in: [],
		startDate_greater: null,
		endDate_lesser: null,
		averageScore_greater: null,
		averageScore_lesser: null,
		episodes_greater: null,
		episodes_lesser: null,
	});
	console.log("🚀 ~ file: filterBar.jsx:19 ~ Filter ~ filterValue", filterValue);

	const debouncedSearch = useMemo(
		() => _.debounce((variables) => search(variables), 200),
		[search]
	);

	useEffect(() => {
		!_.isEmpty(filterValue?.search) && debouncedSearch({ variables: cleanDeep(filterValue) });
	}, [filterValue, debouncedSearch]);

	return (
		<div className="flex h-full w-full items-center justify-center">
			<FilterPopover
				searchData={data?.filter}
				filterValue={filterValue}
				setFilterValue={setFilterValue}
				loading={loading}
			/>
		</div>
	);
};

export default Filter;
