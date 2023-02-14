import Image from "next/image";

const CategoryGrid = () => {
	return (
		<div class="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-2 p-2">
			<div class="flex h-48 md:h-56 sm:h-40 w-full md:w-[28rem] sm:w-72 justify-center text-6xl border-2 border-gray-300 rounded-xl bg-gray-100">
				<div className="grid grid-cols-5 grid-rows-5 grid-flow-col w-full h-full">
					<div className="col-span-2 row-span-full">
						<div className="relative w-full h-full bg-cover">
							<Image
								alt="one piece"
								fill
								src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUQExMVFhUXFxgXFxcXGBcXFxcXFxcXFxcVFxcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQQAwgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAAIDBAcF/8QAJxABAQACAAYCAgMBAQEAAAAAAAECERIhYXGB8DFBUZEDscGhE/H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+y3GDghsWuX/AMATAaa17yWIDHE8F0N9RAa4WcDvupjQFOqshoD+SDfgGcll8GKAyo3kMAZn+tyc2bTLzA334ZjTOgMo0voUGpeyZ1fe6B04uoHF7pAdq3kJEBFitMBZT47Mt5X4c9gZTKFAPMZDiMAaKkQA4qSfTWMBnZxvVXCiAtnYMygCUbbmTOwG+itVh0Cl6M3s0AOkd3qgEvRq6Z0LAasEnRWKQDuM2nhrPCCTUxGgVqsa0vIM6UhOgZ2jYrANv9hW8vJxkBnKCTu1Z3UgJY9lwoFjCsapAWxTIzIB2jwRAuLqay1cgCG1zBUGwADYlqg1ID9CAtLS2KB30NE0bQBxhhvvMGOFqRmqAcvIrVZoKZLyopO4CdkpBQbTnpA666CVrOc/AkBniamSxGu4L88xjirVOwKTn8rRwpkmvu0GbibOoyggG4rhNnlbBa6qVbXEC2Nrii2C4eikolUoNWs7alZoHycYNrYDSsFyUA/tGeEB3drdW1sBjTjlRs7oM5Wo3qAU8/pQSniA7MvRTJc/oFzGux5/kzYMzHsNEAse432/61J78gFss07Br9CqZLIBKrWti6BlHUXYDtFArFBlTKAkq0dqgzVpU6BT3mKloC1oRWANrag9/wCgdnbNOIIWniVoC1T35PEJQPn+1aZO4sBaW2haDGzCNA0hz6kBpaWO2oDOjL0VHgBKqocp2AVSEgNpLwC0te+wb6HwCvQSq++7EgNSrKiKyAbN/Y1pUUD5OmWgNFErUl6gNs2mToJj09/YM333adP/ACv49/aBYn37C8gKPf8Aje1QZ+1b0XF74Vy6AqreotN8gtnEaOOPYDL7zUyEgoG3oZWdHQD36K5jd97Aqt0RrIBvquJbOIGZKyjH5+Ve4KRa61SUa7gZev8AaOuiBcVG1KeYM82pirj+UDMxMxVEBVWjKnUBWrGxcj49/YKX+wb/AKyDd+OrOlwiQDw9VNMtSe+AV+izfo6BWrmoZAE2b7+1Ibj1ATuIlbQa2mLUDdo5mwWgoaN9fwNgb2UR0DNp1VVcgWvybkzxLfv6A7QlGMBoTX4G1KCPD190I1lkAW4KgPH7yUyEnvsWwMrevzXPZBSHh90GZAdeH3QZl61A0rVxCgvCUy7tSg56MjWUjOgWVFVpyAbaxrM01AVyWlDfIM6XCVliDMqtq0uHqA2t/hDQHahxxNxBb7Dip0LAWxclYeQC3t+k1YgauV92DxdzsGfI0RsBpQnn+AZay/wQ0BFVEAkU0VAWMRgmQCq+TVAY4jjtaWwM8rTQ8g0zTvq1Qc9GQ8SloNQKS+7QM2tz+mNdTQPEItoFaLVpUBOzX1Fs8XIApiLtvYM0U5ZDK8wENUWgWM7KWrybOoDaGjaDUgyE8oFWt/DBl+AMq4r0/SuxcegLzP0lpAidi0AK1BcQVQk95NyAzxHyIQWhrm1aoAyjNxrpYrfgHOSqxu6+mcqAKXcBKtrRvvwCxW1KtgjrcYtHGDtkzxVxz/kF/kB1t7ftPP8A+iB6ZVf5GZVoG8bPpXHoxI3KC4WY0AFRqAbRX7Bcw0oAyi/RsVncAZ2Zt6nyCsU7ISgqp5a1/jFAXTF8tZAGKxk6Vxyv0DPFC6T+CoHolSQDGtSpA0wkDXCL/qQNMcW0gax+TpIGZebWUSBiNXEoBoaSBVz2kB0LikDOccsfnSQP1sf45qckkD//2Q=="
								// src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg"
								className="rounded-l-xl"
							/>
						</div>
					</div>
					<div className="col-span-3 row-span-2 ">
						<div className="grid grid-cols-5 grid-rows-6 grid-flow-row w-full h-full ">
							<div className="flex items-center justify-start col-span-4 row-span-3 bg-red-400">
								<p className="flex text-4xl sm:text-3xl md:text-5xl">title</p>
							</div>
							<div className="flex items-center justify-center col-span-1 row-span-3 bg-pink-600 rounded-tr-xl">
								<p className="flex text-lg sm:text-sm md:text-xl">score</p>
							</div>
							<div className="flex items-center justify-center col-span-5 row-span-2 overflow-hidden bg-blue-600">
								<p className="flex truncate text-lg sm:text-base md:text-xl">Ep.100 in 3 Days / season year total ep</p>
							</div>
							<div className="flex items-center justify-center col-span-2 row-span-1 bg-yellow-600">
								<p className="flex font-bold text-xs sm:text-xs md:text-sm">Airirng</p>
							</div>
							<div className="flex items-center justify-center col-span-1 sm:col-span-3 md:col-span-1 row-span-1 bg-purple-600">
								<p className="flex font-bold text-xs sm:text-xs md:text-sm">TV</p>
							</div>
							<div className="flex sm:hidden md:flex items-center justify-center col-span-2 row-span-1 truncate bg-gray-600">
								<p className="flex font-bold text-xs sm:text-xs md:text-sm">Studio / total ep.</p>
							</div>
						</div>
					</div>
					<div className="bg-slate-500 col-span-3 row-span-2 overflow-hidden hover:overflow-auto ">
						<p className="flex text-sm sm:text-xs md:text-base leading-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
							standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div className="flex items-center justify-start bg-slate-900 col-span-3 row-span-1 rounded-br-xl overflow-hidden">
						<div className="flex flex-row whitespace-nowrap animate-marquee gap-1 ">
							<p className="flex text-xs sm:text-xs md:text-sm bg-orange-500">marequee scrolling</p>
							<p className="flex text-xs sm:text-xs md:text-sm bg-orange-500">marequee scrolling</p>
							<p className="flex text-xs sm:text-xs md:text-sm bg-orange-500">marequee scrolling</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryGrid;
