import React from "react";
import arrow from './arrow.svg';
import plus from './plus.svg';
import { useNavigate } from "react-router-dom";

import "./style.css";

function Services() {

    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/AddService");
    }

    return (
        <div className="booking-service-page">
            <div className="div">
                <h1 className="text-wrapper">Services</h1>
                <div className="overlap-group">
                    <button className="rectangle" onClick={routeChange}/>
                    <img src={plus} className="arrow" alt="plus" />

                    <div className="text-wrapper-2">Add Service</div>
                </div>
                <div className="overlap">
                    <img src={arrow} className="arrow" alt="arrow" />
                </div>
            </div>
        </div>
    );
};
export default Services;