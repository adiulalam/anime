import useWindowDimensions from "@/hooks/useWindowDimensions";
import useDarkMode from "@/hooks/useDarkMode";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useLayoutEffect, useState } from "react";

const CarouselSkeleton = () => {
	useDarkMode();
	const { height, width } = useWindowDimensions();

	const [numCard, setNumCard] = useState(0);
	const [numCarousel, setNumCarousel] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		document.body.classList.add("overflow-hidden");

		setNumCard(Math.ceil(width / 208));
		setNumCarousel(Math.ceil(height / 320));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height, width]);

	return (
		<div className="bg-white dark:bg-black">
			{[...Array(numCarousel)].map((e, carouselIndex) => (
				<div key={carouselIndex} className="py-5">
					<Skeleton className="flex flex-row h-10 w-full my-2" baseColor="#202020" />
					<div className="flex flex-row flex-wrap overflow-hidden items-center justify-evenly gap-2 md:h-72 md:w-full h-52 w-full bg-white dark:bg-black p-2">
						{[...Array(numCard)].map((card, cardIndex) => (
							<div
								key={cardIndex}
								className="md:h-full md:w-52 h-full w-36 rounded-lg "
							>
								<Skeleton
									className="flex h-full w-full items-center"
									baseColor="#202020"
									highlightColor="#444"
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default CarouselSkeleton;
