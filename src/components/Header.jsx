import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "px-4 py-2 bg-col1 rounded-lg text-col1 text-sm"
          : "px-4 py-2 bg-col2 rounded-lg hover:bg-col4 hover:bg-opacity-10 text-col3 text-sm"
      }
    >
      {children}
    </NavLink>
  );
}

function Header() {
  return (
    <>
      <div className="bg-col1">
        <div className="max-w-6xl mx-auto flex justify-end py-2 px-8">
          <div className="flex gap-x-6 justify-center items-center">
            <NavLink
              className="text-col1 text-sm hover:underline hover:decoration-col1"
              to={"/login"}
            >
              Sign in / Guest
            </NavLink>
            <NavLink
              className="text-col1 text-sm hover:underline hover:decoration-col1"
              to={"/register"}
            >
              Create Account
            </NavLink>
          </div>
        </div>
      </div>
      <header className="bg-col2">
        <div className="max-w-6xl mx-auto flex items-center py-2 px-8">
          <div className="max-w-headermini w-full">
            <NavLink
              className="w-btnw bg-col3 hover:bg-col3hov text-col2 h-12 px-4 rounded-lg flex items-center text-center font-semibold text-3xl"
              to={"/"}
            >
              C
            </NavLink>
          </div>
          <nav>
            <ul className="h-ulh flex items-center p-2">
              <li className="h-9 flex items-center">
                <CustomNavLink to="/">Home</CustomNavLink>
              </li>
              <li className="h-9 flex items-center">
                <CustomNavLink to="/about">About</CustomNavLink>
              </li>
              <li className="h-9 flex items-center">
                <CustomNavLink to="/products">Products</CustomNavLink>
              </li>
              <li className="h-9 flex items-center">
                <CustomNavLink to="/cart">Cart</CustomNavLink>
              </li>
            </ul>
          </nav>
          <div className="max-w-headermini w-full flex justify-end items-center">
            <div className="flex items-center gap-x-4">
              <label
                className="flex items-center cursor-pointer"
                htmlFor="darkMode"
              >
                <input hidden type="checkbox" id="darkMode" />
                <svg
                  className="text-col3"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
              </label>
              <NavLink
                to={"/cart"}
                className="w-12 h-12 rounded-full relative hover:bg-col4 hover:bg-opacity-20 flex justify-center items-center"
              >
                <svg
                  className="text-col3"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span className="w-spanw h-4 flex justify-center items-center px-spanpx font-semibold text-col2 text-xs bg-col3 rounded-spanbr absolute right-0 top-1">
                  2
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
