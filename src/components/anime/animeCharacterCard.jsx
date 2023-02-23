import Image from "next/image";

export const AnimeCharacterCard = ({ data, showDual = false, label, hideBorder = false }) => {
	return (
		<div
			className={`${
				hideBorder ? "" : "border-2 border-black dark:border-white"
			} flex flex-col w-full rounded-xl bg-white dark:bg-black items-center justify-center`}
		>
			<p className="text-black dark:text-white text-xl font-medium p-2">{label}</p>
			<div
				className="flex flex-col w-full h-auto md:flex-row flex-wrap items-center justify-evenly gap-2 
			text-white dark:text-black py-2"
			>
				{data?.map((element, index) => (
					<div key={index} className="flex w-full sm:w-80 h-24 bg-black dark:bg-white">
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
							<div className="flex flex-col flex-wrap h-full w-full text-ellipsis overflow-hidden text-start ml-1">
								<div className="flex h-1/2 w-full">
									<p className="text-sm font-medium h-auto max-h-full overflow-auto">
										{element.node.name.userPreferred}
									</p>
								</div>
								<div className="flex h-1/2 w-full items-end">
									<p className="text-xs h-auto max-h-full overflow-auto">
										{element.role}
									</p>
								</div>
							</div>
						</div>
						{!_.isEmpty(element.voiceActors) && showDual && (
							<div className="flex flex-row relative justify-end h-full w-1/2 overflow-none z-1">
								<div className="flex flex-col flex-wrap h-full w-full text-ellipsis overflow-hidden text-end mr-1">
									<div className="flex h-1/2 w-full justify-end">
										<p className="text-sm font-medium h-auto max-h-full overflow-auto">
											{element?.voiceActors?.[0]?.name?.userPreferred}
										</p>
									</div>
									<div className="flex h-1/2 w-full justify-end items-end">
										<p className="text-xs h-auto max-h-full overflow-auto">
											{element?.voiceActors?.[0]?.language}
										</p>
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
