import Nav from "../containers/Navbar";

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout;
