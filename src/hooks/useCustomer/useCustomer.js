import { useEffect, useState } from "react";

const useCustomer = (email) => {
   const [isCustomer, setIsCustomer] = useState(false);
   const [isCustomerLoading, setIsCustomerLoading] = useState(true);
   useEffect(() => {
      if (email) {
         fetch(`https://safe-loan-server.vercel.app/users/customer/${email}`, {
            headers: {
               authorization: `bearer ${localStorage.getItem("safeLoanToken")}`,
            },
         })
            .then((res) => res.json())
            .then((data) => {
               setIsCustomer(data.isCustomer);
               console.log(data.isCustomer);
               setIsCustomerLoading(false);
            })
            .catch((err) => console.log(err))
            .finally(() => {
               setIsCustomerLoading(false);
            });
      }
   }, [email]);

   return { isCustomer, isCustomerLoading };
};

export default useCustomer;
