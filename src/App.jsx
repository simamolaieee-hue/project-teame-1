import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header";
import SignUp from "./Header/Navbar/Sign Up";
import Pictuare from "./Header/Sliderpicture/Pictuare";
import Login from "./Header/Navbar/Login";
import Footer from "./Footer/Footer";
import Wishlist from "./Wishlist/Wishlist"
import MyAccount from "./MyAccount/MyAccount";
import Component from "./Main/Component";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <>
      
        <Header />

        <Routes>
          <Route path="/" element={<Component/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/myaccount" element={<MyAccount/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      
    </>
  )
}
export default App;
