import React, { useState } from "react";
import restApi from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);

  // Defensive access (THIS MATTERS)
  const navbarLinks = restApi?.data?.[0]?.navbarLinks || [];

  const handleToggle = () => setShow((prev) => !prev);
  const handleCloseMenu = () => setShow(false);

  return (
    <nav className="navbar">
      <div className="logo">RAVES</div>

      <div className={`navLinks ${show ? "showmenu" : ""}`}>
        <div className="links">
          {navbarLinks.map((element) => (
            <Link
              key={element.id}
              to={element.link}
              spy={true}
              smooth ={true}
              duration={500}
              onClick={handleCloseMenu}
            >
              {element.title}
            </Link>
          ))}
        </div>

        <button className="menuBtn">OUR MENU</button>
      </div>

      {/* Use a button, not a div */}
      <button
        className="hamburger"
        onClick={handleToggle}
        aria-label="Toggle navigation menu"
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
