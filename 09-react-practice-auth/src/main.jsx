import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './Components/About/About.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import PrivateSector from './Components/PrivateSector/PrivateSector.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
     {
      path:'about',
      element:<About></About>
     },
     {
      path:'login',
      element:<Login></Login>
     },
     {
      path:'register',
      element:<Register></Register>
     },
     {
      path:'private',
      element:<PrivateSector></PrivateSector>
     }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
