import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="nav-container">
      <ul className="navlist">
        <li className="navitem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/createpost">Create a Post</NavLink>
        </li>
        {/* <li className="navitem">
          <NavLink to="/singlepost">Single Post</NavLink>
        </li> */}
        <li className="navitem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
