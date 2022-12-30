import { useEffect, useState } from "react";

const useAdmin = (email) => {
   const [isAdmin, setIsAdmin] = useState(false);
   const [isAdminLoading, setIsAdminLoading] = useState(true);

   useEffect(() => {
      if (email) {
         fetch(`https://safe-loan-server.vercel.app/users/admin/${email}`, {
            headers: {
               authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
            },
         })
            .then((res) => res.json())
            .then((data) => {
               setIsAdmin(data.isAdmin);
               setIsAdminLoading(false);
            })
            .catch((err) => console.log(err))
            .finally(() => {
               setIsAdminLoading(false);
            });
      }
   }, [email]);

   return { isAdmin, isAdminLoading };
};

export default useAdmin;
