import { useQuery } from "@apollo/client";
import { getLandingPage } from "./api/queries";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Switcher from "@/components/switcher";
import { useEffect, useRef, useState } from "react";
const humanizeDuration = require("humanize-duration");
const { data } = require("../data.json");

export default function Home() {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	const slider = useRef(null);
	const boxRef1 = useRef(null);
	const [showRight, setShowRight] = useState(false);

	const scroll = (e) => {
		slider === null ? 0 : e.wheelDelta > 0 ? slider.current.slickNext() : slider.current.slickPrev();
	};

	useEffect(() => {
		const slickListDiv = document?.getElementsByClassName("slick-list")[0];
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
					{data?.popular?.media?.map((e, i) => (
						<div key={i} className="p-2">
							<div className="group relative ">
								<Link href={`/${e.id}`}>
									<div
										className={`flex flex-col md:h-72 md:w-52 h-52 w-36 justify-end bg-cover bg-no-repeat rounded-lg`}
										style={{
											backgroundImage: `url(${e.coverImage.large})`,
										}}
										onMouseEnter={(e) =>
											(boxRef1.current.offsetWidth / 2).toFixed(0) < e.clientX
												? setShowRight(false)
												: setShowRight(true)
										}
									>
										<div className="flex md:max-h-12 max-h-10 text-sm md:text-base font-medium w-full text-ellipsis overflow-hidden rounded-lg backdrop-blur-md backdrop-contrast-50">
											<h3 className="px-2 text-black [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] dark:text-white dark:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
												{e.title.userPreferred}
											</h3>
										</div>
									</div>
								</Link>

								<div
									className={`hidden group-hover:flex flex-col items-center justify-center hover:fixed absolute top-0 z-10 ${
										showRight ? "left-36 md:left-52 pl-5 pr-2" : "right-36 md:right-52 pr-5 pl-2"
									} flex-col md:h-72 md:w-56 h-52 w-40 rounded-lg transition-all duration-300 ease-in-out`}
									style={{
										clipPath: showRight
											? "polygon(100% 0, 7% 0, 7% 40%, 0 50%, 7% 60%, 7% 100%, 100% 100%)"
											: "polygon(0% 0%, 93% 0, 93% 40%, 100% 50%, 93% 60%, 93% 100%, 0 100%)",
										color: pickTextColorBasedOnBgColorAdvanced(
											e.coverImage.color ?? "#9CA38F",
											"#FFFFFF",
											"#000000"
										),
										backgroundColor: e.coverImage.color ?? "#9CA38F",
									}}
								>
									<div className="flex w-full h-auto justify-center items-center mt-2 ">
										<div className="flex w-full h-auto items-center justify-center bg-slate-600 break-normal rounded-lg">
											{e?.format}
										</div>
									</div>

									<div className="flex flex-row w-full h-auto justify-center items-center mt-2 gap-2 ">
										<div className="flex w-24 h-auto items-center justify-center bg-slate-400 break-normal rounded-lg">
											{e.status}
										</div>
										<div className="flex w-10 h-10 items-center justify-center bg-slate-400 rounded-full">
											{e.averageScore}
										</div>
									</div>

									<div className="flex w-full h-auto justify-center items-center mt-2 ">
										<div className="flex w-full h-auto items-center justify-center bg-slate-600 break-normal rounded-lg">
											{e?.nextAiringEpisode?.id
												? `Episode ${e.nextAiringEpisode.episode} in ${humanizeDuration(
														(e.nextAiringEpisode.timeUntilAiring * 1000).toFixed(0) ?? 0,
														{
															units: ["d"],
															round: true,
														}
												  )}`
												: `${e.season ?? ""} ${e.seasonYear ?? ""}`}
										</div>
									</div>

									{e.episodes && (
										<div className="flex w-full h-auto justify-center items-center mt-2 ">
											<div className="flex w-full h-auto items-center justify-center bg-slate-400 break-normal rounded-lg">
												Total Episodes: {e.episodes}
											</div>
										</div>
									)}
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

function pickTextColorBasedOnBgColorAdvanced(bgColor, lightColor, darkColor) {
	var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
	var r = parseInt(color.substring(0, 2), 16); // hexToR
	var g = parseInt(color.substring(2, 4), 16); // hexToG
	var b = parseInt(color.substring(4, 6), 16); // hexToB
	var uicolors = [r / 255, g / 255, b / 255];
	var c = uicolors.map((col) => {
		if (col <= 0.03928) {
			return col / 12.92;
		}
		return Math.pow((col + 0.055) / 1.055, 2.4);
	});
	var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
	return L > 0.179 ? darkColor : lightColor;
}
