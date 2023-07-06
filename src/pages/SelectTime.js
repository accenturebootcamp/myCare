import React, { useState } from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";
import { PopUpBooking } from "./PopUpBooking";

function SelectTime() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        navigate("/ClinicGp");
    }
    const back = () => {
        // goes to Add Service
        navigate("/SelectDate");
    }
    const [open, setOpen] = useState(false);
    return (
        <div className="boooking-select-time">
            <div className="div">
                <h1 className="text-wrapper">Time</h1>
                <div className="overlap-group">
                    <div className="group">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">9:00am</div>
                        </div>
                    </div>
                    <div className="group-wrapper">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">3:00pm</div>
                        </div>
                    </div>
                    <div className="group-2">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">4:00pm</div>
                        </div>
                    </div>
                    <div className="group-3"onClick={() => setOpen(true)}>
                        <div className="div-wrapper" >
                            <div className="text-wrapper-2">9:30am</div>
                        </div>
                    </div>
                    <div className="text-wrapper-3">14th July</div>
                </div>
                <p className="p">Select a time for appointment</p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                {open ? <PopUpBooking text="Confirm Booking" closePopup={() => setOpen(false)} /> : null}
            </div>
        </div>
    );
};
export default SelectTime