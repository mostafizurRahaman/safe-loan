import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";

const UserProfile = () => {
   const { user, logOut } = useContext(AuthContext); 

   const {data:loans=[], isLoading, refetch} = useQuery({
      queryKey:["loans", user?.email], 
      queryFn: async() => {
         const res = await fetch(`http://localhost:5000/loans?email=${user?.email}`, {
            headers: {
               authorization: `bearer ${localStorage.getItem('safeLoanToken')}`
            }
         })
         if(res.status === 403 || res.status === 402){
            return logOut(); 
         }
         const data = await res.json(); 
         return data; 
      }
   })
   console.log(loans); 
   return (
      <div className="flex justify-start">
         <aside className="w-[350px] min-h-screen bg-primary px-5 py-5">
            <div>
               <div>
                  <div className="flex items-center justify-center relative" >
                     <img className="w-48 h-48 rounded-full " src={user?.photoURL} alt={user?.displayName} />
                     <FaEdit className="cursor-pointer  font-bold text-3xl text-secondary absolute top-0 right-0"></FaEdit>
                  </div>
               </div>
               <div className="my-5 border-2 border-accent ">
                  <h2 className="border-2 border-accent py-1 text-2xl  uppercase font-bold text-accent text-center rounded-sm ">information</h2>
                  <div className="px-2 py-3 font-bold text-accent text-base">
                     <h3 className="uppercase ">{user?.displayName}</h3>
                     <p className="">{user?.email}</p>
                  </div>
               </div>
            </div>
         </aside>
         <div className="md:px-10 py-5 w-full ">
              <div className="flex items-center justify-center ">
                  <h2 className="text-center text-3xl border-b-2 border-b-primary  inline-block  font-bold uppercase text-primary  ">My loan's Status</h2>
              </div>
              <div className="overflow-x-auto">
            <table className="table table-zebra w-full mt-10">
               
               <thead>
                  <tr>
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
                  {
                     loans.map((loan, idx) => <tr key={loan._id}>
                        <td>{idx + 1}</td>
                        <td>{loan.date}</td>
                        <td>{loan.loan}</td>
                        <td>{loan.Interest}%</td>
                        <td>{loan.monthlyEmi}</td>
                        <td>{loan.totalAmount}</td>
                        <td>{loan.totalInterest}</td>
                        <td>{loan?.status=== "approved" ?
                         <span className="text-secondary font-bold capitalize">approved</span> : 
                         <span className="text-secondary font-bold capitalize text-green-600">pending</span>
                           
                           }</td>
                      </tr>)
                  }
               
               </tbody>
            </table>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;
