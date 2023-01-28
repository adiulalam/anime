import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { CarouselCard } from "./carouselCard";

export const Carousel = ({ data, moreSettings, title, sort, filter, index }) => {
	const slider = useRef(null);
	const carouselWidth = useRef(null);

	const scroll = (e) => {
		e.preventDefault();

		slider === null
			? 0
			: e.wheelDelta > 0
			? slider.current.slickNext()
			: slider.current.slickPrev();
	};

	useEffect(() => {
		const slickListDiv = document?.getElementsByClassName("slick-list")[index];

		slickListDiv.addEventListener("mouseenter", function () {
			setTimeout(() => {
				slickListDiv.addEventListener("wheel", scroll, true);
			}, 600);
		});
		slickListDiv.addEventListener("mouseleave", function () {
			slickListDiv.removeEventListener("wheel", scroll, true);
		});

		return () => slickListDiv.removeEventListener("wheel", scroll, true);
	}, [index]);

	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		variableWidth: true,
		autoplay: true,
		pauseOnHover: true,
		...moreSettings,
	};

	return (
		<div className="py-5">
			<div className="flex flex-row justify-between items-center">
				<h2 className="px-2 text-xl md:text-3xl font-bold uppercase text-black dark:text-white">
					{title}
				</h2>
				<Link
					href={{
						pathname: "/anime/categories",
						query: { sort: sort, ...filter },
					}}
				>
					<h3 className="px-2 text-sm md:text-md text-black dark:text-white">
						View More
					</h3>
				</Link>
			</div>
			<div ref={carouselWidth}>
				<Slider {...settings} ref={slider}>
					{data?.media?.map((e, i) => (
						<CarouselCard
							key={i}
							cardData={e}
							carouselWidth={carouselWidth}
							slider={slider}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};
