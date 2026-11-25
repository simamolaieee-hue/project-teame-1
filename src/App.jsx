import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header/Header";
import Contact from "./Header/Navbar/Contact";
import About from "./Header/Navbar/About";
import SignUp from "./Header/Navbar/Sign Up";
import Pictuare from "./Header/Sliderpicture/Pictuare";
import Categorie from "./Main/Categorie";
import Login from "./Header/Navbar/Login";
import Thismonth from "./Main/Thismonth";
import Picturebetween from "./Main/Picturebetween";
import Featured from "./Main/Featured";
import Footer from "./Footer/Footer";
import Wishlist from "./Wishlist/Wishlist"
import Ourproduct from "./Main/Ourproduct";
import Todays from "./Main/Todays";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<><Pictuare /><Todays/><Categorie /><Thismonth/><Picturebetween/><Ourproduct/><Featured/></>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;
