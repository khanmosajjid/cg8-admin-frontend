import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const closeSidebar = () => {
    toggleSidebar(false);
  };


  return (
    <>
      {/* Sidebar for large screens */}
      <div
        className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-64 md:bg-gray-800 md:text-white md:overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700">
            <h1 className="text-lg font-bold">CGate Admin Panel</h1>
          </div>
          <nav className="flex-grow mt-4 text-lg">
            <Link
              to="/"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/" ? "bg-gray-700" : ""
                }`}
            >
              Pools
            </Link>
            <Link
              to="/history"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/history" ? "bg-gray-700" : ""
                }`}
            >
              History
            </Link>
            <Link
              to="/users"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/users" ? "bg-gray-700" : ""
                }`}
            >
              Users
            </Link>
            <Link
              to="/topholders"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topholders" ? "bg-gray-700" : ""
                }`}
            >
              Top Holders
            </Link>
            <Link
              to="/topbuyers"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topbuyers" ? "bg-gray-700" : ""
                }`}
            >
              Top Buyers
            </Link>
            <Link
              to="/topreferer"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topreferer" ? "bg-gray-700" : ""
                }`}
            >
              Top CG8 Referrar
            </Link>
            <Link
              to="/topstaker"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topstaker" ? "bg-gray-700" : ""
                }`}
            >
              Top CG8 Staker
            </Link>
            <Link
              to="/topclaimedwallet"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topclaimedwallet" ? "bg-gray-700" : ""
                }`}
            >
              Top Reward Claimed
            </Link>

            <Link
              to="/blacklistAccounts"
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/blacklistAccounts" ? "bg-gray-700" : ""
                }`}
            >
              Blacklisted Accounts
            </Link>
          </nav>
        </div>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 bg-gray-800 text-white overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700">
            <h1 className="text-lg font-bold">CGate Admin Panel</h1>
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-grow mt-4 text-lg">
            <Link
              to="/"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-700 ${location.pathname === "/" ? "bg-gray-700" : ""
                }`}
            >
              Pools
            </Link>
            <Link
              to="/history"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-700 ${location.pathname === "/history" ? "bg-gray-700" : ""
                }`}
            >
              History
            </Link>
            <Link
              to="/users"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-700 ${location.pathname === "/users" ? "bg-gray-700" : ""
                }`}
            >
              Users
            </Link>
            <Link
              to="/topholders"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topholders" ? "bg-gray-700" : ""
                }`}
            >
              Top Holders
            </Link>
            <Link
              to="/topbuyers"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topbuyers" ? "bg-gray-700" : ""
                }`}
            >
              Top Buyers
            </Link>
            <Link
              to="/topreferer"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topreferer" ? "bg-gray-700" : ""
                }`}
            >
              Top CG8 Referrar
            </Link>
            <Link
              to="/topstaker"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topstaker" ? "bg-gray-700" : ""
                }`}
            >
              Top CG8 Staker
            </Link>
            <Link
              to="/topclaimedwallet"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/topclaimedwallet" ? "bg-gray-700" : ""
                }`}
            >
              Top Reward Claimed
            </Link>

            <Link
              to="/blacklistAccounts"
              onClick={toggleSidebar}
              className={`block px-4 py-4 hover:bg-gray-900 ${location.pathname === "/blacklistAccounts" ? "bg-gray-700" : ""
                }`}
            >
              Blacklisted Accounts
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;