import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function BookingLocation() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/");
    }
    const back = () => {
        // goes to Add Service
        navigate("/Services");
    }
    return (
        <div className="booking-location">
            <div className="div">
                <h1 className="text-wrapper">GP Clinic</h1>
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper-2">Post Code</div>
                </div>
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