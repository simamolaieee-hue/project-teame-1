import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import MyAccount from "./MyAccount/MyAccount";
function App() {
  return (
    <>
        <Routes>
         <Route path="/" element={<Navigate to="/wishlist" replace/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
        </Routes>
    </>
  )
}
export default App;
