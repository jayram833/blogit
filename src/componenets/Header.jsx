import { NavLink } from "react-router-dom";

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
        <li className="navitem">
          <NavLink to="/singlepost">Single Post</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
