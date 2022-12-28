import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png"; 
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import {HiOutlineLogout} from 'react-icons/hi'; 
const Navbar = () => {
   const {user, logOut} = useContext(AuthContext); 
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
                  
               {
                   user?.uid 
                   ?
                   <>
                     
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/calculate-emi">Calculate emi</Link>
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/dashboard">dashboard</Link>
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/customer-Profile">
                         <img src={user?.photoURL} alt={`${user?.displayName} profile_picture`} className="w-12 h-12 rounded-full border-2 border-secondary "/>
                     </Link>
                     <HiOutlineLogout className="text-3xl cursor-pointer" onClick={()=> logOut()}></HiOutlineLogout>                    

                   </> 
                   : 

                   <>
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/signin">Sign In</Link>
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/signup">Sign Up</Link>
                   </>
               }
             </ul>
         </div>
      </nav>
   );
};

export default Navbar;
