import "./Header.css";
import logo from "../assets/logo.jpeg";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <nav className="nav">
        <p className="Home">
          <a href="./">Accueil</a>
        </p>
        <p className="About">
          <a href="/About">A Propos</a>
        </p>
      </nav>
    </header>
  );
}

export default Header;
