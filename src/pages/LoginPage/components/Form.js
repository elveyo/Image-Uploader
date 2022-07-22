import React, { useEffect, useState } from "react";
import { auth } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Form({ type, setLoginForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setLoginForm(true);
      })
      .catch((e) => console.log(e));
  };
  const loginUser = () => {
    console.log("eee");
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setLoginForm(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="form">
      <div className="data">
        {type === "login" ? <h1>Login here !</h1> : <h1>Register here !</h1>}

        <label>Username</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {type === "login" ? (
          <button onClick={loginUser}>Log in</button>
        ) : (
          <button onClick={registerUser}>Register</button>
        )}
      </div>
    </div>
  );
}

export default Form;
