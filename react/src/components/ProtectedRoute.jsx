import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProviders";

const ProtectedRoute = ({ isPublic = false }) => {
    const { isAuthenticated } = useAuth();

    if (isPublic && isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (!isPublic && !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
