import React from 'react';
import imiCalculator from "../../Assets/emiCalculator.png"; 
const CalculateImi = () => {
   return (
      <div className='min-h-screen my_calculator_imi py-10 bg-primary   px-5 md:px-10'>
         <div className='flex items-center justify-center gap-5 md:flex-row flex-col-reverse '>
               <div className='md:w-1/2 w-full   flex items-center justify-center '>
                  <form className='text-accent capitalize  bg-primary p-5 py-14 rounded-lg flex gap-4 flex-col w-[400px]  myForm'>
                        <div className='text-3xl font-bold  uppercase text-center '>
                           <h2>Loan Calculator</h2>
                        </div>
                     <div className='flex flex-col gap-2 '>
                        <label htmlFor="loan-amount">Loan amount: </label>
                        <input  type="number" id="loan-amount" placeholder="loan amount: "  className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  " />
                     </div>
                     <div className='flex gap-2  flex-col '>
                        <label htmlFor="interest">Interest:</label>
                        <input type="number" id='interest' placeholder="interest %" className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "/>
                     </div>
                     <div className='flex gap-2  flex-col '>
                        <label htmlFor="month">month</label>
                        <input type="number" placeholder="month" id='month'  className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  " />
                     </div>
                     <div className='flex items-center justify-center '>
                        <button className='rounded-lg  hover:bg-white hover:text-primary duration-1000 transition-all px-5 py-2 bg-secondary '>Calculate</button>
                     </div>
                  </form>
               </div>
               <div className='md:w-1/2 w-full'>
                  <div>
                     <img src={imiCalculator} alt="imi calculator" />
                  </div>
               </div>
         </div>
      </div>
   );
};

export default CalculateImi;