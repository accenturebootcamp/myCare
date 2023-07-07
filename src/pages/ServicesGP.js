import React from "react";
import arrow from './arrow.svg';
import plus from './plus.svg';
import calenderBooking from '../icon/edit_calendar_black_24dp_1.png';
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

    const GP = () => {
        // goes to Add Service
        navigate("/SelectDate");
    }

    const back = () => {
        // goes to Add Service
        navigate("/");
    }

    return (
        <div className="booking-service-page">
            <div className="div">
                <h1 className="text-wrapper">Services</h1>
                <div><p className="p-5">Click to add a Healthcare service to book for</p></div>
                <div className="overlap-group">
                    <button className="rectangle" onClick={routeChange} />
                    <img src={plus} className="arrow" alt="plus" />

                    <div className="text-wrapper-2">Add Service</div>
                </div>
                    <button className="overlap-icon" onClick={GP}>
                        <div className="div-2" />
                        <img className="img-icon" alt="Edit calendar black" src={calenderBooking} />
                    </button>
                    <div className="text-wrapper-3-icon">Bookings</div>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};
export default Services;