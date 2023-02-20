import Image from "next/image";
import { useRouter } from "next/router";
import Filter from "@/components/filters/filterBar";
import { Icon } from "@/components/molecules/icon";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

const Anime = () => {
	const router = useRouter();
	const { id } = router.query;

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <p>loading...</p>;
	}

	const bannerURL =
		"https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg";

	return (
		<div className="bg-white dark:bg-black">
			<div className="flex flex-col w-full h-full">
				<AnimeBanner banner={bannerURL} />
				<div className="flex items-center justify-end px-2 py-1">
					<Icon home={true} />
				</div>
				<AnimePoster />
				<AnimeTab />
			</div>
		</div>
	);
};

export default Anime;

const AnimeTab = () => {
	const [categories] = useState({
		Overview: <TabOne />,
		Characters: <h1 className="text-black">Characters</h1>,
		Staff: <h1 className="text-black">Staff</h1>,
		Reviews: <h1 className="text-black">Reviews</h1>,
		Related: <h1 className="text-black">Reviews</h1>,
	});

	return (
		<Tab.Group>
			<Tab.List
				className={`flex flex-row flex-wrap items-center justify-evenly gap-1 rounded-xl 
				bg-blue-500 p-1 my-2`}
			>
				{Object.keys(categories).map((category) => (
					<Tab
						key={category}
						className={({ selected }) =>
							`${
								selected
									? "bg-white shadow"
									: "text-blue-100 hover:bg-slate-600 hover:text-white"
							} rounded-lg p-1 md:p-3 text-sm font-medium leading-5 text-blue-700`
						}
					>
						{category}
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels className="">
				{Object.values(categories).map((posts, idx) => (
					<Tab.Panel key={idx} className={`rounded-xl bg-white p-3 `}>
						<div>{posts}</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};

const TabOne = () => {
	return (
		<div className="flex flex-col w-full h-full">
			<h1 className="text-black">hello</h1>
			<h1 className="text-black">hello</h1>
			<h1 className="text-black">hello</h1>
		</div>
	);
};

const AnimeBanner = ({ banner }) => {
	return (
		<div
			className={`${
				banner ? "h-28 md:h-40" : "h-auto"
			} flex relative justify-center w-full z-10`}
		>
			{banner && (
				<Image
					alt="banner"
					src={banner}
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

const AnimePoster = () => {
	return (
		<div className="flex justify-center w-full h-40 md:h-64">
			<div className="flex relative justify-center w-28 h-full md:w-44 overflow-auto z-1">
				<Image
					alt="banner"
					src={
						"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg"
					}
					fill
					className="object-cover"
					sizes="100%"
					priority={true}
				/>
			</div>
			<div className="flex h-full w-full flex-col gap-2 px-1">
				<div className="flex h-1/5 w-full bg-red-700 mx-1 text-ellipsis overflow-hidden">
					<p>title</p>
				</div>
				<div className="flex h-4/5 w-full bg-red-400 mx-1 text-ellipsis overflow-hidden hover:overflow-auto">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non luctus
						nunc.
					</p>
				</div>
			</div>
		</div>
	);
};
