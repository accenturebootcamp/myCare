import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function AddService() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/BookingLocation");
    }
    const edit = () => {
        // goes to Add Service
        navigate("/Medicine");
    }
    const back = () => {
        // goes to Add Service
        navigate("/Services");
    }
    return (
        <div className="dashboard">
            <div className="div">
                <div><p className="p-5">Click on a Healthcare service to book for</p></div>
                <button className="overlap" onClick={routeChange}>
                    <div className="text-wrapper">General Practitioner</div>
                </button>
                <button className="overlap-group" onClick={routeChange}>
                    <div className="text-wrapper-2">Dentist</div>
                </button>
                <button className="div-wrapper" onClick={edit}>
                    <div className="text-wrapper-3">Chiropractor</div>
                </button>
                <button className="overlap-2" onClick={routeChange}>
                    <div className="text-wrapper-4">Physiotherapist</div>
                </button>
                <button className="overlap-3" onClick={routeChange}>
                    <div className="text-wrapper-5">Optometrist</div>
                </button>
                <h1 className="h-1">Services</h1>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default AddService;