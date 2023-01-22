import { useQuery } from "@apollo/client";
import { getLandingPage } from "./api/queries";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Switcher from "@/components/switcher";
import { useEffect, useRef, useState } from "react";
const { data } = require("../data.json");

export default function Home() {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	const slider = useRef(null);
	const boxRef1 = useRef(null);

	function scroll(e) {
		if (slider === null) return 0;
		e.wheelDelta > 0 ? slider.current.slickNext() : slider.current.slickPrev();
	}

	useEffect(() => {
		let slickListDiv = document?.getElementsByClassName("slick-list")[0];
		slickListDiv.addEventListener("wheel", scroll, true);

		return () => {
			slickListDiv.removeEventListener("wheel", scroll, true);
		};
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		// speed: 5000,
		// autoplaySpeed: 5000,
		// pauseOnHover: true,
		// cssEase: "linear",
	};

	// console.log(data);

	const [showRight, setShowRight] = useState(false);

	const isMouseInBound = (e) => {
		const halfWidth = (boxRef1.current.offsetWidth / 2).toFixed(0);
		const hoverPosition = e.clientX;
		if (halfWidth < hoverPosition) {
			console.log(halfWidth, hoverPosition, false, "show on left side");
			setShowRight(false);
		} else {
			console.log(halfWidth, hoverPosition, true, "show on right side");
			setShowRight(true);
		}
	};
	return (
		<div className="bg-white dark:bg-black">
			<Switcher />
			{/* {[1, 2].map((el, ind) => ( */}
			<div
				className="py-5"
				// key={ind}
				ref={boxRef1}
			>
				<div className="flex flex-row justify-between items-center">
					<h2 className="px-2 text-xl md:text-3xl font-bold uppercase text-black dark:text-white">
						Trending now
					</h2>
					<h3 className="px-2 text-sm md:text-md text-black dark:text-white">View More</h3>
				</div>
				<Slider {...settings} ref={slider}>
					{data?.trending?.media?.map((e, i) => (
						<div key={i} className="group p-2">
							<div className="relative " onMouseEnter={isMouseInBound}>
								<Link href={`/${e.id}`}>
									<div
										className={`flex flex-col md:h-72 md:w-52 h-52 w-36 justify-end bg-cover bg-no-repeat rounded-lg`}
										style={{
											backgroundImage: `url(${e.coverImage.large})`,
										}}
									>
										<div className="flex md:max-h-12 max-h-10 text-sm md:text-base font-medium w-full text-ellipsis overflow-hidden rounded-lg backdrop-blur-md backdrop-contrast-50">
											<h3 className="px-2">{e.title.userPreferred}</h3>
										</div>
									</div>
								</Link>
								{/* <div class="hidden group-hover:flex bg-red-600">Child</div> */}
								<div
									className={`hidden group-hover:flex absolute top-0 z-10 ${
										showRight ? "-right-52" : "right-52"
									} bg-red-600 flex-col md:h-72 md:w-52 h-52 w-36 justify-end bg-cover bg-no-repeat rounded-lg`}
									style={{
										backgroundImage: `url(${e.coverImage.large})`,
									}}
								>
									<div className="flex md:max-h-12 max-h-10 text-sm md:text-base font-medium w-full text-ellipsis overflow-hidden rounded-lg backdrop-blur-md backdrop-contrast-50">
										<h3 className="px-2">{e.title.userPreferred}</h3>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
			{/* ))} */}
		</div>
	);
}
