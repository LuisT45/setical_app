import Nav from "../containers/Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex flex-col items-center">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
