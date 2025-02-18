import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import BurgerSlider from "../pages/BurgerSlider";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [top, setTop] = useState(0);
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollpos = window.scrollY;
      if (scrollpos > prevScrollpos && window.scrollY > 70) {
        setTop(-70);
      } else {
        setTop(0);
      }
      setPrevScrollpos(scrollpos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <>
      <div className="navbar" style={{ top: `${top}px` }}>
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
      <NavbarDesktop />
      <Outlet />
    </>
  );
};

export default Navbar;
