import { useEffect, useState } from "react"; 

const  useToken = (email) => {
   const [token ,setToken] = useState(''); 
   const [isTokenLoading, setIsTokenLoading]  = useToken(false); 
   useEffect(()=>{
      setIsTokenLoading(true); 
      if(email){
         fetch('http://localhost:5000/jwt', {
            method: "get", 
            header: {
               "content-type": "application/json"
            }, 
            body: JSON.stringify(email)
         }) 
         .then(res =>res.json())
         .then(data => {
            if(data.token){
               setToken(data.token); 
               localStorage.setItem('safeLoanToken', data.token); 
            }
         })
         .catch(err => console.log(err)); 

      }
   }, [email, setIsTokenLoading])

   return {token, isTokenLoading}
}


export default useToken; 