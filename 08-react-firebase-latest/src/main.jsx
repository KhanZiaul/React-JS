import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AppContext from './components/AppContext/AppContext';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Orders from './components/Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'orders',
        element: <PrivateRouter> <Orders> </Orders> </PrivateRouter>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>,
)
