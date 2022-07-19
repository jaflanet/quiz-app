import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
    {
      username: "jon",
      password: "jon",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        alert("account not found");
      } else {
        alert("loginSuccess");
        setIsSubmitted(true);
        navigate('/start');
      }
    } else {
      alert("account not found");
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <div className="input-container">
          <label><h3>Username</h3> </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label><h3>Password</h3> </label>
          <input type="password" name="pass" required />
        </div>
        <div className="login-button-container">
          <button type="submit" className="button-submit"> Submit </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-section">
      <div className="login-form">
        <div className="login-title"><h1>Login</h1></div>
        {isSubmitted ? <></> : renderForm}
      </div>
    </div>
  );
};

export default Login;
