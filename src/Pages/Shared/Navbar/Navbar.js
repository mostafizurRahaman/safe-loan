import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png"; 
const Navbar = () => {
   return (
      <nav className="flex items-center justify-between  h-20 px-5 md:px-10 bg-primary  text-accent    uppercase border-b border-accent  ">
         <div>
            <Link to="/" className="flex items-center justify-center  gap-2">
               <img src={logo} alt="customer-loan" className="w-14 h-auto " />
               <h3 className="text-accent hover:text-secondary duration-1000 font-bold uppercase  text-3xl  pt-2 ">Safe Loan</h3>               
            </Link>
         </div>
         <div>
             <ul className="flex items-center gap-5 ">
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/home">Home</Link>
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/calculate-emi">Calculate emi</Link>
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/signin">Sign In</Link>
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/signup">Sign Up</Link>
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/customer-Profile">Customer Profile</Link>
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/dashboard">dashboard</Link>
             </ul>
         </div>
      </nav>
   );
};

export default Navbar;
