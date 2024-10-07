import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../../../constants/navbar";
const Navbar = () => {
    const currentLocation=useLocation()
  return (
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        {navMenu?.map((menuItem, index) => (
          <li className="nav-item" key={index}>
            <Link className="nav-link" to={menuItem?.path}>
              {menuItem?.menuLabel} <span className="sr-only">(current)</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
