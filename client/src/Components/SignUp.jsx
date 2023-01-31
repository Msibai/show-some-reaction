import React, { useState } from "react";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={"signup-page-container"}>
      <div className="register-container">
      <div>
        <form className="register-form" onSubmit={handleSubmit}>
          <h1 className={"signup-title"}>Sign up</h1>
          <label className="full-name" htmlFor="name">Full name:</label>
          <input
            className="input-box"
            type="text"
            id="name"
            placeholder="Firstname Lastname"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            className="input-box"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <label htmlFor="password">Password:</label>
          <input
            className="input-box"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="country">Country:</label>
          <input
            className="input-box"
            type="text"
            name="country"
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
