import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <header className="header">
      <h1>Your App Name</h1>
      <div className="connect-button-container">
        <ConnectButton />
      </div>
    </header>
  );
}

export default Header;
