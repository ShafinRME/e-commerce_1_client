import React, { Children } from 'react';
import { Navigate } from 'react-router';
import useUserRole from '../hooks/useUserRole';
import useAuth from '../hooks/useAuth';
import Loader from '../shared/Loader/Loader';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();

    if (loading || roleLoading) {
        return <Loader></Loader>
    }

    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default AdminRoute;