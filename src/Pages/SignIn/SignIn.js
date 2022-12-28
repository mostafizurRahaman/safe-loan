import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

const SignIn = () => {
   const {register, handleSubmit, formState:{errors}} =  useForm(); 
  
   const onSubmit  =(data) => {
      console.log(data); 
   }


   return (
      <div>
          <div>
               <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div>
                        <h2>Sign In</h2>
                     </div>
                     <div>
                        <label htmlFor="email">email:</label>
                        <input type="email" id='email' placeholder="enter your email" name="email" 
                         {
                           ...register("email",  {required: "must enter your email", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "must enter a valid email:"}})
                         }
                        />
                        {
                           errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                        }

                     </div>
                     <div>
                        <label htmlFor="password">password:</label>
                        <input type="password" id="password" placeholder="password" />
                     </div>
                  </form>
               </div>
          </div>
      </div>
   );
};

export default SignIn;