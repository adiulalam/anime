import useWindowDimensions from "@/hooks/useWindowDimensions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useLayoutEffect, useState } from "react";
import CoverSkeleton from "./coverSkeleton";

const CategoryCoverSkeleton = ({ overflow = true }) => {
	const { height, width } = useWindowDimensions();
	const [numCarousel, setNumCarousel] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		overflow && document.body.classList.add("overflow-hidden");

		setNumCarousel(Math.ceil(height / 288));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height, width]);

	return (
		<div className="bg-white dark:bg-black">
			{[...Array(numCarousel)].map((e, carouselIndex) => (
				<div key={carouselIndex} className="p-4">
					<CoverSkeleton overflow={overflow} />
				</div>
			))}
		</div>
	);
};

export default CategoryCoverSkeleton;
