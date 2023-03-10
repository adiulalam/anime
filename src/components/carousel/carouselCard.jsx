import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import _ from "lodash";
import { CarouselHover } from "./carouselHover";
import { Title } from "../molecules";

export const CarouselCard = ({ cardData, boxWidth, slider }) => {
	const [showRight, setShowRight] = useState(false);

	return (
		<div className="px-2">
			<div className="group relative">
				<Link href={`/${cardData.id}`}>
					<div
						className={`flex flex-col relative md:h-72 md:w-52 h-52 w-36 justify-end rounded-lg`}
						onMouseEnter={(e) =>
							(boxWidth.current.offsetWidth / 2).toFixed(0) < e.clientX
								? setShowRight(false)
								: setShowRight(true)
						}
						onTouchStart={(e) => {
							!_.isEmpty(slider) && slider.current.slickPause();
							(boxWidth.current.offsetWidth / 2).toFixed(0) <
							e?.changedTouches?.[0]?.clientX
								? setShowRight(false)
								: setShowRight(true);
						}}
						onTouchEnd={() => !_.isEmpty(slider) && slider.current.slickPlay()}
					>
						<Image
							alt={cardData.title.userPreferred}
							src={cardData.coverImage.large}
							fill
							sizes="100%"
							className="rounded-lg"
							object-fit="cover"
						/>
						<Title
							label={cardData.title.userPreferred}
							containerClass={`flex justify-center md:max-h-14 max-h-10 text-sm md:text-lg font-medium w-full
									text-ellipsis overflow-hidden rounded-lg backdrop-blur-md backdrop-contrast-50
									backdrop-saturate-200 backdrop-brightness-200 dark:backdrop-brightness-75`}
							labelClass={`px-2 text-center text-black [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]
									dark:text-white dark:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}
						/>
					</div>
				</Link>

				<CarouselHover cardData={cardData} showRight={showRight} />
			</div>
		</div>
	);
};
