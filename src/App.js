import { BrowserRouter, Routes, Route } from "react-router-dom"
// import "./App.css"
import Home from "./pages/Home.js"
import Service from "./pages/Services.js";
import AddService from "./pages/AddService.js";
import BookingLocation from "./pages/BookingLocation.js";
import KeyPad from "./pages/KeyPad.js";
import KeyPad3 from "./pages/KeyPad3.js";
import KeyPad30 from "./pages/KeyPad30.js";
import KeyPad300 from "./pages/KeyPad300.js";
import KeyPad3000 from "./pages/KeyPad3000.js";


function App() {
  
  return (
    <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/myCare" element={<Home />} />
              <Route path="/Services" element={<Service />} />
              <Route path="/AddService" element={<AddService />} />
              <Route path="/BookingLocation" element={<BookingLocation />} />
              <Route path="/KeyPad" element={<KeyPad />} />
              <Route path="/KeyPad3" element={<KeyPad3 />} />
              <Route path="/KeyPad30" element={<KeyPad30 />} />
              <Route path="/KeyPad300" element={<KeyPad300 />} />
              <Route path="/KeyPad3000" element={<KeyPad3000 />} />


            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
