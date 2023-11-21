type cakeParam = { params: { cakes: string } };

export default function Page({ params }: cakeParam) {
	return (
		<div>
			<h2>A dynamic route parameter {params.cakes}</h2>
		</div>
	);
}

// export default function Page({ params }) {
// 	return (
// 		<div>
// 			<h2>A dynamic route: {params.cakes} </h2>
// 		</div>
// 	);
// }
