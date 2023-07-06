import { BrowserRouter, Routes, Route } from "react-router-dom"
// import "./App.css"
import Home from "./pages/Home.js"
import Service from "./pages/Services.js";
import AddService from "./pages/AddService.js";
import BookingLocation from "./pages/BookingLocation.js";




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
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
