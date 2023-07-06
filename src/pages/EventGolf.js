import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";
import golf from './golf.jpg';

function EventGolf() {
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
        navigate("/AddService");
    }
    return (
        <div className="event-golf">
            <div className="div">
                <div className="overlap">
                    <div className="frame">
                        <p className="bring-the-best-of">
                            <span className="text-wrapper">
                                Bring the best of your golfing ability to the Spring Valley Golf Club, located at{" "}
                            </span>
                            <span className="span">619 Heatherton Rd, Clayton South VIC 3169</span>
                            <span className="text-wrapper">
                                . Golf clubs, food and drinks will be provided. Get ready to chat and mingle with fellow golfers. All
                                levels of experience is welcome!
                            </span>
                        </p>
                        <div className="sport-golf">
                            <span className="text-wrapper-2">Sport: </span>
                            <span className="text-wrapper-3">Golf</span>
                        </div>
                        <div className="text-wrapper-4">Senior Golfers Cup</div>
                        <p className="location-spring">
                            <span className="text-wrapper-2">Location: </span>
                            <span className="text-wrapper-3">Spring Valley Golf Club</span>
                        </p>
                        <img src={golf} className="golf" alt="golf" />
                        <p className="time-SAT-JUL-AT">
                            <span className="text-wrapper-2">Time:</span>
                            <span className="text-wrapper-3"> SAT, JUL 8 AT 1PM</span>
                        </p>
                        <div className="overlap-group">
                            <div className="text-wrapper-5">Confirm</div>
                        </div>
                    </div>
                </div>
                <div className="arrow-wrapper">
                    <img className="arrow" alt="Arrow" src="arrow-5.svg" />
                </div>
                <h1 className="h-1">Event</h1>
            </div>
        </div>
    );
};
export default EventGolf;