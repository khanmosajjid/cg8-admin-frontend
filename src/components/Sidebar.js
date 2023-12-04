import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Pools</Link>
      <Link to="/history">History</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Sidebar;
