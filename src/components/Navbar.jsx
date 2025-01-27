import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="navbar">
      <img src="/assets/logo.jpg" alt="logo" />
      <div className="menu-burger" onClick={handleClick}>
        <div className={`line ${active ? "active" : ""}`}></div>
        <div className={`line ${active ? "active" : ""}`}></div>
        <div className={`line ${active ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
