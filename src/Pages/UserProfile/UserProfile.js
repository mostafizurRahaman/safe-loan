import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import {
   IoMdArrowDropleftCircle,
   IoMdArrowDroprightCircle,
} from "react-icons/io";
import useTitle from "../../hooks/useTitle/useTitle";

const UserProfile = () => {
   const { user, logOut } = useContext(AuthContext);
   const { loading } = useContext(AuthContext);
   const [showside, setShowSide] = useState(false);
   useTitle('User Profile')
   const {
      data: loans = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["loans", user?.email],
      queryFn: async () => {
         const res = await fetch(
            `https://safe-loan-server.vercel.app/loans?email=${user?.email}`,
            {
               headers: {
                  authorization: `bearer ${localStorage.getItem(
                     "safeLoanToken"
                  )}`,
               },
            }
         );
         if (res.status === 403 || res.status === 402) {
            return logOut();
         }
         const data = await res.json();
         return data;
      },
   });

   if (loading) {
      return <Loading></Loading>;
   }
   console.log(loans);
   
   return (
      <div className="flex justify-start min-h-screen z-50  ">
         <aside
            className={`z-40 w-[350px] min-h-screen bg-primary px-5 py-5 fixed top-20 lg:sticky duration-1000 transition-all ${
               showside ? "left-0" : "left-[-999px]"
            }`}
         >
            <div>
               <div>
                  <div className="flex items-center justify-center relative">
                     <img
                        className="w-48 h-48 rounded-full "
                        src={user?.photoURL}
                        alt={user?.displayName}
                     />
                     <FaEdit className="cursor-pointer  font-bold text-3xl text-secondary absolute top-0 right-0"></FaEdit>
                  </div>
               </div>
               <div className="my-5 border-2 border-accent ">
                  <h2 className="border-2 border-accent py-1 text-2xl  uppercase font-bold text-accent text-center rounded-sm ">
                     information
                  </h2>
                  <div className="px-2 py-3 font-bold text-accent text-base">
                     <h3 className="uppercase ">{user?.displayName}</h3>
                     <p className="text-[12px]">{user?.email}</p>
                  </div>
               </div>
            </div>
         </aside>

         <div className=" px-5 lg:px-10 py-5 w-full ">
            <div
               className="animate-bounce text-4xl font-bold  top-24 right-5 text-secondary p-2 bg-primary rounded-lg fixed lg:hidden z-20"
               onClick={() => setShowSide(!showside)}
            >
               {showside ? (
                  <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>
               ) : (
                  <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
               )}
            </div>
            <div className="flex items-center justify-center ">
               <h2 className="text-center text-3xl border-b-2 border-b-primary  inline-block  font-bold uppercase text-primary  ">
                  My loan's Status
               </h2>
            </div>
            <div className="overflow-x-auto">
               <table className="text-xs  table table-zebra w-full mt-10">
                  <thead>
                     <tr className="text-xs text-center ">
                        <th>S.I.</th>
                        <th>Date</th>
                        <th>loan</th>
                        <th>interest rate</th>
                        <th>monthly payment</th>
                        <th>total</th>
                        <th>total interest</th>
                        <th>status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {loans.map((loan, idx) => (
                        <tr className="text-center " key={loan._id}>
                           <td>{idx + 1}</td>
                           <td>{loan.date}</td>
                           <td>{loan.loan}</td>
                           <td>{loan.Interest}%</td>
                           <td>{loan.monthlyEmi}</td>
                           <td>{loan.totalAmount}</td>
                           <td>{loan.totalInterest}</td>
                           <td>
                              {loan?.status === "approved" ? (
                                 <span className="px-2 py-1 bg-green-500 rounded-lg text-primary  font-bold capitalize">
                                    approved
                                 </span>
                              ) : (
                                 <span className="px-2 py-1 bg-secondary rounded-lg text-white   font-bold capitalize ">
                                    pending
                                 </span>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;
