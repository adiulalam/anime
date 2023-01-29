import Image from "next/image";
import zoro from "../assets/zoro.png";
import Switcher from "@/components/switcher";
import { Fade } from "@/utils/getAnimationStyle";

export const PageError = ({ message, statuscode }) => {
	return (
		<div
			className="flex items-center flex-col flex-wrap gap-2 px-4 justify-center h-screen m-0 text-center 
		w-full font-bold text-8xl text-neutral-600 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-600"
		>
			<Switcher />
			<div className="flex h-64 w-80 md:w-96 md:h-80 relative">
				<Image alt="zoro" src={zoro} fill className="rounded-lg" />
			</div>
			<Fade className="text-5xl md:text-8xl pr-3 w-fit h-auto text-clip">{`Error ${
				statuscode ? `${statuscode}` : "Unknown"
			} ${message ? `- ${message}` : ""}`}</Fade>
		</div>
	);
};
