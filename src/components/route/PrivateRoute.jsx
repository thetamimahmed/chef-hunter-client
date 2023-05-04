import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="spinner-border text-danger" role="status" style={{margin:'200px 50%'}}>
                    <span class="visually-hidden text-center">Loading...</span>
                </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;