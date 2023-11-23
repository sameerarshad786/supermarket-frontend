import React from "react";

const Login = () => {
  return (
    <form className="login" action="" method="GET">
      <fieldset className="user-credentials">
        <a className="login-page-logo" href="/">
            <img src={require("../../Assets/favicon.ico")} alt="web page icon" />
        </a>
        <input 
            className="input-fields"
            type="email"
            placeholder="email" 
        />
        <input
          className="input-fields"
          type="password"
          placeholder="password"
        />
      </fieldset>
    </form>
  );
};

export default Login;
