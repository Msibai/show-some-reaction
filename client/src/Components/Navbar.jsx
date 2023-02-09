import "../css/app.css";
import { NavLink } from "react-router-dom";
import GlobalContext from "../context/GlobalContext.jsx";
import {useContext} from "react";


export default function (props) {
  const { auth, logout } = useContext(GlobalContext);

  return (
    <nav>
      {
        auth.loggedIn ?
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

        <li className="logout" onClick={logout}><a href="">Logout</a></li>

      </ul>
            :
            <ul className={props.toggle ? "menu-items show" : "menu-items"}>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}
                         onClick={() => props.setToggle(!props.toggle)}>
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
      }
    </nav>
  );
};


