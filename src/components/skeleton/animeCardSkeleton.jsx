import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useEffect, useLayoutEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "./cardSkeleton";

export const AnimeCardSkeleton = ({ showOverflow = true, banner = false }) => {
	const { height } = useWindowDimensions();
	const [numCarousel, setNumCarousel] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		showOverflow && document.body.classList.add("overflow-hidden");

		setNumCarousel(Math.ceil(height / 96));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height]);

	return (
		<div className="bg-white dark:bg-black">
			{banner && (
				<div className="w-full h-16 rounded-lg p-2">
					<Skeleton
						className="flex h-full w-full items-center"
						baseColor="#202020"
						highlightColor="#444"
					/>
				</div>
			)}
			{[...Array(numCarousel)].map((e, carouselIndex) => (
				<div key={carouselIndex} className="p-4">
					<CardSkeleton showOverflow={showOverflow} />
				</div>
			))}
		</div>
	);
};
