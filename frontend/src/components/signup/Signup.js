import React, { useState } from "react";
import axios from "axios";
import './Signup.css';

function SignUp() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const getResponse = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users/signup", {
        username: username,
        email: email,
        password: password,
        passwordCheck: passwordCheck,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Yay! Your account has been created");
          setUser("");
          setEmail("");
          setPassword("");
          setPasswordCheck("");
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem("email", res.data.email);
        }
      })
      .catch((res) => {
        alert("Whoops! Passwords do not match. Please try again!");
        setPassword("");
        setPasswordCheck("");
      });
  };

  const onChangeHandler = (event) => {
    if (event.target.id === "username") {
      setUser(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    } else if (event.target.id === "passwordCheck") {
      setPasswordCheck(event.target.value);
    }
  };

  return (
    <div className="createAccount">
      <h1 className="createHeader">Create Account</h1>
      <form onSubmit={getResponse} className="signUpForm">
        <label htmlFor="Username" className="username">
          Username:
        </label>
        <input
          id="username"
          type="username"
          name="userName"
          placeholder="Enter a username"
          value={username}
          onChange={onChangeHandler}
        />

        <label htmlFor="email" className="email">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={onChangeHandler}
          value={email}
        />

        <label htmlFor="password" className="password">
          Create Password:
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter a password"
          onChange={onChangeHandler}
          value={password}
        />

        <label htmlFor="passwordCheck" className="passwordCheck">
          Verify Password:
        </label>
        <input
          id="passwordCheck"
          type="password"
          name="passwordCheck"
          placeholder="Verify your password"
          onChange={onChangeHandler} 
          value={passwordCheck}
        />

        <input type="submit" value="Submit" className="submit"></input>
        <a href="/login" className="home-page">
          Already have an account? Log in here!
        </a>
      </form>
    </div>
  );
}

export default SignUp;
