import React, { useState, useEffect } from "react";
import "./style.css";
import Form from "./components/Form";

function Login() {
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  return (
    <>
      <div className="login-page">
        <div className="text-area">
          <h1 className="text">All memories in one place!</h1>

          <div className="buttons">
            <button
              onClick={() => {
                setLoginForm(true);
                setRegisterForm(false);
              }}
            >
              Log in
            </button>

            <button
              onClick={() => {
                setRegisterForm(true);
                setLoginForm(false);
              }}
            >
              Register
            </button>
          </div>
        </div>
        <div className="image-area">
          <div className="box" key={Math.random()}>
            {/* {!loginForm && !registerForm && <img src={image}></img>} */}
            {loginForm && <Form type="login" />}
            {registerForm && (
              <Form type="register" setLoginForm={setLoginForm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
