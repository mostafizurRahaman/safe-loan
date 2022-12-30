import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import signin from '../../Assets/signin.png'; 
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken/useToken';
import { toast } from 'react-hot-toast';
const SignIn = () => {
   const {register, handleSubmit, formState:{errors}} =  useForm(); 
   const {logIn} = useContext(AuthContext); 
   const [loginEmail, setLoginEmail] = useState(''); 
   const [error ,setError] = useState(''); 
   const {token} = useToken(loginEmail); 
   const location = useLocation(); 
   const navigate = useNavigate(); 
   const from = location.state?.from?.pathname || '/'; 
   
   if(token){
      navigate(from, {replace : true}); 
      window.location.reload(); 
   }

   
   
   const onSubmit  =(data) => {
      setError(''); 
         logIn(data.email, data.password)
         .then(res => {
            const user = res.user; 
            setLoginEmail(user.email); 
            toast.success(`${user.displayName}, SuccessFully Login`); 
         })
         .catch(err =>setError(err.message))
   }


   return (
      <div className="min-h-screen py-10 md:px-10 px-5 bg-primary ">
      <div className="flex  items-center justify-center  md:flex-row flex-col-reverse  gap-20 h-auto  ">
         <div className="md:w-1/2 w-full">
            <div className="w-full py-10 md:w-[400px] bg-primary   bg-opacity-75  p-5 rounded-lg myForm flex items-center justify-center " data-aos="fade-up-right">
               <form
                  className="w-full  flex items-center flex-col gap-3 h-auto "
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <div>
                     <h2 className="text-3xl font-bold capitalize my-5 text-center text-accent   ">
                        Sign In
                     </h2>
                  </div>
                  <div className="flex w-full  flex-col gap-1">
                     <label className="text-accent " htmlFor="email">
                        Email:
                     </label>
                     <input
                        className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "
                        type="email"
                        id="email"
                        placeholder="Email"
                        {...register("email", {
                           required: "please enter your email",
                           pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "enter an valid email.",
                           },
                        })}
                     />
                     {errors?.email && (
                        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                     )}
                  </div>
                  <div className="flex w-full  flex-col gap-1">
                     <label className="text-accent " htmlFor="password">
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        placeholder="password"
                        name="password"
                        className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "
                        {...register("password", {
                           required: "enter a password",
                           pattern: {
                              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                              message: "enter  a strong password",
                           },
                        })}
                     />
                     {errors?.password && (
                        <ErrorMessage>
                           {errors?.password?.message}
                        </ErrorMessage>
                     )}
                  </div>
                  
                  
                  <div className="flex items-center justify-center flex-col ">
                     <div>
                        {
                           error && <ErrorMessage>{error}</ErrorMessage>
                        }
                     </div>
                     <button
                        type="submit"
                        className="mb-2  text-white font-semibold uppercase px-10 py-2 bg-secondary hover:bg-opacity-80  rounded-lg my-5"
                        style={{ letterSpacing: "2px" }}
                     >
                        Submit
                     </button>
                     <div className="mb-5">
                        <p className="text-center  text-xs  text-accent font-semibold capitalize mt-2">
                           Already have an account?
                           <Link className="border-b border-b-secondary  text-secondary ml-1" to="/signup">sign up</Link>
                        </p>
                     </div>
                  </div>
               </form>
            </div>
         </div>
         <div className="w-full  md:w-1/2 flex items-center justify-center " data-aos="fade-up-left">
            <img
               src={signin}
               alt="sign_up_image"
               className="w-[85%] h-auto "
            />
         </div>
      </div>
   </div>
   );
};

export default SignIn;