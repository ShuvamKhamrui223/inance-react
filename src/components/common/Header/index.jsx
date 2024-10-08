import { useLocation } from "react-router-dom";
import Container from "../../../Container";
import Hero from "../../sections/Hero";
import Logo from "../Logo";
import Navbar from "./Navbar";
import { useState } from "react";
const Header = () => {
  const [navbarState, setNavbarState] = useState(false);
  const currentLocation = useLocation();
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="contact_nav">
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call : +01 123455678990</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Email : demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar">
                <Logo />
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setNavbarState((prev) => !prev)}
                >
                  <span className=""> </span>
                </button>
                <Navbar navbarState={navbarState} />
              </nav>
            </div>
          </div>
        </header>
        {currentLocation.pathname === "/" && <Hero />}
      </div>
    </>
  );
};

export default Header;
