import { useRouter } from "next/router";

const Categories = () => {
	const router = useRouter();
	const { sort, ...rest } = router.query;
	// console.log("🚀 ~ file: categories.jsx:6 ~ Categories ~ filter", rest);

	return <p>Post: {sort}</p>;
};

export default Categories;
