import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png"; 
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import {HiOutlineLogout} from 'react-icons/hi'; 
import {RxCrossCircled} from 'react-icons/rx'; 
import {CgMenuRound} from 'react-icons/cg'; 
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import useCustomer from "../../../hooks/useCustomer/useCustomer";
const Navbar = () => {
   const {user, logOut} = useContext(AuthContext); 
   const {isAdmin } = useAdmin(user?.email); 
   const {isCustomer} = useCustomer(user?.email); 
   const [show, setShow ] = useState(false); 

  
   return (
      <nav className="flex items-center justify-between  h-20 px-5 md:px-10 bg-primary  text-accent sticky top-0 left-0   uppercase border-b border-accent z-50  ">
         <div>
            <Link to="/" className="flex items-center justify-center  gap-2">
               <img src={logo} alt="customer-loan" className="w-14 h-auto " />
               <h3 className="text-accent hover:text-secondary duration-1000 font-bold uppercase  text-3xl  pt-2 ">Safe Loan</h3>               
            </Link>
         </div>
         <div className={`fixed top-20  md:static  bg-primary  md:h-auto h-screen  md:w-auto bg-opacity-90 w-3/5 z-50 md:py-0 py-5 ${show ? "left-0" : "left-[-999px]"}    `}>
             <ul className="flex items-center gap-5 md:flex-row flex-col  ">
                  <Link className=" duration-1000 transition-all hover:text-secondary " to="/home">Home</Link>
                  {
                       (user?.uid &&  isAdmin) && <Link className=" duration-1000 transition-all hover:text-secondary " to="admin-dashboard">
                           <img src={user?.photoURL} alt={`${user?.displayName} profile_picture`} className="w-12 h-12 rounded-full border-2 border-secondary "/>
                        </Link>
                  }
                  {
                       (user?.uid && isCustomer) && 
                        <>
                            <Link className=" duration-1000 transition-all hover:text-secondary " to="/get-loan">Calculate emi</Link>
                     
                              <Link className=" duration-1000 transition-all hover:text-secondary " to="/customer-profile">
                                 <img src={user?.photoURL} alt={`${user?.displayName} profile_picture`} className="w-12 h-12 rounded-full border-2 border-secondary "/>
                           </Link>
                        </>
                     }
                     {
                        user?.uid ?
                         <HiOutlineLogout className="text-3xl cursor-pointer" onClick={()=> logOut()}></HiOutlineLogout>  
                         : 
                         <>
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/signin">Sign In</Link>
                     <Link className=" duration-1000 transition-all hover:text-secondary " to="/signup">Sign Up</Link>
                   </>
                     }
             </ul>
         </div>
         <div className="text-4xl cursor-pointer md:hidden " onClick={()=>setShow(!show)}>
            {
              show  ? <RxCrossCircled></RxCrossCircled> : <CgMenuRound></CgMenuRound>
            }
         </div>
      </nav>
   );
};

export default Navbar;
