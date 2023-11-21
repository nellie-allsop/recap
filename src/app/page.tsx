import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Link href="./">Home</Link>
			<Link href="./food">Food</Link>
			<h1>This is my recap page</h1>
		</div>
	);
}
