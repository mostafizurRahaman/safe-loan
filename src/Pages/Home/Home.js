import React from "react";
import loanHome from '../../Assets/LoanHome.png'; 
const Home = () => {
   return (
      <div className="flex items-center justify-center   px-5 md:px-10  min-h-screen bg-green-500 ">
         <div className="md:w-1/2  w-full " >
            <h2>
               For Safe home <br /> get safe Loan
            </h2>
            <p>
               Safe loan provide loans with low interest for build your home
               safe and strongly
            </p>
            <button>Apply for loan</button>
         </div>
         <div className="flex items-center justify-center w-full md:w-1/2">
               <img src={loanHome} alt="LoanHome" className="w-[75%]" />
         </div>
      </div>
   );
};

export default Home;
