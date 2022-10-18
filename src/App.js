
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import Order from './Order';
import PrivateRoute from './PrivateRoute';

const  router = createBrowserRouter([
  { 
    path:'/',
    element:<Main/>, 
    children:[
      { 
        path:'/login',
        element:<Login/>
      },
      { 
        path:'/register',
        element:<Register/>
      },
      { 
        path:'/home',
        element:<Home/>
      },{
        path:'/order', 
        element:<PrivateRoute><Order/></PrivateRoute>
      }
    ]
  },
  
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
