import { useQuery } from "@apollo/client";
import { getLandingPage } from "../services/queries";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Switcher from "@/components/switcher";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import humanizeDuration from "humanize-duration";
import Color from "color";
const { data } = require("../data.json");

const gradientKeyframes = keyframes`
	{
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

const Gradient = styled.div`
	animation: ${gradientKeyframes} 10s ease infinite;
	background: linear-gradient(
		-45deg,
		${(props) => Color(props.startColour).rotate(180).hex() || "#23a6d5"},
		${(props) => Color(props.startColour).rotate(270).hex() || "#e73c7e"},
		${(props) => Color(props.startColour).rotate(0).hex() || "#ee7752"},
		${(props) => Color(props.startColour).rotate(90).hex() || "#23d5ab"}
	);
	background-size: 400% 400%;
`;

export default function Home() {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	const slider = useRef(null);
	const boxRef1 = useRef(null);
	const [showRight, setShowRight] = useState(false);

	const scroll = (e) =>
		slider === null
			? 0
			: e.wheelDelta > 0
			? slider.current.slickNext()
			: slider.current.slickPrev();

	useEffect(() => {
		const slickListDiv = document?.getElementsByClassName("slick-list")[0];
		slickListDiv.addEventListener("wheel", scroll, true);

		return () => slickListDiv.removeEventListener("wheel", scroll, true);
	}, []);

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
		// speed: 5000,
		// autoplaySpeed: 5000,
		// cssEase: "linear",
	};

	// console.log(data);

	const statusMap = {
		FINISHED: {
			name: "Finished",
			style: "bg-violet-400 dark:bg-violet-900",
		},
		RELEASING: {
			name: "Releasing",
			style: "bg-teal-400 dark:bg-teal-800",
		},
		NOT_YET_RELEASED: {
			name: "Not Released",
			style: "bg-indigo-400 dark:bg-indigo-800",
		},
		CANCELLED: {
			name: "Cancelled",
			style: "bg-pink-400 dark:bg-bg-pink-800",
		},
	};

	const scoreColour = (score) =>
		score >= 80
			? "bg-green-400 dark:bg-green-900"
			: score >= 60 && score < 80
			? "bg-yellow-400 dark:bg-yellow-700"
			: score < 60
			? "bg-red-400 dark:bg-red-800"
			: "bg-gray-300 dark:bg-gray-800";

	const seasonalMap = {
		WINTER: "bg-sky-400 dark:bg-sky-900",
		SPRING: "bg-lime-400 dark:bg-lime-800",
		SUMMER: "bg-rose-500 dark:bg-rose-800",
		FALL: "bg-orange-400 dark:bg-orange-800",
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
					<Link
						href={{
							pathname: "/anime/categories",
							query: { sort: ["TRENDING_DESC"] },
						}}
					>
						<h3 className="px-2 text-sm md:text-md text-black dark:text-white">
							View More
						</h3>
					</Link>
				</div>
				<Slider {...settings} ref={slider}>
					{data?.popular?.media?.map((e, i) => (
						<div key={i} className="p-2">
							<div className="group relative">
								<Link href={`/anime/${e.id}`}>
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
										onTouchStart={(e) => {
											slider.current.slickPause();
											(boxRef1.current.offsetWidth / 2).toFixed(0) <
											e?.changedTouches?.[0]?.clientX
												? setShowRight(false)
												: setShowRight(true);
										}}
										onTouchEnd={() => slider.current.slickPlay()}
									>
										<div
											className={`flex justify-center md:max-h-14 max-h-10 text-sm md:text-lg font-medium w-full 
												text-ellipsis overflow-hidden rounded-lg backdrop-blur-md backdrop-contrast-50 
												backdrop-saturate-200 backdrop-brightness-200 dark:backdrop-brightness-75`}
										>
											<h3
												className="px-2 text-center text-black [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] 
												dark:text-white dark:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
											>
												{e.title.userPreferred}
											</h3>
										</div>
									</div>
								</Link>

								<Gradient
									startColour={e.coverImage.color ?? "#ee7752"}
									className={`hidden group-hover:flex flex-col items-center justify-evenly absolute top-0 z-10 ${
										showRight
											? "left-36 md:left-52 pl-5 pr-2"
											: "right-36 md:right-52 pr-5 pl-2"
									} flex-col md:h-72 md:w-56 h-52 w-40 rounded-lg transition-all duration-300 ease-in-out`}
									style={{
										clipPath: showRight
											? "polygon(100% 0, 7% 0, 7% 40%, 0 50%, 7% 60%, 7% 100%, 100% 100%)"
											: "polygon(0% 0%, 93% 0, 93% 40%, 100% 50%, 93% 60%, 93% 100%, 0 100%)",
									}}
								>
									{(e?.status || e?.averageScore) && (
										<div className="flex flex-row w-full h-auto justify-center items-center gap-2 ">
											{e.status && (
												<div
													className={`${
														statusMap[e.status].style ??
														"bg-gray-300 dark:bg-gray-800"
													} flex w-auto py-1 px-2 h-auto items-center justify-center break-normal rounded-lg 
														text-black dark:text-white text-xs md:text-base`}
												>
													{statusMap[e.status].name}
												</div>
											)}
											{e.averageScore && (
												<div
													className={`${scoreColour(
														e.averageScore
													)} flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full 
														text-black dark:text-white text-xs md:text-base`}
												>
													{e.averageScore}
												</div>
											)}
										</div>
									)}

									<div className="flex w-full h-auto justify-center items-center">
										<div
											className={`${
												e.season
													? seasonalMap[e.season]
													: "bg-gray-300 dark:bg-gray-800"
											} flex w-auto h-auto items-center justify-center break-normal rounded-lg text-black 
												dark:text-white py-1 px-2 text-xs md:text-base`}
										>
											{e?.nextAiringEpisode?.id
												? `Episode ${
														e.nextAiringEpisode.episode
												  } in ${humanizeDuration(
														(
															e.nextAiringEpisode.timeUntilAiring *
															1000
														).toFixed(0) ?? 0,
														{
															units: ["d"],
															round: true,
														}
												  )}`
												: `${e.season ?? ""} ${e.seasonYear ?? ""}`}
										</div>
									</div>

									{e.episodes && (
										<div className="flex w-full h-auto justify-center items-center">
											<div className="flex py-1 px-2 md:px-4 h-auto items-center justify-center bg-slate-400 dark:bg-slate-800 text-black dark:text-white break-normal rounded-lg text-xs md:text-base">
												Total Episodes: {e.episodes}
											</div>
										</div>
									)}

									<div className="flex flex-row flex-wrap w-auto h-auto justify-center items-center ">
										{e?.genres?.slice(0, 5)?.map((e, i) => (
											<div
												key={i}
												className="flex w-auto h-auto items-center justify-center bg-gray-300 dark:bg-gray-700 text-black dark:text-white break-normal rounded-3xl m-1 px-2 text-xs md:text-base"
											>
												{e}
											</div>
										))}
									</div>
								</Gradient>
							</div>
						</div>
					))}
				</Slider>
			</div>
			{/* ))} */}
		</div>
	);
}
