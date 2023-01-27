import React, { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="register-container">
      <div>
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <label htmlFor="name">Full name:</label>
          <input
            className="input-box"
            value={name}
            id="name"
            placeholder="Firstname Lastname"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            className="input-box"
            value={email}
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <label htmlFor="password">Password:</label>
          <input
            className="input-box"
            value={password}
            name="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="country">Country:</label>
          <input
            className="input-box"
            value={country}
            name="country"
            id="password"
            placeholder="Country"
          />
          <button className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
