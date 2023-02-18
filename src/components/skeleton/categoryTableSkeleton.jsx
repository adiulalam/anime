import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useEffect, useLayoutEffect, useState } from "react";
import TableSkeleton from "./tableSkeleton";

const CategoryTableSkeleton = ({ showOverflow = true }) => {
	const { height } = useWindowDimensions();
	const [numCarousel, setNumCarousel] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		showOverflow && document.body.classList.add("overflow-hidden");

		setNumCarousel(Math.ceil(height / 130));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height]);

	return (
		<div className="bg-white dark:bg-black">
			{[...Array(numCarousel)].map((e, carouselIndex) => (
				<div key={carouselIndex} className="p-4">
					<TableSkeleton />
				</div>
			))}
		</div>
	);
};

export default CategoryTableSkeleton;
