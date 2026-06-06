import { NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link" aria-label="Kasa - Accueil">
        <img src="/LOGO.svg" alt="Kasa" className="header__logo" />
      </NavLink>

      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/" className="header__link" end>
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
