import { NavLink, useLocation } from "react-router-dom";
import { navMenu } from "../../../constants/navbar";
const Navbar = ({ navbarState }) => {
  const currentLocation = useLocation();
  return (
    <ul className={`navbar-nav ${navbarState ? "mobile-nav-active" : ""}`}>
      {navMenu?.map((menuItem, index) => (
        <li className="nav-item" key={index}>
          <NavLink className="nav-link" to={menuItem?.path}>
            {menuItem?.menuLabel} <span className="sr-only">(current)</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
