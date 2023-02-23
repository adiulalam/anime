import { Grid } from "../organisms";

export const CategoryGrid = ({
	data,
	accessorKey = false,
	accessorValue = "",
	childAccessorKey = false,
	childAccessorValue = "",
}) => {
	return (
		<div className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-4 py-4">
			{accessorKey
				? (accessorValue ? data[accessorValue] : data)?.map((element, index) => (
						<Grid key={index} element={element[childAccessorValue]} />
				  ))
				: data?.filter?.media?.map((element, index) => (
						<Grid key={index} element={element} />
				  ))}
		</div>
	);
};
