import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [adminStatus, setAdminStatus] = useState(localStorage.getItem("admin_status") || null);

    const login = (newToken, newAdminStatus) => {
        localStorage.setItem("token", newToken);
        localStorage.setItem("admin_status", newAdminStatus.toString());
        setToken(newToken);
        setAdminStatus(newAdminStatus.toString());
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin_status");
        setToken(null);
        setAdminStatus(null);
    };

    return (
        <AuthContext.Provider value={{ token, adminStatus, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);