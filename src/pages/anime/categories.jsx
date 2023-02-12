import { useRouter } from "next/router";
import { useState } from "react";

const Categories = () => {
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
	// console.log("🚀 ~ file: categories.jsx:6 ~ Categories ~ genre_in", filterValue);
	// const router = useRouter();
	console.log(router.pathname);

	return <p>Post: {sort}</p>;
};

export default Categories;
