import "../App.css";
import { NavLink } from "react-router-dom";

export default function (props) {
  return (
    <nav>
      <ul className={props.toggle ? "menu-items show" : "menu-items"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => props.setToggle(!props.toggle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => props.setToggle(!props.toggle)}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="signup"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => props.setToggle(!props.toggle)}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


