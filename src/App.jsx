import { BrowserRouter, Route, Routes } from "react-router-dom"

import NotFound from "./Components/NotFound";

import OurStory from "./Components/OurStory"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
<NotFound/>
<OurStory/>
    
    </>
  )
}
export default App;
