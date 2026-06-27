import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/about">About</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 My Website</p>
      </footer>
    </>
  );
};

export default MainLayout;
