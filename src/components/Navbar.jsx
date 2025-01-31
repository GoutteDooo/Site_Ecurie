import React from "react";
import { Outlet } from "react-router-dom";
import BurgerSlider from "../pages/BurgerSlider";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

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
      <BurgerSlider active={active} />
      <Outlet />
    </>
  );
};

export default Navbar;
