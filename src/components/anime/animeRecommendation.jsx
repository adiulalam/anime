import { useRef } from "react";
import { CarouselCard } from "../carousel/carouselCard";

export const AnimeRecommendation = ({ data, label }) => {
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
				{data?.map((element, index) => (
					<CarouselCard
						key={index}
						cardData={element?.mediaRecommendation}
						boxWidth={boxWidth}
					/>
				))}
			</div>
		</div>
	);
};
