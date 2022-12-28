import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   if(loading){
      // return <
   }
   return (
      <div>
         
      </div>
   );
};

export default PrivateRoute;