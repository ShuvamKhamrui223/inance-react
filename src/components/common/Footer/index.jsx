import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <p className="">
          &copy; <span id="displayDateYear"></span> made by
          <Link className="" to={""}>
            shuvam khmarui
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
