import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import ContactMeButton from "./ContactMeButton";

const NavBar = () => {

	return (
		<Navbar isBordered maxWidth="2xl" className="h-20 bg-zinc-10">
			<NavbarContent className="hidden sm:flex gap-10" justify="center">
				<NavbarItem isActive>
					<Link color="foreground" href="#">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" aria-current="page">
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Projects
					</Link>
				</NavbarItem>
                <NavbarItem>
					<Link color="foreground" href="#">
						Experience
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					{/* <Button as={Link} color="primary" href="#" variant="flat">
						Hire Me!
					</Button> */}
                    <ContactMeButton />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default NavBar;
