import React from 'react';

const ErrorMessage = ({children}) => {
   return (
      <div>
         <p className="text-secondary font-semibold capitalize  text-xs">{children}</p>
      </div>
   );
};

export default ErrorMessage;