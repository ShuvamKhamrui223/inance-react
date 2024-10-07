import { useLocation } from "react-router-dom";
import Container from "../../../Container";
import Hero from "../../sections/Hero";
import Logo from "../Logo";
import Navbar from "./Navbar";
const Header = () => {
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
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <Logo />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className=""> </span>
                </button>
                <Navbar />
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
