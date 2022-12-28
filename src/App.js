
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Routes/Routes';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';
import { Toaster } from 'react-hot-toast';


function App() { 



useEffect(()=>{
  Aos.init({
    duration: 2000, 
  })
})
  return (
    <div className=''>
       <RouterProvider router={Router}>        
      </RouterProvider>
      
      <Toaster></Toaster>
    </div>
  );
}

export default App;
