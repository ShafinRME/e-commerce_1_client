import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../shared/Loader/Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        <Navigate to="/login" ></Navigate>
    }

    return children;
};

export default PrivateRoute;