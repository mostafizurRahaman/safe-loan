import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import CalculateImi from "../../Pages/CalculateImi/CalculateImi";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import AdminRoute from "../AdminRoute/AdminRoute";
import CustomerRoute from "../CustomerRoute/CustomerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




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
               path: "/get-loan", 
               element: <PrivateRoute>
                  <CustomerRoute>
                        <CalculateImi></CalculateImi>
                  </CustomerRoute>
               </PrivateRoute>
            }, 
            {
               path: "/customer-profile", 
               element: <PrivateRoute>
                     <CustomerRoute>
                        <UserProfile></UserProfile>
                     </CustomerRoute>
               </PrivateRoute>
            }, 
            {
               path:"/admin-dashboard", 
               element: <PrivateRoute>
                  <AdminRoute>
                        <AdminDashboard></AdminDashboard>
                  </AdminRoute>
               </PrivateRoute>
            }, 
            {
               path: '*', 
               element: <h1>This is an error page for 404</h1>
            }
         ]
      }
]); 



export default Router; 