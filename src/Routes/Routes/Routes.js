import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";




const Router = createBrowserRouter([
      {
         path:"/", 
         element: <Main></Main>, 
         children: [
            {
               path: '/', 
               element: <Home></Home>
            }, 
            {
               path: '/home', 
               element: <Home></Home>
            }, 
            {
               path: '/signin', 
               element: <SignIn></SignIn>
            }, 
            {
               path: "/signup", 
               element: <SignUp></SignUp>
            }, 
            {
               path: '*', 
               element: <h1>This is an error page for 404</h1>
            }
         ]
      }
]); 



export default Router; 