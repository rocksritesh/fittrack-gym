import React, { useState, useEffect } from "react";
import logo from "../images/laslogo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="home" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={500}>
            Features
          </Link>
        </li>
        <li>
          <Link to="offer-section" smooth={true} duration={500}>
            Offers
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About{" "}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
