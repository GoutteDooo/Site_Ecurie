import React from "react";
import { Outlet, Link } from "react-router-dom";
import BurgerSlider from "../pages/BurgerSlider";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="navbar--logo"></div>
        </Link>
        <div className="menu-burger" onClick={handleClick}>
          <div className={`line ${active ? "active" : "inactive"}`}></div>
          <div className={`line ${active ? "active" : "inactive"}`}></div>
          <div className={`line ${active ? "active" : "inactive"}`}></div>
        </div>
      </div>
      <BurgerSlider active={active} setActive={setActive} />
      <Outlet />
    </>
  );
};

export default Navbar;
