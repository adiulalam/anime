import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TableSkeleton = () => {
	return (
		<div
			className="flex flex-col flex-wrap overflow-hidden items-center justify-evenly gap-2 h-28 w-full 
		bg-white dark:bg-black p-2"
		>
			<div className="md:h-full h-full w-full rounded-lg ">
				<Skeleton
					className="flex h-full w-full items-center"
					baseColor="#202020"
					highlightColor="#444"
				/>
			</div>
		</div>
	);
};
