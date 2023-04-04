import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './components/Root-Router/Router';
import ErrorPage from './components/Error/ErrorPage';
import Contact from './components/Contact/Contact';
const router = createBrowserRouter([
  // Adding Router-----------------
  // {
  //   path : '/' ,
  //   element : <div>hello</div>
  // }
  // root router--------------
  {
    path:'/',
    element : <Router></Router>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/contact',
    element: <Contact></Contact>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
