import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { links } from "../../Data";
import { animateScroll } from "react-scroll";
import { Link } from "react-scroll";
import { FaStream } from "react-icons/fa";
const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);
  return (
    <header
      className={`${scrollHeader ? "scroll-header" : ""}
    header`}
    >
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav--logo">
          <img src={logo} alt="" className="nav--logo-img" />
        </Link>
        <div className={`${showMenu ? "show-menu" : ""}
    nav--menu`}>
          <ul className="nav--list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav--item" key={index}>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-60}
                    hashSpy={true}
                    duration={500}
                    to={path}
                    className="nav--link"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav--toggle" onClick={() => setShowMenu(!showMenu)}>
          <FaStream />
        </div>
      </nav>
    </header>
  );
};

export default Header;
