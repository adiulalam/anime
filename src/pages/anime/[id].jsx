import { useRouter } from "next/router";

const Anime = () => {
	const router = useRouter();
	const { id } = router.query;

	return <p>Post: {id}</p>;
};

export default Anime;