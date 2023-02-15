import {
	BsFillGrid3X3GapFill as CoverFilled,
	BsGrid3X3Gap as Cover,
	BsGridFill as GridFilled,
	BsGrid as Grid,
} from "react-icons/bs";
import { TfiViewListAlt as TableFilled } from "react-icons/tfi";
import { FaThList as Table, FaHome as Home } from "react-icons/fa";
import Switcher from "../switcher";
import Link from "next/link";

const CategoryIcons = ({ categoryView, setCategoryView }) => {
	const onClickSetView = (name) => {
		window.localStorage.setItem("categoryView", name);
		setCategoryView(name);
	};

	return (
		<div className="flex flex-row flex-wrap items-center justify-center gap-4">
			<Link href={"/"}>
				<Home />
			</Link>
			<div className="flex flex-row gap-2">
				<button onClick={(e) => onClickSetView("cover")}>
					{categoryView === "cover" ? <CoverFilled /> : <Cover />}
				</button>

				<button onClick={(e) => onClickSetView("grid")}>
					{categoryView === "grid" ? <GridFilled /> : <Grid />}
				</button>

				<button onClick={(e) => onClickSetView("table")}>
					{categoryView === "table" ? <Table /> : <TableFilled />}
				</button>
			</div>

			<Switcher />
		</div>
	);
};

export default CategoryIcons;
