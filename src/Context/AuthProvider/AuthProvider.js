import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"; 
import app from '../../Firebase/Firebase.Config';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext(); 
const auth = getAuth(app); 
const gooleProvider = new GoogleAuthProvider(); 


const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const {loading, setLoading} = useState(false); 
   
   
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


   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser); 
   }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setLoading(false); 
      }); 

      return unsubscribe(); 

   }, [])

  
   const authInfo = {user, setUser, createUser, logIn,logOut, loading, setLoading,updateInfo,verifyEmail  }; 
   return (
      <AuthContext.Provider value={authInfo}>
         
      </AuthContext.Provider>
   );
};

export default AuthProvider;;