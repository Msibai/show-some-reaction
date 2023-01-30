import { NavLink, useRouteError } from "react-router-dom";
import "../css/ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div id="title">
        <h1>Sorry, an unexpected error has occurred.</h1>
      </div>
      <div className="circles">
        <h1>Oops!</h1>
        <p>
          {error.status}
          <br />
          <small>{error.statusText || error.message}</small>
        </p>

        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
}
