import Image from "next/image";
import Filter from "@/components/filters/filterBar";

export const AnimeBanner = ({ src, name }) => {
	return (
		<div
			className={`${
				src ? "h-28 md:h-40" : "h-auto"
			} flex relative justify-center w-full z-10`}
		>
			{src && (
				<Image
					alt={name}
					src={src}
					fill
					className="object-cover opacity-80 dark:opacity-60"
					sizes="100%"
					priority={true}
				/>
			)}
			<div className="flex h-16 w-full md:w-auto p-2 rounded-lg backdrop-blur-md">
				<Filter />
			</div>
		</div>
	);
};
