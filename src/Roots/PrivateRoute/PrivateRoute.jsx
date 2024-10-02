import React, { useContext } from 'react';
import { Auth_Context } from '../../Authentication/AuthContext/AuthContex';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { User, loader } = useContext(Auth_Context);
    const location = useLocation();

    if (loader) {
        return <span className="loading loading-infinity text-center loading-lg"></span>

    }
    if (User) {
        return children
    }
    else {
      return  <Navigate to='/login' state={{ from: location }}></Navigate>
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;