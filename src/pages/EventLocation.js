import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function EventLocation() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const keyPad = () => {
        // goes to Add Service
        navigate("/KeyPadEvent");
    }
    const code = () => {
        // goes to Add Service
        navigate("/ClinicGp");
    }
    const back = () => {
        // goes to Add Service
        navigate("/");
    }
    return (
        <div className="booking-location">
            <div className="div">
                <h1 className="text-wrapper">Events</h1>
                <button className="overlap" onClick={keyPad}>
                    <div className="rectangle" />
                    <div className="text-wrapper-2">Post Code</div>
                </button>
                <button className="overlap-group" onClick={code}>
                    <div className="text-wrapper-3">Near by</div>
                </button>
                <div>
                    <p className="p">Click how you wish to find events by</p>
                </div>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};
export default EventLocation;