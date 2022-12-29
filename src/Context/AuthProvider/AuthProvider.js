import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"; 
import app from '../../Firebase/Firebase.Config';
import { set } from 'react-hook-form';



export const AuthContext = createContext();  
const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider(); 


const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true); 
   
   
   const createUser =(email, password) => {
      setLoading(true); 
      return createUserWithEmailAndPassword(auth, email, password); 
   }

   const logIn = (email, password) => {
      setLoading(true); 
      return signInWithEmailAndPassword(auth, email, password); 
   }

   const updateInfo = (profile) => {
      setLoading(true); 
      return updateProfile(auth.currentUser, profile); 
   }

   const logOut = () => {
      return signOut(auth); 
   }

   const googleSignIn  =() => {
      return signInWithPopup(auth, googleProvider)
   }


   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser); 
   }

   useEffect(()=>{
      setLoading(true); 
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setLoading(false); 
      }); 

      return () => unsubscribe(); 

   }, [])

  
   const authInfo = {user, setUser, createUser, logIn,logOut, loading, setLoading,updateInfo,verifyEmail, googleSignIn  }; 
   return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;;