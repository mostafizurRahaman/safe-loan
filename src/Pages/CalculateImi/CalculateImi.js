import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import imiCalculator from "../../Assets/emiCalculator.png";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";

import LoanDetails from "../LaonDetails/LoanDetails";

const CalculateImi = () => {
   const [emiDetails, setEmiDetails] = useState(null);  

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      const loanAmount = data.loanAmount;
      const interestRate = data.interestRate;
      const monthlyInterestRate = interestRate / (12 * 100);
      const month = data.month;
      const additionR = Math.pow(1 + monthlyInterestRate, month);
      const substractR = additionR - 1;
      const emi = (
         loanAmount *
         monthlyInterestRate *
         (additionR / substractR)
      ).toPrecision(5);
      const totalAmount = month * parseFloat(emi);
      const totalInterest = Math.floor(totalAmount - loanAmount);
      console.log(emi);
      console.log(totalAmount);
      console.log(totalInterest);
      const emiObject = {
         loan: parseFloat(loanAmount),
         Interest: parseFloat(interestRate),
         month: parseFloat(month),
         monthlyEmi: parseFloat(emi),
         totalAmount: totalAmount,
         totalInterest: totalInterest,
      };
      setEmiDetails(emiObject);
   };


   return (
      <div className="min-h-screen my_calculator_imi py-10 bg-primary   px-5 md:px-10">
         <section>
            <div className="flex items-center justify-center gap-5 md:flex-row flex-col-reverse ">
               <div className="md:w-1/2 w-full   flex items-center justify-center ">
                  <form
                     className="text-accent capitalize  bg-primary p-5 py-14 rounded-lg flex gap-4 flex-col w-[400px]  myForm"
                     onSubmit={handleSubmit(onSubmit)}
                  >
                     <div className="text-3xl font-bold  uppercase text-center ">
                        <h2>Loan Calculator</h2>
                     </div>
                     <div className="flex flex-col gap-2 ">
                        <label htmlFor="loan-amount">Loan amount: </label>
                        <input
                           type="number"
                           id="loan-amount"
                           placeholder="loan amount: "
                           className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize  placeholder:text-[15px] bg-primary text-secondary  "
                           {...register("loanAmount", {
                              required: "must enter loan amount",
                              pattern: {
                                 value: /^\d*[1-9]\d*$/,
                                 message: "loan amount must be positive",
                              },
                           })}
                        />
                        {errors?.loanAmount && (
                           <ErrorMessage>
                              {errors?.loanAmount?.message}
                           </ErrorMessage>
                        )}
                     </div>
                     <div className="flex gap-2  flex-col ">
                        <label htmlFor="interest">Interest Rate (%):</label>
                        <input
                           type="number"
                           id="interestRate"
                           placeholder="interest rate %"
                           className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:capitalize placeholder:text-[15px] bg-primary text-secondary  "
                           // min="0"
                           // max="100"
                           {...register("interestRate", {
                              required: "must enter an interest",
                              pattern: {
                                 value: /^(?!00?\.00$)\d{1,2}(?:\.\d{1,2})?$/,
                                 message: "interest between 0 to 100",
                              },
                           })}
                        />
                        {errors?.interestRate && (
                           <ErrorMessage>
                              {errors?.interestRate?.message}
                           </ErrorMessage>
                        )}
                     </div>
                     <div className="flex gap-2  flex-col ">
                        <label htmlFor="month">month</label>
                        <input
                           type="number"
                           placeholder="month"
                           id="month"
                           className="text-base font-medium border-accent border lg:w-full placeholder:capitalize  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "
                           {...register("month", {
                              required: "specify the month",
                              pattern: {
                                 value: /^\d*[1-9]\d*$/,
                                 message: "month must be positive",
                              },
                           })}
                        />
                        {errors?.month && (
                           <ErrorMessage>
                              {" "}
                              {errors?.month?.message}
                           </ErrorMessage>
                        )}
                     </div>
                     <div className="flex items-center justify-center ">
                        <button className="rounded-lg  hover:bg-white hover:text-primary duration-1000 transition-all px-5 py-2 bg-secondary ">
                           Calculate
                        </button>
                     </div>
                  </form>
               </div>
               <div className="md:w-1/2 w-full">
                  <div>
                     <img src={imiCalculator} alt="imi calculator" />
                  </div>
               </div>
            </div>
         </section>
        {
         emiDetails  && 
            <LoanDetails emiDetails={emiDetails}></LoanDetails>
        }                        
         
      </div>
   );
};

export default CalculateImi;
