import React from "react";
import loanHome from "../../Assets/LoanHome.png";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
const Home = () => {
   return (
      <div className="flex md:flex-row flex-col-reverse  items-center justify-center   px-5 md:px-10  min-h-screen bg-primary py-10 ">
         <div
            className="md:w-1/2  w-full   md:text-start text-center "
            data-aos="fade-right"
         >
            <h2
               className="text-secondary text-5xl font-bold capitalize  mb-6  md:text-6xl  "
               style={{ lineHeight: "1.1em" }}
            >
               For Safe home <br /> get safe Loan
            </h2>
            <p className="text-accent  text-xl ">
               Safe loan provide loans with low interest for build your home
               safe and strongly
            </p>
            <div className="flex items-center justify-center md:block">
               <PrimaryButton
                  path="/calculate-emi"
                  text="apply for loan"
               ></PrimaryButton>
            </div>
         </div>
         <div
            className="flex items-center justify-center w-full md:w-1/2 "
            data-aos="fade-left"
         >
            <img src={loanHome} alt="LoanHome" className="w-[85%]" />
         </div>
      </div>
   );
};

export default Home;
