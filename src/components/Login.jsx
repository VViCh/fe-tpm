import React, { useState } from "react";
import LoginStyle from "./styles/Login.module.css";

const Login = () => {
    const [teamName, setTeamName] = useState("");
    const [password, setPassword] = useState("");
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
        <div className={LoginStyle.loginContainer}>
            <h1 className={LoginStyle.loginTitle}>LOGIN</h1>
            <div className={LoginStyle.loginBox}>
                <form onSubmit={handleSubmit}>
                    <label className={LoginStyle.inputLabel}>Team Name</label>
                    <input
                        type="text"
                        placeholder="Team Name"
                        className={LoginStyle.inputField}
                        value={teamName}
                        onChange={handleTeamNameChange}
                    />
                    {errors.teamName && (
                        <p className={LoginStyle.errorMessage}>{errors.teamName}</p>
                    )}

                    <label className={LoginStyle.inputLabel}>Password</label>
                    <div className={LoginStyle.passwordWrapper}>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className={LoginStyle.inputField}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            type="button"
                            className={LoginStyle.togglePassword}
                            onClick={togglePasswordVisibility}
                        >
                            👁
                        </button>
                    </div>
                    {errors.password && (
                        <p className={LoginStyle.errorMessage}>{errors.password}</p>
                    )}
                    <div className={LoginStyle.buttonContainer}>
                        <button type="button" className={LoginStyle.registerButton}>
                            Register
                        </button>
                        <button type="submit" className={LoginStyle.signinButton}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
