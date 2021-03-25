import React, { useState } from "react";
import axios from "axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const onChange = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/login", { email, password })
      .then((res) => {
        if (res.data.status === "OK") {
          sessionStorage.setItem("loggedin", true);
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("username", res.data.username);
        }
      });
  };

  return (
    <div className="logIn">
      <h1 className="logIn_header">Log In</h1>
      <form onSubmit={onSubmit} className="logInForm">
        <label htmlfor="email">Email Address:</label>
        <input
          onChange={onChange}
          value={email}
          type="email"
          id="email"
          placeholder="Email"
        />

        <label htmlfor="password">Password:</label>
        <input
          onChange={onChange}
          value={password}
          type="password"
          id="password"
          placeholder="Password"
        />

        <input id="submit_logIn" type="submit" value="Log In" />
        <div className="signup">
          <a href="/signup" className="signup_link">
            Not got an account? Create one here!
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;