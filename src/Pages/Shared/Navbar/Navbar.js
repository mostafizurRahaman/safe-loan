import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png"; 
const Navbar = () => {
   return (
      <nav className="flex items-center justify-between  h-20 px-5 md:px-10 bg-gray-700 text-white  uppercase ">
         <div>
            <Link to="/" className="flex items-center justify-center  gap-2">
               <img src={logo} alt="customer-loan" className="w-14 h-auto " />
               <h3 className="text-white font-bold uppercase  text-3xl  pt-2">Safe Loan</h3>               
            </Link>
         </div>
         <div>
             <ul className="flex items-center gap-5 ">
                  <Link  to="/home">Home</Link>
                  <Link to="/calculate-emi">Calculate emi</Link>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/customer-Profile">Customer Profile</Link>
                  <Link to="/dashboard">dashboard</Link>
             </ul>
         </div>
      </nav>
   );
};

export default Navbar;
