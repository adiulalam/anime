import Image from "next/image";

export const AnimeCharacterCard = ({ data, showDual = false }) => {
	console.log("🚀 ~ file: animeCard.jsx:4 ~ AnimeCard ~ data:", data);
	return (
		<div className="flex flex-col w-full rounded-xl bg-white p-3 ">
			<p className="text-black">Main Characters</p>
			<div className="flex flex-col w-full h-auto md:flex-row flex-wrap items-center justify-evenly gap-2">
				{data.map((element, index) => (
					<div key={index} className="flex w-full sm:w-80 h-24 bg-black">
						<div
							className={`${
								!_.isEmpty(element.voiceActors) && showDual ? "w-1/2" : "w-full"
							} flex flex-row relative justify-start h-full overflow-none z-1`}
						>
							<div className="flex relative h-full w-auto aspect-[2/3]">
								<Image
									alt={element.node.name.userPreferred}
									src={element.node.image.large}
									fill
									className="object-contain"
									sizes="100%"
									priority={true}
								/>
							</div>
							<div className="flex flex-col flex-wrap h-full w-full text-ellipsis overflow-hidden">
								<div className="flex bg-red-500 h-1/2 w-full ">
									<p>{element.node.name.userPreferred}</p>
								</div>
								<div className="flex bg-red-700 h-1/2 w-full items-end">
									<p>{element.role}</p>
								</div>
							</div>
						</div>
						{!_.isEmpty(element.voiceActors) && showDual && (
							<div className="flex flex-row relative justify-end h-full w-1/2 overflow-none z-1">
								<div className="flex flex-col flex-wrap h-full w-full text-ellipsis overflow-hidden ">
									<div className="flex bg-red-600 h-1/2 w-full justify-end">
										<p>{element?.voiceActors?.[0]?.name?.userPreferred}</p>
									</div>
									<div className="flex bg-red-800 h-1/2 w-full justify-end items-end">
										<p>{element?.voiceActors?.[0]?.language}</p>
									</div>
								</div>
								<div className="flex relative h-full w-auto aspect-[2/3]">
									<Image
										alt={element?.voiceActors?.[0]?.name?.userPreferred}
										src={element?.voiceActors?.[0]?.image?.large}
										fill
										className="object-contain"
										sizes="100%"
										priority={true}
									/>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
