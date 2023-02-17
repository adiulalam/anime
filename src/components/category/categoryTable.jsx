import Image from "next/image";

const CategoryTable = () => {
	return (
		<div className="flex flex-row w-full h-28">
			<div className="flex relative w-20 h-auto ">
				<Image
					alt={"test"}
					fill
					sizes="100%"
					src={
						"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg"
					}
					className="object-contain"
				/>
			</div>
			<div className="flex flex-col md:flex-row flex-grow overflow-hidden bg-slate-500 ">
				<div className="flex flex-col md:basis-1/2 basis-2/3 bg-red-600">
					<div className="flex basis-1/2 items-center bg-orange-500">
						<p>Title</p>
					</div>
					<div className="flex basis-1/2 items-center bg-orange-600">
						<p>genres</p>
					</div>
				</div>
				<div className="flex flex-row md:basis-1/2 basis-1/3 bg-red-800">
					<div className="flex basis-3/5 md:basis-1/2 md:flex-col flex-row bg-pink-600">
						<div className="flex basis-1/3 md:basis-1/2 bg-pink-500">
							<p>Score</p>
						</div>
						<div className="flex basis-2/3 md:basis-1/2 bg-pink-600">
							<p>Next Episode / Season Year</p>
						</div>
					</div>
					<div className="flex basis-2/5 md:basis-1/2 md:flex-col flex-row bg-pink-800">
						<div className="flex basis-1/2 bg-pink-700">
							<p>Format</p>
						</div>
						<div className="flex basis-1/2 bg-pink-900">
							<p>Airing Status</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryTable;
