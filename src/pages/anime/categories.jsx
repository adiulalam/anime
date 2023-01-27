import { useRouter } from "next/router";

const Categories = () => {
	const router = useRouter();
	const { name, type } = router.query;
	console.log("🚀 ~ file: categories.jsx:6 ~ Categories ~ name", type);

	return <p>Post: {type}</p>;
};

export default Categories;
