import useWindowDimensions from "@/hooks/useWindowDimensions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useLayoutEffect, useState } from "react";
import GridSkeleton from "./gridSkeleton";

const CategorySkeleton = () => {
	const { height, width } = useWindowDimensions();
	const [numCategory, setNumCategory] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		document.body.classList.add("overflow-hidden");

		setNumCategory(Math.ceil(height / 245));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height, width]);

	return (
		<div className="bg-white dark:bg-black">
			{[...Array(numCategory)].map((e, CategoryIndex) => (
				<div key={CategoryIndex} className="py-5">
					<GridSkeleton />
				</div>
			))}
		</div>
	);
};

export default CategorySkeleton;
