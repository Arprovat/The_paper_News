import React, { useContext } from 'react';
import { Auth_Context } from '../../Authentication/AuthContext/AuthContex';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {User,loader} = useContext(Auth_Context);
    const navigate = useNavigate();
 if(loader) {
return <span className="loading loading-infinity text-center loading-lg"></span>

 }
    if(User){
       return children
    }
    else{
        navigate('/login');
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;