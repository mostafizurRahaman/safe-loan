import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user, loading, logOut} = useContext(AuthContext);
   const location = useLocation(); 
   if(loading){
      return <Loading></Loading>
   }

   if(user){
      return children; 
   }else{
      logOut(); 
      return <Navigate to="/signin" state={{from:location}} replace></Navigate>
   }
};

export default PrivateRoute;