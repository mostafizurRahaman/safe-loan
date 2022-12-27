import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div className=' flex items-center justify-center capitalize   bg-primary  py-7 border-t border-accent '>
         <p className=' text-accent hover:text-secondary '>&copy;all right reserved by <Link to="/Safe Loan"> Safe Loan </Link></p>
      </div>
   );
};

export default Footer;