import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./DeleteAccount.css";
import Swal from "sweetalert2";

function DeleteAccount() {
  const history = useHistory();
  const email = sessionStorage.getItem("email");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChange = (event) => {
    if (event.target.id === "password") {
      setPassword(event.target.value);
    } else if (event.target.id === "passwordCheck") {
      setPasswordCheck(event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userID = sessionStorage.getItem("userID");
    const username = sessionStorage.getItem("username");
    axios
      .delete(`http://localhost:5000/users/id/${userID}`, {
        data: {
          email,
          password,
          passwordCheck,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "Account deleted") {
          Swal.fire("Success", "Your account has been deleted.", "success");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("loggedIn");
          sessionStorage.removeItem("userID");
          history.push("/");
        } else {
          Swal.fire(`${username}`, "Your account has been deleted.", "success");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("loggedIn");
          sessionStorage.removeItem("userID");
          setPassword("");
          setPasswordCheck("");
          history.push("/signup");
        }
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          "Unfortunately your account has not been deleted. Please try again.",
          "warning"
        );
      });
  };

  return (
    <div>
      <form className="delete-account-form" onSubmit={onSubmit}>
        <label htmlFor="email" name="email" id="email" value={email}>
          {email}
        </label>
        <div className="pword-container">
          <label className="delete-acc-label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            className="password-input"
            onChange={onChange}
          />
        </div>
        <div className="verify-pword-container">
          <label className="delete-acc-label" htmlFor="passwordCheck">
            Verify Password:{" "}
          </label>
          <input
            type="password"
            name="passwordCheck"
            value={passwordCheck}
            className="verify-password-input"
            id="passwordCheck"
            onChange={onChange}
          />
        </div>
        <input
          className="delete-acc-btn"
          type="submit"
          value="Submit"
          name="submit"
        />
      </form>
    </div>
  );
}

export default DeleteAccount;
