import cleanDeep from "clean-deep";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { FilterPopover } from "../filters/filterPopover";
import _ from "lodash";

export const CategoryFilter = ({ data, loading, searchQuery }) => {
	const router = useRouter();

	const [filterValue, setFilterValue] = useState({});

	const debouncedSearch = useMemo(
		() => _.debounce((variables) => searchQuery(variables), 200),
		[searchQuery]
	);

	useEffect(() => {
		const { ...rest } = router.query;

		setFilterValue({
			type: rest.search ?? "ANIME",
			search: rest.search ?? null,
			format: rest.format ?? null,
			status: rest.status ?? null,
			genre_in: rest.genre_in ?? [],
			season: rest.season ?? null,
			year: rest.year ?? null,
			tag_in: rest.tag_in ?? [],
			startDate_greater: rest.startDate_greater ?? null,
			endDate_lesser: rest.endDate_lesser ?? null,
			averageScore_greater: rest.averageScore_greater ?? null,
			averageScore_lesser: rest.averageScore_lesser ?? null,
			episodes_greater: rest.episodes_greater ?? null,
			episodes_lesser: rest.episodes_lesser ?? null,
			sort: rest.sort ?? ["POPULARITY_DESC"],
		});
	}, [router.query]);

	useEffect(() => {
		!_.isEmpty(filterValue) && debouncedSearch({ variables: cleanDeep(filterValue) });
	}, [filterValue, debouncedSearch]);

	return (
		<FilterPopover
			searchData={data?.filter}
			filterValue={filterValue}
			setFilterValue={setFilterValue}
			loading={loading}
		/>
	);
};
