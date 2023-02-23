import { useRef } from "react";
import { CategoryCover } from "../category/categoryCover";
import { CategoryGrid } from "../category/categoryGrid";
import { CategoryTable } from "../category/categoryTable";

export const AnimeRecommendation = ({ data, label, categoryView }) => {
	const boxWidth = useRef(null);

	return (
		<div
			className="flex flex-col w-full rounded-xl border-2 border-black dark:border-white bg-white 
	dark:bg-black"
		>
			<p className="text-black dark:text-white text-xl font-medium py-2">{label}</p>
			<div
				className="flex flex-row flex-wrap items-center justify-evenly h-auto w-full gap-y-4"
				ref={boxWidth}
			>
				{categoryView === "cover" ? (
					<CategoryCover
						data={data}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"mediaRecommendation"}
						accessorValue={null}
					/>
				) : categoryView === "table" ? (
					<CategoryTable
						data={data}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"mediaRecommendation"}
						accessorValue={null}
					/>
				) : (
					<CategoryGrid
						data={data}
						accessorKey={true}
						childAccessorKey={true}
						childAccessorValue={"mediaRecommendation"}
						accessorValue={null}
					/>
				)}
			</div>
		</div>
	);
};
