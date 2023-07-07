import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./Caregiver.css";
import Home from "./Home";

function AddService() {
        // hook change location
        const navigate = useNavigate();
        // change route
        const homeroute = () => {
            // goes to Add Service
            navigate("/");
        }

        const HomeService = () => {
            // goes to Add Service
            navigate("/HomeServices");
        }
    return (

        <div className="location">
            <div className="div">
            <div className="overlap" onClick={homeroute}>
                <img className="arrow" alt="Arrow" src={arrow} />
            </div>
            <h1 className="text-wrapper">Caregivers</h1>
            <div className="overlap-group" onClick={homeroute}>
                <div className="text-wrapper-2">Home Support</div>
            </div>
            <div className="div-wrapper" onClick={HomeService}>
                <div className="text-wrapper-3" >Home Services</div>
            </div>
            <div className="overlap-2" onClick={homeroute}>
                <div className="text-wrapper-4" >Company</div>
            </div>
            <div className="overlap-group-2" onClick={homeroute}>
                <div className="text-wrapper-5" >Transport</div>
            </div>
            <p className="what-kind-of">
                What kind of caregiver would you <br />
                like to book?
            </p>
            </div>
        </div>
    );

}

export default AddService;