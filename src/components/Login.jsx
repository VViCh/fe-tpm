import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";
import { Icon } from "@iconify/react";
import LoginStyle from "./styles/Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const { login } = useAuth();
    const navigate = useNavigate();

    // const togglePasswordVisibility = () => {
    //     setPasswordVisible(!passwordVisible);
    // };

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email tidak boleh kosong.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email tidak valid.";
        }

        if (!password) {
            newErrors.password = "Password tidak boleh kosong.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/login", {
                    email_leader: email,
                    password_group: password,
                });

                if (response.data.token) {
                    login(response.data.token, response.data.admin_status.toString());
                    navigate("/dashboard/profile");
                } else {
                    setErrors({ submit: "Login failed. Please check your credentials." });
                }
            } catch (error) {
                console.error("Error during login:", error.response?.data || error.message);
                setErrors({ submit: "An error occurred. Please try again." });
            }
        }
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className={LoginStyle.container}>
            <h1 className={LoginStyle.loginTitle}>LOGIN</h1>
            <div className={LoginStyle.loginBox}>
                <form onSubmit={handleSubmit}>
                    <label className={LoginStyle.inputLabel}>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className={LoginStyle.inputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p className={LoginStyle.errorMessage}>{errors.email}</p>
                    )}

                    <label className={LoginStyle.inputLabel}>Password</label>
                    {/* <div className={LoginStyle.passwordWrapper}> */}
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className={LoginStyle.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <button
                            type="button"
                            className={LoginStyle.togglePassword}
                            onClick={togglePasswordVisibility}
                        >
                            <Icon
                                icon={passwordVisible ? "mdi:eye-off" : "mdi:eye"}
                                color="grey"
                                width="24"
                                height="24"
                            />
                        </button>
                    </div> */}
                    {errors.password && (
                        <p className={LoginStyle.errorMessage}>{errors.password}</p>
                    )}

                    {errors.submit && (
                        <p className={LoginStyle.errorMessage}>{errors.submit}</p>
                    )}

                    <div className={LoginStyle.buttonContainer}>
                        <button
                            type="button"
                            className={LoginStyle.registerButton}
                            onClick={handleRegisterClick}
                        >
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