import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function BookingLocation() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const keyPad = () => {
        // goes to Add Service
        navigate("/KeyPad");
    }
    const back = () => {
        // goes to Add Service
        navigate("/Services");
    }
    return (
        <div className="booking-location">
            <div className="div">
                <h1 className="text-wrapper">GP Clinic</h1>
                <button className="overlap" onClick={keyPad}>
                    <div className="rectangle" />
                    <div className="text-wrapper-2">Post Code</div>
                </button>
                <div className="overlap-group">
                    <div className="text-wrapper-3">Near by</div>
                </div>
                <p className="p">Click how you wish to find a GP clinic</p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};
export default BookingLocation;