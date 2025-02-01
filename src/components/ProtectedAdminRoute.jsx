import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const ProtectedAdminRoute = ({ children }) => {
    const { token, adminStatus } = useAuth();

    if (!token || adminStatus !== "isAdmin") {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default ProtectedAdminRoute;