import Image from "next/image";
import NavBar from "./NavBar";
import { Link, Spacer } from "@nextui-org/react";

export default function Home() {
	return (
		<main className="flex flex-col">
			<NavBar />
			<Spacer y={20} />
			<div className="flex flex-col justify-center">
				<h1 className="text-7xl text-center">Olivia Wissig</h1>
				<Spacer y={10} />
				<div className="flex flex-col justify-center w-1/2 m-auto">
					<h2 className="text-2xl font-semibold">About</h2>
					<Spacer y={5} />
					<h4 className="text-lg">
						I'm Olivia, and I'm a sales engineer at <Link href="https://openweb.com/">OpenWeb</Link> working with some of the top publishers in the world. I was born and raised in the Bay Area, and I am now living in the sunny Los Angeles with my partner, Matthew. I've played sports my entire life, I love attending concerts, and I have two dogs named Romeo and Ella.
					</h4>
				</div>
			</div>
		</main>
	);
}
