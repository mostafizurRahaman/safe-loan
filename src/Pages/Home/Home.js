import React from "react";
import loanHome from '../../Assets/LoanHome.png'; 
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
const Home = () => {
   return (
      <div className="flex items-center justify-center   px-5 md:px-10  min-h-screen bg-primary  ">
         <div className="md:w-1/2  w-full   " >
            <h2 className="text-secondary text-3xl font-bold uppercase  mb-6  md:text-6xl ">
               For Safe home <br /> get safe Loan
            </h2>
            <p className="text-accent  text-xl ">
               Safe loan provide loans with low interest for build your home
               safe and strongly
            </p>
           <PrimaryButton path="/calculate-emi" text="apply for loan"></PrimaryButton>
         </div>
         <div className="flex items-center justify-center w-full md:w-1/2">
               <img src={loanHome} alt="LoanHome" className="w-[75%]" />
         </div>
      </div>
   );
};

export default Home;
