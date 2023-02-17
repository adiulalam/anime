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
			<div className="flex flex-grow bg-slate-500 ">
				<div className="flex flex-col md:flex-row h-full w-full bg-blue-600">
					<div className="flex basis-1/2 md:h-1/1 h-1/1 md:w-1/2 w-1/1 bg-red-600">
						<div className="flex flex-col h-full w-full bg-purple-600">
							<div className="flex basis-1/2 h-1/1 w-1/1 bg-orange-500">
								<p>hello</p>
							</div>
							<div className="flex basis-1/2 h-1/1 w-1/1 bg-orange-600">
								<p>hello</p>
							</div>
						</div>
					</div>
					<div className="flex basis-1/2 md:h-1/1 h-1/1 md:w-1/2 w-1/1 bg-red-800">
						<div className="flex flex-row h-full w-full bg-purple-600">
							<div className="flex basis-1/2 md:h-1/1 h-1/1 md:w-1/2 w-1/1 bg-pink-600">
								<div className="flex md:flex-col flex-row h-full w-full bg-purple-600">
									<div className="flex basis-1/2 h-1/1 w-1/1 bg-pink-500">
										<p>hello</p>
									</div>
									<div className="flex basis-1/2 h-1/1 w-1/1 bg-pink-600">
										<p>hello</p>
									</div>
								</div>
							</div>
							<div className="flex basis-1/2 md:h-1/1 h-1/1 md:w-1/2 w-1/1 bg-pink-800">
								<div className="flex md:flex-col flex-row h-full w-full bg-purple-600">
									<div className="flex basis-1/2 h-1/1 w-1/1 bg-pink-700">
										<p>hello</p>
									</div>
									<div className="flex basis-1/2 h-1/1 w-1/1 bg-pink-900">
										<p>hello</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryTable;
