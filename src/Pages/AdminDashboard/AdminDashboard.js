import { useQuery } from "@tanstack/react-query";

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import {
   IoMdArrowDropleftCircle,
   IoMdArrowDroprightCircle,
} from "react-icons/io";

import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle/useTitle";

const AdminDashboard = () => {
   const { user, logOut, loading: userLoading } = useContext(AuthContext);
   const [showside, setShowSide] = useState(false);

   const {
      data: loans = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["loans", user?.email],
      queryFn: async () => {
         const res = await fetch(
            `https://safe-loan-server.vercel.app/admin/loans`,
            {
               headers: {
                  authorization: `bearer ${localStorage.getItem(
                     "safeLoanToken"
                  )}`,
               },
            }
         );
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
         const res = await fetch(`https://safe-loan-server.vercel.app/users`, {
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
   const handleApprove = (id) => {
      fetch(`https://safe-loan-server.vercel.app/loans/${id}`, {
         method: "put",
         headers: {
            authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
         },
      })
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               return logOut();
            }
            return res.json();
         })
         .then((data) => {
            if (data.modifiedCount) {
               toast.success("Loan is approved");
               refetch();
            }
         })
         .catch((err) => console.log(err));
   };

   // for delete user :
   const handleDelete = (u) => {
      console.log(u);
      fetch(`https://safe-loan-server.vercel.app/users/${u._id}`, {
         method: "delete",
         headers: {
            authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
         },
      })
         .then((res) => {
            if (res.status === 403 || res.status === 401) {
               return logOut();
            }
            return res.json();
         })
         .then((data) => {
            if (data.deletedCount) {
               toast.success(`${u.name} is deleted`);
               refetch1();
            }
         })
         .catch((err) => console.log(err));
   };
   const handleRole = (u) => {
      fetch(`https://safe-loan-server.vercel.app/users/${u.email}`, {
         method: "put",
         headers: {
            authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
         },
      })
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               return logOut();
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
               toast.success(`Now ${u.name} is an admin`);
               refetch1();
            }
         })
         .catch((err) => console.log(err));
   };
   useTitle('Admin Dashboard'); 

   if (loading || isLoading || userLoading) {
      return <Loading></Loading>;
   }
   return (
      <div className="flex justify-start w-full">
         <aside
            className={`z-40 w-[320px] min-h-screen bg-primary px-5 py-5 fixed top-20  duration-1000 transition-all ${
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
                     <p
                        className={`${
                           user?.email.length >= 25
                              ? "text-[12px]"
                              : "text-base"
                        }`}
                     >
                        {user?.email}
                     </p>
                     <p>Role : Administrator</p>
                  </div>
               </div>
            </div>
         </aside>
         <div className="md:px-10 py-5 w-full  ">
            <div
               className="animate-bounce text-4xl font-bold  top-24 right-5 text-secondary p-2 bg-primary rounded-lg fixed  z-20"
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
                                    <button
                                       className=" bg-primary text-accent font-bold uppercase px-3 py-2 rounded-md hover:scale-75"
                                       onClick={() => handleApprove(loan._id)}
                                    >
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
                        <th>role</th>
                        <th>make admin</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((u, idx) => (
                        <tr className="text-center text-xs" key={u._id}>
                           <td>{idx + 1}</td>
                           <td className="flex items-center justify-center">
                              <img
                                 className="w-10 h-10 rounded-full"
                                 src={u.photoURL}
                                 alt="user_profile"
                              />
                           </td>
                           <td>{u.name}</td>
                           <td>{u.email}</td>

                           <td>
                              {u.role === "admin" ? (
                                 <span className="text-green-600 capitalize">
                                    admin
                                 </span>
                              ) : (
                                 <span className="capitalize text-green-500 ">
                                    customer
                                 </span>
                              )}{" "}
                           </td>
                           <td>
                              {u.role === "customer" && (
                                 <button
                                    className=" bg-secondary text-accent font-bold uppercase px-3 py-2 rounded-md hover:scale-75"
                                    onClick={() => handleRole(u)}
                                 >
                                    make admin
                                 </button>
                              )}
                           </td>
                           <td>
                              {u.role === "admin" || (
                                 <button
                                    className=" bg-secondary text-accent font-bold uppercase px-3 py-2 rounded-md hover:scale-75"
                                    onClick={() => handleDelete(u)}
                                 >
                                    Delete
                                 </button>
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

export default AdminDashboard;
