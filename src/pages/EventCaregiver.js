import React from "react";
import arrow from './arrow.svg';
import golf from './golf.jpg';

import { useNavigate } from "react-router-dom";
import "./style.css";

function EventCaregiver() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const keyPad = () => {
        // goes to Add Service
        navigate("/KeyPadEvent");
    }
    const back = () => {
        // goes to Add Service
        navigate("/EventGolf");
    }
    return (
        <div className="caregivers-needed">
            <div className="div">
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="text-wrapper">No</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-2">Yes</div>
                    </div>
                    <div className="frame">
                        <div className="text-wrapper-3">Senior Golfers Cup</div>
                        <img src={golf} className="golf" alt="golf" />

                        <p className="p">SAT, JUL 8 AT 1PM</p>
                    </div>
                </div>
                <p className="do-you-need-a">
                    Do you need a caregiver
                    <br /> for this event?
                </p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                <h1 className="h-1">Event</h1>
            </div>
        </div>
    );
};
export default EventCaregiver;
