import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const LoanDetails = ({emiDetails}) => {
   const {user} = useContext(AuthContext); 

   const handleSubmit = (event) => {
      event.preventDefault(); 
      const loanDetails = {
         ...emiDetails, 
         name: user?.displayName, 
         email: user?.email, 
         photo: user?.photoURL,  
      }
      console.log(loanDetails); 
   }
   return (
      <section className="mt-20 flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="text-accent capitalize  bg-primary p-5 py-14 rounded-lg flex gap-4 flex-col w-[400px]  md:w-full lg:w-[85%] myForm">
         <div className="text-3xl font-bold  uppercase text-center ">
            <h2>Apply for Loan</h2>
         </div>
         <div className="flex gap-3 lg:flex-row flex-col w-full ">
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="name">name</label>
               <input
                  className="text-base  border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold uppercase  "
                  type="text"
                  placeholder="name"
                  id="name"
                  defaultValue={user?.displayName}
                  readOnly
               />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="email">email</label>
               <input
                  className="text-base  border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold"
                  type="email"
                  placeholder="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
               />
            </div>
         </div>
         <div className="flex gap-3 lg:flex-row flex-col ">
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="loanAmount">loan: </label>
               <input
                  className="text-base border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold"
                  type="number"
                  id="loanAmount"
                  defaultValue={emiDetails?.loan}
                  readOnly
               />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="interestRate">interest Rate:</label>
               <input
                  className="text-base border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold "
                  type="number"
                  defaultValue={emiDetails?.Interest}
                  readOnly
               />
            </div>
         </div>
         <div className="flex gap-3 lg:flex-row flex-col ">
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="tenure">Tenure (In months):</label>
               <input
                  className="text-base  border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold "
                  type="number"
                  id="tenure"
                  defaultValue={emiDetails?.month}
                  readOnly
               />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="monthly_payment">Monthly payment: </label>
               <input
                  className="text-base  border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold"
                  type="number"
                  id="monthly_payment"
                  defaultValue={emiDetails?.monthlyEmi}
                  readOnly
               />
            </div>
         </div>
         <div className="flex gap-3 lg:flex-row flex-col ">
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="totalAmount">Total Amount:</label>
               <input
                  className="text-base  border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold"
                  type="number"
                  id="totalAmount"
                  readOnly
                  defaultValue={emiDetails?.totalAmount}
               />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="totalInterest">Total Interest:</label>
               <input
                  className="text-base border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-accent  text-primary font-bold   "
                  type="number"
                  readOnly
                  defaultValue={emiDetails?.totalInterest}
               />
            </div>
         </div>
         <div className="flex items-center justify-center ">
            <button className="rounded-lg  hover:bg-white hover:text-primary duration-1000 transition-all px-5 py-2 bg-secondary ">
               Apply now
            </button>
         </div>
      </form>
      
   </section>
   );
};

export default LoanDetails;