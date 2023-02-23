import useWindowDimensions from "@/hooks/useWindowDimensions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { CoverSkeleton } from "./coverSkeleton";

export const CarouselSkeleton = () => {
	const { height } = useWindowDimensions();
	const [numCarousel, setNumCarousel] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		document.body.classList.add("overflow-hidden");

		setNumCarousel(Math.ceil(height / 320));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height]);

	return (
		<div className="bg-white dark:bg-black">
			{[...Array(numCarousel)].map((e, carouselIndex) => (
				<div key={carouselIndex} className="py-5">
					<Skeleton className="flex flex-row h-10 w-full my-2" baseColor="#202020" />
					<CoverSkeleton />
				</div>
			))}
		</div>
	);
};
