import { Gradient } from "@/utils/getAnimationStyle";
import Image from "next/image";
import { Description } from "../molecules/description";
import { Title } from "../molecules/title";

export const AnimePoster = ({ src, name, description, color }) => {
	return (
		<Gradient
			className="flex justify-center w-full h-40 md:h-64"
			startColour={color ?? "#ee7752"}
		>
			<div className="flex relative justify-center w-28 h-full md:w-44 overflow-auto z-1">
				<Image
					alt={name}
					src={src}
					fill
					className="object-cover"
					sizes="100%"
					priority={true}
				/>
			</div>
			<div className="flex h-full w-full flex-col gap-1 p-1">
				<Title
					label={name}
					containerClass={`flex w-full h-1/4 text-md md:text-2xl justify-center overflow-hidden 
					leading-[1.1rem] md:leading-[1.8rem] font-medium`}
					labelClass={`flex px-2 rounded-md text-ellipsis backdrop-blur-md 
					backdrop-contrast-75 backdrop-saturate-100 backdrop-brightness-200 
					dark:backdrop-brightness-50`}
				/>
				<Description
					containerClass={`flex flex-wrap h-3/4 w-full bg-white dark:bg-black overflow-hidden hover:overflow-auto 
									text-sm md:text-base rounded-md`}
					labelClass={`leading-4 md:leading-5 ml-1`}
					label={description}
				/>
			</div>
		</Gradient>
	);
};
