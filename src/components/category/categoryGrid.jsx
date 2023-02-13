import Image from "next/image";

const CategoryGrid = () => {
	return (
		<div class="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-2 p-2">
			<div class="flex h-48 md:h-56 sm:h-40 w-full md:w-[28rem] sm:w-72 justify-center text-6xl border-2 border-gray-300 rounded-xl bg-gray-100">
				<div className="grid grid-cols-5 grid-rows-6 grid-flow-col w-full h-full">
					<div className="col-span-2 row-span-full">
						<div className="relative w-full h-full bg-contain ">
							<Image
								alt="one piece"
								fill
								object-fit="contain"
								src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg"
								className="rounded-l-xl"
							/>
						</div>
					</div>
					<div className="bg-black col-span-3 row-span-2">
						<div className="grid grid-cols-5 grid-rows-5 grid-flow-col w-full h-full">
							<div className="col-span-4 row-span-3 bg-red-400"> </div>
							<div className="col-span-3 row-span-2 bg-blue-600"> </div>
							<div className="col-span-2 row-span-2 bg-slate-800"> </div>
							<div className="col-span-1 row-span-3 bg-pink-600"> </div>
						</div>
					</div>
					<div className="bg-slate-500 col-span-3 row-span-3"></div>
					<div className="bg-slate-900 col-span-3 row-span-1"></div>
				</div>
			</div>
		</div>
	);
};

export default CategoryGrid;
