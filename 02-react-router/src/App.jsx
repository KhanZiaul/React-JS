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
import Nav from './componentrs/Navigation/Nav';
import About from './componentrs/About_Us/About';
function App() {


  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
