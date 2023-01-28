import Link from "next/link";
import { useState } from "react";
import { CarouselHover } from "./carouselHover";

export const CarouselCard = ({ cardData, carouselWidth, slider }) => {
	const [showRight, setShowRight] = useState(false);

	return (
		<div className="p-2">
			<div className="group relative">
				<Link href={`/anime/${cardData.id}`}>
					<div
						className={`flex flex-col md:h-72 md:w-52 h-52 w-36 justify-end bg-cover bg-no-repeat rounded-lg`}
						style={{
							backgroundImage: `url(${cardData.coverImage.large})`,
						}}
						onMouseEnter={(e) =>
							(carouselWidth.current.offsetWidth / 2).toFixed(0) < e.clientX
								? setShowRight(false)
								: setShowRight(true)
						}
						onTouchStart={(e) => {
							slider.current.slickPause();
							(carouselWidth.current.offsetWidth / 2).toFixed(0) <
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
								{cardData.title.userPreferred}
							</h3>
						</div>
					</div>
				</Link>

				<CarouselHover cardData={cardData} showRight={showRight} />
			</div>
		</div>
	);
};
