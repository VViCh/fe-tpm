import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const PublicRoute = ({ children }) => {
    const { token } = useAuth();

    if (token) {
        return <Navigate to="/dashboard/profile" replace />;
    }

    return children;
};

export default PublicRoute;