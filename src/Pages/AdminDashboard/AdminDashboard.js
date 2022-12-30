import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useContext } from "react";
import { FaEdit, FaLongArrowAltDown } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AdminDashboard = () => {
   const { user, logOut } = useContext(AuthContext);

   const {
      data: loans = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["loans", user?.email],
      queryFn: async () => {
         const res = await fetch(`http://localhost:5000/admin/loans`, {
            headers: {
               authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
            },
         });
         if (res.status === 403 || res.status === 401) {
            return logOut();
         }
         const data = res.json();
         return data;
      },
   });

   const {
      data: users = [],
      isLoading: loading,
      refetch: refetch1,
   } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch(`http://localhost:5000/users`, {
            headers: {
               authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
            },
         });
         if (res.status === 403 && res.status === 401) {
            return logOut();
         }
         const data = res.json();
         return data;
      },
   });


   // for approve  loan: 
   const handleApprove  =(id) => {
      
   }

   console.log(users);
   return (
      <div className="flex justify-start w-full">
         <aside className="min-w-[300px] min-h-screen bg-primary px-5 py-5">
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
                     <p className="">{user?.email}</p>
                     <p>Role : Administrator</p>
                  </div>
               </div>
            </div>
         </aside>
         <div className="md:px-10 py-5 w-full  ">
            <div className="flex items-center justify-center ">
               <h2 className="text-center text-3xl border-b-2 border-b-primary  inline-block  font-bold uppercase text-primary  ">
                  All loans{" "}
               </h2>
            </div>
            <div className="w-full overflow-x-auto">
            <div className="overflow-auto">
               <table className="table table-compact table-zebra w-full mt-10">
                  <thead>
                     <tr className="text-center  ">
                        <th>profile</th>
                        <th>Date</th>
                        <th>email</th>
                        <th>loan</th>
                        <th>interest rate</th>
                        <th>monthly payment</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {loans.map((loan, idx) => (
                        <tr className="text-center text-xs" key={loan._id}>
                           <td className="flex items-center justify-center">
                              <img
                                 className="w-10 h-10 rounded-full"
                                 src={loan.photo}
                                 alt="user_profile"
                              />
                           </td>
                           <td>{loan.date}</td>
                           <td>{loan.email}</td>
                           <td>{loan.loan}</td>
                           <td>{loan.Interest}%</td>
                           <td>{loan.monthlyEmi}</td>
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
                           <td>
                              {loan?.status === "approved" || (
                                 <button className=" bg-primary text-accent font-bold uppercase px-3 py-2 rounded-md hover:scale-75">
                                    approve
                                 </button>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            </div>
            <div className="flex items-center justify-center ">
               <h2 className="text-center text-3xl border-b-2 border-b-primary  inline-block  font-bold uppercase text-primary  mt-10 ">
                  All Users{" "}
               </h2>
            </div>
            
            <div className="overflow-auto">
                  <table className="table table-compact table-zebra w-full mt-10">
                     <thead>
                        <tr className="text-center  ">
                           <th>s.i</th>
                           <th>profile</th>
                           <th>name</th>
                           <th>email</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {loans.map((loan, idx) => (
                           <tr className="text-center text-xs" key={loan._id}>
                              <td>{idx + 1}</td>
                              <td className="flex items-center justify-center">
                                 <img
                                    className="w-10 h-10 rounded-full"
                                    src={loan.photo}
                                    alt="user_profile"
                                 />
                              </td>
                              <td>{loan.name}</td>
                              <td>{loan.email}</td>

                              <td>
                                 <button className=" bg-secondary text-accent font-bold uppercase px-3 py-2 rounded-md hover:scale-75">
                                    Delete
                                 </button>
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

export default AdminDashboard;
