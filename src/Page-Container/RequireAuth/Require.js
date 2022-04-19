import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import authenication from '../../firebase/firebase.init';
import Loading from '../../components/Loading/Loading';

const Require = ({ children }) => {
    let [user, loading] = useAuthState(authenication);
    let location = useLocation();
    if (loading) {
        <Loading></Loading>
        return
    }


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default Require;