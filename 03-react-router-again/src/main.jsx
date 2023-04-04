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
import Home from './components/Home/Home';
import Show from './components/ShowData/Show';
import Card from './components/card/Card';
const router = createBrowserRouter([
  // Adding Router ------------------------------------
  // {
  //   path : '/' ,
  //   element : <div>hello</div>
  // }
  // root router --------------------------------------
  // {
  //   path:'/',
  //   element : <Router></Router>,
  //   errorElement: <ErrorPage></ErrorPage>
  // },
  // {
  //   path:'/contact',
  //   element: <Contact></Contact>
  // }

  // Nested router -------------------------------------

  {
    path:'/',
    element : <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<App></App>
      },
      {
        path:'datas',
        element:<Show></Show>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'data/:id',
        element:<Card></Card>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'root',
        element:<Router></Router>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
