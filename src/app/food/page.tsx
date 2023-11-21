import Link from "next/link";

type cakesSearchQuery = {
	sortBy: string;
};

type cakesType = {
	name: string;
	id: number;
};

let cakes: cakesType[] = [
	{
		name: "Madeline",
		id: 0,
	},
	{
		name: "Cupcake",
		id: 1,
	},
	{
		name: "Victoria Sponge",
		id: 2,
	},
];

function compareCakes(a: cakesType, b: cakesType) {
	if (a.name < b.name) {
		return -1;
	} else if (a.name > b.name) {
		return 1;
	} else {
		return 0;
	}
}

export default function Page({
	searchParams,
}: {
	searchParams: cakesSearchQuery;
}) {
	let sortedCakes = [...cakes];

	if (searchParams.sortBy == "asc") {
		sortedCakes.sort(compareCakes);
	} else if (searchParams.sortBy == "desc") {
		sortedCakes.sort(compareCakes).reverse();
	}

	return (
		<div>
			<h1>Food is nice</h1>
			{/* <p>You have selected {searchParams.sortBy}</p> */}
			<br />
			<Link href="/food">Reset</Link>
			<br />
			<Link href="/food?sortBy=asc">Sort by ascending</Link>
			<br />
			<Link href="/food?sortBy=desc">Sort by descending</Link>
			<br />

			{sortedCakes.map((cake) => {
				return (
					<div key={cake.id}>
						<br />
						<Link href={`/food/${cake.name.toLowerCase()}`}>{cake.name}</Link>
					</div>
				);
			})}
		</div>
	);
}
