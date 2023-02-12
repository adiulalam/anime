import cleanDeep from "clean-deep";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { FilterPopover } from "../filters/filterPopover";

const CategoryFilter = ({ data, loading, searchQuery }) => {
	const router = useRouter();
	const {
		search,
		format,
		status,
		genre_in,
		season,
		year,
		tag_in,
		startDate_greater,
		endDate_lesser,
		averageScore_greater,
		averageScore_lesser,
		episodes_greater,
		episodes_lesser,
		sort,
	} = router.query;

	const [filterValue, setFilterValue] = useState({
		search: search ?? null,
		format: format ?? null,
		status: status ?? null,
		genre_in: genre_in ?? [],
		season: season ?? null,
		year: year ?? null,
		tag_in: tag_in ?? [],
		startDate_greater: startDate_greater ?? null,
		endDate_lesser: endDate_lesser ?? null,
		averageScore_greater: averageScore_greater ?? null,
		averageScore_lesser: averageScore_lesser ?? null,
		episodes_greater: episodes_greater ?? null,
		episodes_lesser: episodes_lesser ?? null,
		sort: sort ?? ["POPULARITY_DESC"],
	});

	const debouncedSearch = useMemo(
		() => _.debounce((variables) => searchQuery(variables), 200),
		[searchQuery]
	);

	useEffect(() => {
		debouncedSearch({ variables: cleanDeep(filterValue) });
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

export default CategoryFilter;
