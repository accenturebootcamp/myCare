import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function Medicine() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        navigate("/EditMedicine");
    }
    const back = () => {
        // goes to Add Service
        navigate("/");
    }
    return (
        <div className="medicine">
            <div className="div">
                <h1 className="text-wrapper">Medicine</h1>
                <div className="text-wrapper-2">Intake Options</div>
                <p className="p">Click to see options for each day</p>
                <p className="text-wrapper-3">Change options for you medicine intake</p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                <button className="overlap-group">
                    <div className="text-wrapper-4">View Schedule</div>
                </button>
                <button className="div-wrapper" onClick={routeChange}>
                    <div className="text-wrapper-5">Edit Medicine</div>
                </button>
                <button className="overlap-2">
                    <div className="text-wrapper-6">Edit Schedule</div>
                </button>
            </div>
        </div>
    );
};
export default Medicine;