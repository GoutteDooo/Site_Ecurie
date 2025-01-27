import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="navbar">
        <img src="/assets/images/logo.jpg" alt="logo" />
        <div className="menu-burger" onClick={handleClick}>
          <div className={`line ${active ? "active" : "inactive"}`}></div>
          <div className={`line ${active ? "active" : "inactive"}`}></div>
          <div className={`line ${active ? "active" : "inactive"}`}></div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
