
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInGoogle,logout} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleGoogle=()=>{
        signInGoogle()
        .then(result => {
   
           history.push(location.state?.from ||"/home"); 
          })
    }
    return (
        <div>
            <button onClick={handleGoogle}>Google</button>
            <button onClick={logout}>LogOut</button>
        </div>
    );
};

export default Login;