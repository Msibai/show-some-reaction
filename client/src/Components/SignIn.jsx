import React, {useContext, useRef} from "react";
import "../css/signinpage.css";
import {Link, Navigate} from "react-router-dom";
import GlobalContext from "../context/GlobalContext.jsx";




export default function() {
  const { submitLogin, auth } = useContext(GlobalContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  if (auth.loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="login-form-container">

      <h2>Glad to see you again!</h2>

        <form
            method="post"
            onSubmit={(event) => {
              event.preventDefault();
              submitLogin(emailRef.current.value, passwordRef.current.value);
            }}
        >

          <h3>Login Here</h3>
          <label className="email-label" htmlFor="email">
            Email
          </label>
          <input ref={emailRef}


            type="email"
            placeholder="your@email.com"
            id="email"
            name="email"
            className="email"
          />
          <label className="pass-label" htmlFor="password">
            Password
          </label>

            <input ref={passwordRef}

                   placeholder="*************"


              id="password"
              name="password"
              className="password"
            />
          <input type={"submit"} name={"submit"} className="login-button" value={"Sign in"} />


          <Link to={"/forgotpassword"} className="forgot-password-text">Forgot your password?</Link><br />

          <Link to={"/signup"} className="text-for-signup">

            Don't have an account? Sign up here
          </Link>
        </form>


      </div>
    </>
  );
}