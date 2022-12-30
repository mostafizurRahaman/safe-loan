import { useEffect, useState } from "react";

const useToken = (email) => {
   const [token, setToken] = useState("");
   const [isTokenLoading, setIsTokenLoading] = useState(false);
   useEffect(() => {
      setIsTokenLoading(true);
      if (email) {
         fetch(`https://safe-loan-server.vercel.app/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
               if (data.token) {
                  setToken(data.token);
                  localStorage.setItem("safeLoanToken", data.token);
               }
            })
            .catch((err) => console.log(err));
      }
   }, [email]);

   return { token, isTokenLoading };
};

export default useToken;
