import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './componentrs/home/Home';
import Contact from './componentrs/Contact/Contact';
import Error from './componentrs/Error/Error';
function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
