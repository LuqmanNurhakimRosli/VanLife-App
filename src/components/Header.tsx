import { Link, NavLink } from "react-router-dom";
import "./css/Header.css";
import imageURL from '../assets/images/avatar-icon.jpg'
 
function Header(): JSX.Element {
  return (
    <header>
      {/* Logo or Branding */}
      <Link to="/" className="logo-brand">
        #VANLIFE
      </Link>

      {/* Navigation Links */}
      <nav className="nav">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Vans
        </NavLink>
        <Link to="/login" className="login-link"  >
          <img src={imageURL} alt="Avatar" className=""/>
        </Link>

      </nav>
    </header>
  );
}

export default Header;
