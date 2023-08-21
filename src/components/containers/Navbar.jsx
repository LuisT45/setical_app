import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Nav = () => {
	return (
		<Navbar className="pt-3 pb-3 justify-between" shouldHideOnScroll>
			<NavbarBrand className="pl-4 font-bold text-inherit">Setical</NavbarBrand>
			<NavbarContent className="pr-4 flex gap-5" justify="center">
				<NavbarItem isActive>
					<Link aria-current="page" href="#">
						Dashboard
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Setting
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Nav;
