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
	const [value, setValue] = useState({ search: "" });

	const handleChange = (e) => {
		setValue({ search: e.target.value });
	};

	const debouncedSearch = useMemo(
		() => _.debounce((variables) => search(variables), 200),
		[search]
	);

	useEffect(() => {
		!_.isEmpty(value?.search) && debouncedSearch({ variables: cleanDeep(value) });
	}, [value, debouncedSearch]);

	return (
		<div className="flex h-full w-full items-center justify-center">
			<FilterSearchBar
				handleChange={handleChange}
				searchData={data?.filter}
				value={value}
				loading={loading}
			/>
			<FilterPopover />
		</div>
	);
};

export default Filter;
