import Link from "next/link";

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

export default function FoodRoute() {
	return (
		<div>
			<h1>Food is nice</h1>
			{cakes.map((cake) => {
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
