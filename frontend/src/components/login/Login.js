import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/users/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          sessionStorage.setItem("loggedin", true);
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("username", res.data.username);
          sessionStorage.setItem("userID", res.data.userID);
          console.log("Logged in");
          history.push("/");
        }
      })
      .catch((res) => {
        Swal.fire(
          "Oops!",
          "Your login details are incorrect. Please try again",
          "warning"
        );
      });
  };

  return (
    <div className="logIn">
      <h1 className="logInHeader">Log In</h1>
      <form onSubmit={onSubmit} className="logInForm">
        <div className="email">
          <label htmlFor="email">Email Address:</label>
          <input
            class
            onChange={onChange}
            value={email}
            type="email"
            id="email"
            placeholder="Please enter your e-mail"
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            onChange={onChange}
            value={password}
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

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
