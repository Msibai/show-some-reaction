import React, { useRef } from "react";

export const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value, countryRef.current.value);
  };

  return (

      <div className={"signup-page-container"}>

        <div className="register-container">

      <div>
        <form className="register-form" onSubmit={onSubmit}>
          <h1>Sign up</h1>
          <label htmlFor="name">Full name:</label>
          <input className="input-box"
            ref={nameRef}

            type="text"
            id="name"
            placeholder="John Doe"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            className="input-box"
            ref={emailRef}
            type="email"
            id="email"
            placeholder="your@email.com"
          />
          <label htmlFor="password">Password:</label>
          <input
            className="input-box"
            ref ={passwordRef}
            type="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="country">Country:</label>
          <input
            className="input-box"
            ref ={countryRef}
            type="text"
            id="country"
            placeholder="Country"
          />
          <button className="register-btn">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
