import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const FilterSkeleton = () => {
	return (
		<div className="flex items-center justify-center p-2 bg-white dark:bg-black">
			<div className="flex flex-col h-full md:w-[40rem] w-full rounded-lg">
				<Skeleton
					className="flex h-12 w-full items-center"
					baseColor="#202020"
					highlightColor="#444"
				/>
			</div>
		</div>
	);
};
