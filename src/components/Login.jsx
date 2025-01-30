import React, { useState } from "react";
import "./styles/Login.module.css";

const Login = () => {
  
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const validate = () => {
    const newErrors = {};
    
    
    if (!teamName) {
      newErrors.teamName = "Nama tim tidak boleh kosong.";
    }

    
    if (!password) {
      newErrors.password = "Password tidak boleh kosong.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log("Team Name:", teamName);
      console.log("Password:", password);
      
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <label className="input-label">Team Name</label>
          <input
            type="text"
            placeholder="Team Name"
            className="input-field"
            value={teamName}
            onChange={handleTeamNameChange}
          />
          {errors.teamName && <p className="error-message">{errors.teamName}</p>} 

          <label className="input-label">Password</label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              👁
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>} 
          <div className="button-container">
            <button type="button" className="register-button">
              Register
            </button>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
