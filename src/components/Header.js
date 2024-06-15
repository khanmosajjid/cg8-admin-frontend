import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header({ setIsSidebarOpen }) {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open)
    setIsSidebarOpen((prevState) => !prevState);
    console.log("clicked")
    console.log(open +" from header")
  };

  return (
    <header className="header bg-gray-800">
      <div className="header-container flex gap-4 ">
        <button className="toggle-btn text-2xl" onClick={toggleSidebar}>
          <span className="hamburger-icon ">&#9776;</span>
        </button>
        <h1 className="hidden md:block">CGate Admin Panel</h1>
      </div>
      <div className="py-2">
        <ConnectButton />
      </div>
    </header>
  );
}

export default Header;