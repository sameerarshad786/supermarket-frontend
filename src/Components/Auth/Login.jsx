import React, { useState } from "react";
import FetchLogin from "../../Utils/Auth/FetchLogin";
import { Navigate } from "react-router";

const Login = ({ handleLoginSuccess }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState()
  const [emailFieldError, setEmailFieldError] = useState()
  const [passwordFieldError, setPasswordFieldError] = useState()

  async function handleSubmit(event) {
    event.preventDefault();
    const response = FetchLogin(email, password)
    const response_ = await response
    const data = await response_.json()

    if (response_.ok) {
      localStorage.setItem("accessToken", data.tokens.access_token);
      localStorage.setItem("refreshToken", data.tokens.refresh);
      setSuccess(true)
      handleLoginSuccess(data.tokens.access_token)
    } else {
      if ("email" in data) {
        setEmailFieldError(data.email)
      } else if ("password" in data) {
        setPasswordFieldError(data.password)
      } else {
        setError(data.detail)
      }
    }
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit} method="GET">
        <fieldset className="user-credentials">
          <a className="login-page-logo" href="/">
              <img src={require("../../Assets/favicon.ico")} alt="web page icon" />
          </a>
            {
              <div className="login-error">
                {error}
              </div>
            }
          <div className="login-fields">
            {
              <div className="login-error">
                {emailFieldError}
              </div>
            }
            <input 
                className="input-fields"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            {
              <div className="login-error">
                {passwordFieldError}
              </div>
            }
            <input
              className="input-fields"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button">Sign In</button>
          </div>
        </fieldset>
      </form>
      {success ? <Navigate to="/"/>: ""}
    </>
  );
};

export default Login;
