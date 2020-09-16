import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        //firebase
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                history.push('/')
            })
            .catch(error => alert(error.message))
    };
    const register = (e) => {
        e.preventDefault();
        //firebase
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //success creating user
                if (auth) {
                    history.push('/')
                }

            })
            .catch((error) => alert(error.message));

    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                    />

                    <h5>Password</h5>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        value={password}
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton"
                    >
                        Sign In
          </button>
                </form>
                <p>
                    By sigining-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
        </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
        </button>
            </div>
        </div>
    );
}

export default Login;
