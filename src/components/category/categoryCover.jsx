import Image from "next/image";
import { seasonalMap, scoreColour, statusMap, formatMap } from "@/utils/constMap";
import humanizeDuration from "humanize-duration";
import { Gradient } from "@/utils/getAnimationStyle";
import Color from "color";
import Link from "next/link";
import { CarouselCard } from "../carousel/carouselCard";
import { useRef } from "react";

const CategoryCover = ({ data }) => {
	const boxWidth = useRef(null);
	return (
		<div
			className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-2 p-2"
			ref={boxWidth}
		>
			{data?.filter?.media?.map((element, index) => (
				<CarouselCard key={index} cardData={element} boxWidth={boxWidth} />
			))}
		</div>
	);
};

export default CategoryCover;
