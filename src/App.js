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
import KeyPadEvent from "./pages/KeyPadEvent.js";
import KeyPad3Event from "./pages/KeyPad3Event.js";
import KeyPad30Event from "./pages/KeyPad30Event.js";
import KeyPad300Event from "./pages/KeyPad300Event.js";
import KeyPad3000Event from "./pages/KeyPad3000Event.js";
import ClinicGp from "./pages/ClinicGp.js";
import GpDoctor from "./pages/GpDoctor.js";
import SelectDate from "./pages/SelectDate.js";
import ServicesGP from "./pages/ServicesGP.js";
import SelectTime from "./pages/SelectTime.js";
import Chatbot from "./pages/Chatbot.js";
import EventLocation from "./pages/EventLocation.js";
import Types from "./pages/Types.js";
import EventsDisplay from "./pages/EventsDisplay.js";
import EventGolf from "./pages/EventGolf.js";
import EventCaregiver from "./pages/EventCaregiver.js";
import Medicine from "./pages/Medicine.js";
import EditMedicine from "./pages/EditMedicine.js";
import AspirinEdit from "./pages/AspirinEdit.js";


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
              <Route path="/KeyPadEvent" element={<KeyPadEvent />} />
              <Route path="/KeyPad3Event" element={<KeyPad3Event />} />
              <Route path="/KeyPad30Event" element={<KeyPad30Event />} />
              <Route path="/KeyPad300Event" element={<KeyPad300Event />} />
              <Route path="/KeyPad3000Event" element={<KeyPad3000Event />} />
              <Route path="/ClinicGp" element={<ClinicGp />} />
              <Route path="/GpDoctor" element={<GpDoctor />} />
              <Route path="/SelectDate" element={<SelectDate />} />
              <Route path="/SelectTime" element={<SelectTime />} />
              <Route path="/ServicesGP" element={<ServicesGP />} />
              <Route path="/EventLocation" element={<EventLocation />} />
              <Route path="/Types" element={<Types />} />
              <Route path="/EventsDisplay" element={<EventsDisplay />} />
              <Route path="/EventGolf" element={<EventGolf />} />
              <Route path="/EventCaregiver" element={<EventCaregiver />} />
              <Route path="/Medicine" element={<Medicine />} />
              <Route path="/EditMedicine" element={<EditMedicine />} />
              <Route path="/AspirinEdit" element={<AspirinEdit />} />


            </Routes>
          </div>
        </BrowserRouter>
        <Chatbot/>
    </div>
  )
}

export default App
