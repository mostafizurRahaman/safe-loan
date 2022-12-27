import React from "react";
import sideRegister from "../../Assets/signup.png";
import "./SingUp.css";
const SignUp = () => {
   return (
      <div className="min-h-screen py-10 md:px-10 px-5 bg-primary ">
         <div className="flex  items-center justify-center  md:flex-row flex-col-reverse  gap-20 h-auto  ">
            <div className="md:w-1/2 w-full">
               <div className=" w-full  md:w-[400px] bg-primary   bg-opacity-75  p-5 rounded-lg myForm flex items-center justify-center ">
                  <form className="w-full  flex items-center flex-col gap-3 h-auto ">
                     <div>
                        <h2 className="text-3xl font-bold capitalize my-5 text-center text-accent   ">
                           Sign Up
                        </h2>
                     </div>
                     <div className="flex w-full  flex-col gap-1">
                        <label  className="text-accent " htmlFor="fullName">
                           Full Name:
                        </label>
                        <input
                           type="text"
                           id="fullName"
                           name="fullName"
                           placeholder="Full Name"
                           className="text-xl font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "
                        />
                     </div>
                     <div className="flex w-full  flex-col gap-1">
                        <label className="text-accent " htmlFor="email">Email:</label>
                        <input  className="text-xl font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  " type="email" id="email" placeholder="Email" />
                     </div>
                     <div className="flex w-full  flex-col gap-1">
                        <label className="text-accent  " htmlFor="phone">Phone</label>
                        <input  className="text-xl font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  " type="text" id="phone" placeholder="phone" />
                     </div>
                     <div className="flex w-full  flex-col gap-1">
                        <label className="text-accent " htmlFor="password">Password</label>
                        <input
                           type="password"
                           id="password"
                           placeholder="password"
                           name="password"
                           className="text-xl font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "
                        />
                     </div>
                     <div className="flex w-full  flex-col gap-1">
                        <label className="flex w-full  flex-col gap-1 text-accent  " htmlFor="photo"> Photo</label>
                        <input type="file" name="photo" id="photo" />
                     </div>
                  </form>
               </div>
            </div>
            <div className="w-full  md:w-1/2 flex items-center justify-center ">
               <img
                  src={sideRegister}
                  alt="sign_up_image"
                  className="w-[100%] h-auto "
               />
            </div>
         </div>
      </div>
   );
};

export default SignUp;
