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
import ClinicGp from "./pages/ClinicGp.js";
import GpDoctor from "./pages/GpDoctor.js";
import SelectDate from "./pages/SelectDate.js";
import ServicesGP from "./pages/ServicesGP.js";
import SelectTime from "./pages/SelectTime.js";
import Chatbot from "./pages/Chatbot.js";


function App() {
  
  return (
    <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Service />} />
              <Route path="/AddService" element={<AddService />} />
              <Route path="/BookingLocation" element={<BookingLocation />} />
              <Route path="/KeyPad" element={<KeyPad />} />
              <Route path="/KeyPad3" element={<KeyPad3 />} />
              <Route path="/KeyPad30" element={<KeyPad30 />} />
              <Route path="/KeyPad300" element={<KeyPad300 />} />
              <Route path="/KeyPad3000" element={<KeyPad3000 />} />
              <Route path="/ClinicGp" element={<ClinicGp />} />
              <Route path="/GpDoctor" element={<GpDoctor />} />
              <Route path="/SelectDate" element={<SelectDate />} />
              <Route path="/SelectTime" element={<SelectTime />} />
              <Route path="/ServicesGP" element={<ServicesGP />} />


            </Routes>
          </div>
        </BrowserRouter>
        <Chatbot/>
    </div>
  )
}

export default App
