
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Routes/Routes/Routes';

function App() {
  return (
    <div>
       <RouterProvider router={Router}>

       </RouterProvider>
    </div>
  );
}

export default App;
