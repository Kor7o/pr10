import "./Footer.css";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} className="logo_footer" alt="logo" />
      <p className="Home">© 2023 Kasa.<br></br> All rights reserved</p>
    </footer>
  );
}

export default Footer;
