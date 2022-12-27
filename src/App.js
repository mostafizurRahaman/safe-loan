
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Routes/Routes/Routes';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

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
    </div>
  );
}

export default App;
