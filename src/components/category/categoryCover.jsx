import { CarouselCard } from "../carousel/carouselCard";
import { useRef } from "react";

const CategoryCover = ({ data }) => {
	const boxWidth = useRef(null);
	return (
		<div
			className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-4 p-4"
			ref={boxWidth}
		>
			{data?.filter?.media?.map((element, index) => (
				<CarouselCard key={index} cardData={element} boxWidth={boxWidth} />
			))}
		</div>
	);
};

export default CategoryCover;
