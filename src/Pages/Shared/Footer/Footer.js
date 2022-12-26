import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div className=' flex items-center justify-center capitalize   bg-gray-700 text-white py-7 '>
         <p>&copy;all right reserved by <Link to="/Safe Loan"> Safe Loan </Link></p>
      </div>
   );
};

export default Footer;