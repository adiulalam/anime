import useWindowDimensions from "@/hooks/useWindowDimensions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useLayoutEffect, useState } from "react";

const GridSkeleton = ({ overflow = true }) => {
	const { height, width } = useWindowDimensions();

	const [numCard, setNumCard] = useState(0);

	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
	useIsomorphicEffect(() => {
		overflow && document.body.classList.add("overflow-hidden");

		setNumCard(Math.ceil(width / 448));

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [height, width]);

	return (
		<div
			className="flex flex-row flex-wrap overflow-hidden items-center justify-evenly gap-2 h-48 md:h-56 sm:h-40 w-full 
		bg-white dark:bg-black p-2"
		>
			{[...Array(numCard)].map((card, cardIndex) => (
				<div
					key={cardIndex}
					className="md:h-full h-full w-full md:w-[28rem] sm:w-72 rounded-lg "
				>
					<Skeleton
						className="flex h-full w-full items-center"
						baseColor="#202020"
						highlightColor="#444"
					/>
				</div>
			))}
		</div>
	);
};

export default GridSkeleton;
