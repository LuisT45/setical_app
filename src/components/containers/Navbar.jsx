import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar>
      <NavbarBrand className="font-bold text-2xl text-inherit">
        Setical
      </NavbarBrand>
      <NavbarContent className="flex gap-5" justify="end">
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
