import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useCustomer from '../../hooks/useCustomer/useCustomer';

const CustomerRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext); 
   const {isCustomer , isCustomerLoading} = useCustomer(user?.email); 
   const location = useLocation(); 
   if(loading || isCustomerLoading){
      return <Loading></Loading>
   }

   if(user && isCustomer){
      return children; 
   }

   return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default CustomerRoute;