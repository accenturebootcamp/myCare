import { BrowserRouter, Routes, Route } from "react-router-dom"
// import "./App.css"
import Home from "./pages/Home.js"
import Service from "./pages/Services.js";
import AddService from "./pages/AddService.js";
import Caregivers from "./pages/Caregivers.js";
import HomeServices from "./pages/HomeServices.js";
import Maxadams from "./pages/Maxadams.js";
import CaregiverBooked from "./pages/CaregiverBooked.js";



function App() {
  
  return (
    <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Caregivers" element={<Caregivers />} />
              <Route path="/Services" element={<Service />} />
              <Route path="/AddService" element={<AddService />} />
              <Route path="/HomeServices" element={<HomeServices />} />
              <Route path="/Maxadams" element={<Maxadams />} />
              <Route path="/CaregiverBooked" element={<CaregiverBooked />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
