import { useMemo, useState } from "react";
import { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import _ from "lodash";
import { getFilterResults } from "@/services/queries";
import { FilterSearchBar } from "./filterSearchBar";
import { FilterPopover } from "./filterPopover";

const Filter = () => {
	const [search, { loading, data }] = useLazyQuery(getFilterResults);
	const [value, setValue] = useState({ search: "" });

	const debouncedSearch = useMemo(() => _.debounce(search, 500), [search]);

	const handleChange = useCallback(
		(e) => {
			setValue({ search: e.target.value });
			debouncedSearch({ variables: { search: e.target.value } });
		},
		[debouncedSearch]
	);

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
