import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { GoSettings } from "react-icons/go";
import { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import _ from "lodash";
import { getFilterResults } from "@/services/queries";
import { FilterSearchBar } from "./filterSearchBar";
import UseAnimations from "react-useanimations";
import settings2 from "react-useanimations/lib/settings2";

const Filter = ({ isDarkMode }) => {
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

	// const debouncer = useCallback(_.debounce(search, 500), []);

	const openModal = (value) => {
		console.log("onSelect", value);
	};

	return (
		<div className="flex h-full w-full items-center justify-center">
			<FilterSearchBar
				handleChange={handleChange}
				searchData={data?.filter}
				value={value}
				loading={loading}
			/>
			<button type="button" onClick={openModal}>
				<UseAnimations
					animation={settings2}
					size={50}
					strokeColor={isDarkMode ? "white" : "black"}
				/>
			</button>
		</div>
	);
};

export default Filter;
