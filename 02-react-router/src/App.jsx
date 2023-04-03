import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Blogs from './componentrs/home/Blogs';
import Contact from './componentrs/Contact/Contact';
import Error from './componentrs/Error/Error';
import Nav from './componentrs/Navigation/Nav';
import About from './componentrs/About_Us/About';
import Blog from './componentrs/Blog/Blog';
import Header from './componentrs/Header/Header';
function App() {


  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs/:title' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
