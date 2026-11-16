import { BrowserRouter, Route, Routes } from "react-router-dom"
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
function App() {
  return (
    <>
     <Wishlist/>
     <Cart/>

      {/* <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}
export default App;
