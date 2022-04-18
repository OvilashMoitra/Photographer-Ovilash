import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import authenication from '../../firebase/firebase.init';

const Require = ({ children }) => {
    let [user] = useAuthState(authenication);
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default Require;