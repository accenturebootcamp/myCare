import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function Types() {
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
        <div className="dashboard">
            <div className="div">
                <div><p className="p-5">Choose a category of events</p></div>
                <button className="overlap" onClick={routeChange}>
                    <div className="text-wrapper1">Sport</div>
                </button>
                <button className="overlap-group" onClick={routeChange}>
                    <div className="text-wrapper1">Dancing</div>
                </button>
                <button className="div-wrapper" onClick={routeChange}>
                    <div className="text-wrapper1">Coffee</div>
                </button>
                <button className="overlap-2" onClick={routeChange}>
                    <div className="text-wrapper1">Chess</div>
                </button>
                <button className="overlap-3" onClick={routeChange}>
                    <div className="text-wrapper1">Bingo</div>
                </button>
                <h1 className="h-1">Category</h1>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default Types;