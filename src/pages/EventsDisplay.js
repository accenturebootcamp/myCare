import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";
import golf from './golf.jpg';
import bowls from './BOWLS.png';
import swimming from './swimming.jpg';




function EventsDisplay() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/EventsDisplay");
    }
    const back = () => {
        // goes to Add Service
        navigate("/KeyPadEvent");
    }
    return (
        <div className="events">
            <div className="div">
                <div className="overlap">
                    <div className="frame">
                        <div className="text-wrapper">Senior Golfers Cup</div>
                        <img src={golf} className="golf" alt="golf" />
                        <p className="p">SAT, JUL 8 AT 1PM</p>
                    </div>
                    <div className="frame-2">
                        <div className="text-wrapper-2">Lawn bowls Match</div>
                        <p className="text-wrapper-3">FRI, JUL 14 AT 5PM</p>
                        <img src={bowls} className="golf" alt="golf" />

                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-4">Monday Morning Swimming</div>
                        <p className="text-wrapper-5">MON, JUL 17 AT 7AM</p>
                        <img src={swimming} className="golf" alt="golf" />

                    </div>
                </div>
                <h1 className="h-1">Events</h1>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default EventsDisplay;
