import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <p className="">
          made by
          <Link className="creator-profile" to={""}>
            shuvam khmarui
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
