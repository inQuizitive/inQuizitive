import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const userID = sessionStorage.getItem("userID")
        const username = sessionStorage.getItem("username")
        axios.delete(`users/id/${userID}`, {
            data: {
                email,
                password,
                passwordCheck
            }
        }).then((res) => {
            console.log(res.data);
            if (res.data.status === "Account deleted") {
                alert('Account Deleted');
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("loggedIn");
                sessionStorage.removeItem("userID");
                history.push("/");
            } else {
                alert(`${username}, your account has now been deleted.`)
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("loggedIn");
                sessionStorage.removeItem("userID");
                setPassword("");
                setPasswordCheck("");
                history.push("/signup");
            }
        }).catch((err) => {
            alert('Account not deleted?!');
        })
    }

    return (
        <div>
            <form className="delete-account-form" onSubmit={onSubmit}>
                <label htmlFor="email" name="email" id="email" value={email}>{email}</label>
                <div className="pword-container">
                    <label className="delete-acc-label" htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} id="password" className="password-input" onChange={onChange} />
                </div>
                <div className="verify-pword-container">
                    <label className="delete-acc-label" htmlFor="passwordCheck">Verify Password: </label>
                    <input type="password" name="passwordCheck" value={passwordCheck} className="verify-password-input" id="passwordCheck" onChange={onChange} />
                </div>
                <input className="delete-acc-btn" type="submit" value="Submit" name="submit" />
            </form>
        </div>
    )
}

export default DeleteAccount;
