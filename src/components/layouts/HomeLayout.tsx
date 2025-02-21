import { Outlet, NavLink } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <header className="bg-stone-800 h-20 text-white flex items-center">
        <nav className="flex space-x-4 mx-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Classes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Calendar
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Login
          </NavLink>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
