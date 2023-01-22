import { useQuery } from "@apollo/client";
import { getLandingPage } from "./api/queries";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Switcher from "@/components/switcher";
const { data } = require("../data.json");

export default function Home() {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	const settings = {
		dots: true,
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
			<div className="flex flex-row justify-between items-center">
				<h2 className="px-2 text-xl md:text-3xl font-bold uppercase ">Trending now</h2>
				<h3 className="px-2 text-sm md:text-md">View More</h3>
			</div>
			<Slider {...settings}>
				{data?.trending?.media?.map((e, i) => (
					<div key={i} className="p-2">
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
					</div>
				))}
			</Slider>
		</div>
	);
}
