import Image from "next/image";
import styled, { keyframes } from "styled-components";
import zoro from "../assets/zoro.png";
import Switcher from "@/components/switcher";

const fadeKeyframes = keyframes`
{
	from {
		box-shadow: inset -5px 0px 0px #888;
	}
	to {
		box-shadow: inset -5px 0px 0px transparent;
	}
}
`;

export const Fade = styled.div`
	animation: ${fadeKeyframes} 0.5s alternate infinite;
`;

export default function Error({ message }) {
	return (
		<div
			className="flex items-center flex-col flex-wrap gap-2 pb-20 justify-center h-screen m-0 text-center 
		w-full font-bold text-8xl text-neutral-600 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-600"
		>
			<Switcher />
			<div className="flex h-64 w-80 md:w-96 md:h-80 relative">
				<Image alt="zoro" src={zoro} fill className="rounded-lg" />
			</div>
			<Fade className="text-5xl md:text-8xl pr-3 w-2/3 h-auto text-clip">{`Error 404 ${
				message ? `- ${message}` : ""
			}`}</Fade>
		</div>
	);
}
