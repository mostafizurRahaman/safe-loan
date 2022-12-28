import React, { useContext, useState } from "react";
import sideRegister from "../../Assets/signup.png";
import "./SingUp.css";
import { BiImageAdd } from "react-icons/bi";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";



const SignUp = () => {
   const { createUser, updateInfo } = useContext(AuthContext);
   const [accept, setAccept] = useState(false);
   
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const imageKey = process.env.REACT_APP_IMAGE_BB_KEY;

   const onSubmit = (data) => {
      const formData = new FormData();
      const UploadedImage = data.image[0];
      console.log(UploadedImage);
      formData.append("image", UploadedImage);
      fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
         method: "POST",
         body: formData,
      })
         .then((res) => res.json())
         .then((imageData) => {
            const imageUrl = imageData.data.url;
            createUser(data.email, data.password)
               .then((res) => {
                  const user = res.user;
                  const profile = {
                     displayName: data.name,
                     photoURL: imageUrl,
                  };
                  handleUpdate(profile);
                  const newUser = {
                     name: data.name, 
                     email: data.email, 
                     photoURL: imageUrl,
                  }
                  console.log(newUser); 
                  saveUser(newUser); 
               })
               .catch((err) => console.log(err));
         })
         .catch((err) => console.log(err));
   };

   // Update User Information by this function.
   const handleUpdate = (profile) => {
      updateInfo(profile)
         .then(() => {})
         .catch((err) => console.log(err));
   };

   // save user api: 
   const saveUser = (user) => {
      fetch('http://localhost:5000/users', {
         method: "POST", 
         headers: {
            "content-type": "application/json", 
         }, 
         body: JSON.stringify(user)
      })
      .then(res =>res.json())
      .then(data => {
         if(data.acknowledged){
            toast.success('Congratulations, successfully create a profile'); 
         }
      })
      .catch(err => console.log(err)); 
   }
   return (
      <div className="min-h-screen py-10 md:px-10 px-5 bg-primary ">
         <div className="flex  items-center justify-center  md:flex-row flex-col-reverse  gap-20 h-auto  ">
            <div className="md:w-1/2 w-full">
               <div className="w-full  md:w-[400px] bg-primary   bg-opacity-75  p-5 rounded-lg myForm flex items-center justify-center ">
                  <form
                     className="w-full  flex items-center flex-col gap-3 h-auto "
                     onSubmit={handleSubmit(onSubmit)}
                  >
                     <div>
                        <h2 className="text-3xl font-bold capitalize my-5 text-center text-accent   ">
                           Sign Up
                        </h2>
                     </div>
                     <div className="flex w-full  flex-col gap-1">
                        <label className="text-accent " htmlFor="fullName">
                           Full Name:
                        </label>
                        <input
                           type="text"
                           id="fullName"
                           name="fullName"
                           placeholder="Full Name"
                           className="text-base font-medium border-accent border lg:w-full  rounded-lg px-2 py-1 placeholder:text-[15px] bg-primary text-secondary  "
                           {...register("name", {
                              required: "Enter your email address: ",
                           })}
                        />
                        {errors?.name && (
                           <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                        )}
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
                     <div className="flex w-full  flex-col gap-1">
                        <label
                           className=" rounded-lg flex items-center justify-center gap-5 w-full border border-1 px-5 py-5  "
                           htmlFor="image"
                        >
                           <BiImageAdd className="w-20 h-20 text-secondary block"></BiImageAdd>
                           <input
                              id="image"
                              type="file"
                              className="text-accent"
                              {...register("image", {
                                 required: "Please upload an image.",
                              })}
                           />
                        </label>

                        {errors?.image && (
                           <ErrorMessage>{errors?.image?.message}</ErrorMessage>
                        )}
                     </div>
                     <div className="flex items-center justify-center gap-2 text-accent text-xs">
                        <input
                           type="checkbox"
                           id="accept"
                           onClick={(event) => {
                              setAccept(event.target.checked);
                           }}
                        />{" "}
                        <label htmlFor="accept">
                           Accept our <span>terms and condition</span>
                        </label>
                     </div>
                     <div>
                        <button
                           type="submit"
                           className="text-white font-semibold uppercase px-10 py-2 bg-secondary hover:bg-opacity-80  rounded-lg "
                           style={{ letterSpacing: "2px" }}
                           disabled={!accept}
                        >
                           Submit
                        </button>
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
