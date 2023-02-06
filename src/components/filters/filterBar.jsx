import { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import _ from "lodash";
import { getFilterResults } from "@/services/queries";
import { FilterSearchBar } from "./filterSearchBar";
import { FilterPopover } from "./filterPopover";
const cleanDeep = require("clean-deep");

const Filter = () => {
	const [search, { loading, data }] = useLazyQuery(getFilterResults);
	const [filterValue, setFilterValue] = useState({ search: "" });

	const handleChange = (e) => {
		setFilterValue({ search: e.target.value });
	};

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
				handleChange={handleChange}
				searchData={data?.filter}
				value={filterValue}
				loading={loading}
			/>
		</div>
	);
};

export default Filter;
