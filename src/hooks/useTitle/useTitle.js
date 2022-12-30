const { useEffect } = require("react")



const useTitle = (title) => {
   useEffect(()=>{
      document.title = `${title} - Safe Loan`; 
   }, [title])
}


export default useTitle; 