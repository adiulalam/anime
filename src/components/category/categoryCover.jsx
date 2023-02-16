import { CarouselCard } from "../carousel/carouselCard";
import { useRef } from "react";

const CategoryCover = ({ data }) => {
	const boxWidth = useRef(null);
	return (
		<div
			className="flex flex-row flex-wrap items-center justify-evenly h-auto w-full gap-y-4 py-4"
			ref={boxWidth}
		>
			{data?.filter?.media?.map((element, index) => (
				<CarouselCard key={index} cardData={element} boxWidth={boxWidth} />
			))}
		</div>
	);
};

export default CategoryCover;
