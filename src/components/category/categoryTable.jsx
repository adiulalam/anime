import { Table } from "../organisms/Table";

const CategoryTable = ({
	data,
	accessorKey = false,
	accessorValue = "",
	childAccessorKey = false,
	childAccessorValue = "",
}) => {
	return (
		<div className="flex flex-col flex-wrap items-center justify-evenly h-auto w-full gap-4 py-4">
			{accessorKey
				? (accessorValue ? data[accessorValue] : data)?.map((element, index) => (
						<Table key={index} element={element[childAccessorValue]} />
				  ))
				: data?.filter?.media?.map((element, index) => (
						<Table key={index} element={element} />
				  ))}
		</div>
	);
};

export default CategoryTable;
