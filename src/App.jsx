import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./Components/NotFound";
import OurStory from "./Components/OurStory";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <OurStory />
              <Contact />
              <ProductDetails />
            </>
          }
        />

        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;