import { useEffect, useLayoutEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeSkeleton = () => {
	const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

	useIsomorphicEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<div className="bg-white dark:bg-black">
			<div className="flex flex-row flex-wrap overflow-hidden items-center justify-evenly gap-2 w-full h-full p-1">
				<div className="w-full h-40 md:h-64 rounded-lg">
					<Skeleton
						className="flex h-full w-full items-center"
						baseColor="#202020"
						highlightColor="#444"
					/>
				</div>
				<div className="w-full h-12 md:h-16 mt-6 rounded-lg">
					<Skeleton
						className="flex h-full w-full items-center"
						baseColor="#202020"
						highlightColor="#444"
					/>
				</div>
				<div className="w-full h-24 md:h-28 mt-6 rounded-lg">
					<Skeleton
						className="flex h-full w-full items-center"
						baseColor="#202020"
						highlightColor="#444"
					/>
				</div>
				<div className="w-full h-96 mt-6 rounded-lg overflow-hidden">
					<Skeleton
						className="flex h-full w-full items-center"
						baseColor="#202020"
						highlightColor="#444"
					/>
				</div>
			</div>
		</div>
	);
};

export default AnimeSkeleton;
