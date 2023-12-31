import React, { useState } from "react";
import arrow from './arrow.svg';
import star from './star.svg';

import { useNavigate } from "react-router-dom";
import "./style.css";
import { Popup } from "./PopUp.js";

function GpDoctor() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const showAlert = () => {
        alert("I'm an alert");
    }
    // const routeChange = () => {
    //     // goes to Add Service
    //     navigate("/SaveGP");
    // }
    const back = () => {
        // goes to Add Service
        navigate("/ClinicGp");
    }
    const [open, setOpen] = useState(false);
    return (
        <div className="booking-GP-clinic">

            <div className="div">
                
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="text-wrapper">Post Code 3000</div>
                    </div>
                    <div className="group">
                        <div className="overlap-group-2">
                            <div className="div-wrapper">
                                <div className="overlap-group-2">

                                    <div className="div-wrapper">
                                        <div className="group-wrapper" onClick={() => setOpen(true)}>
                                            
                                            <div className="group-12" />
                                        </div>
                                    </div>
                                    <img src={star} className="star" alt="star" />

                                    <div className="group-3">
                                        <div className="text-wrapper-2">8.5/10</div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-3">Dr. Denis Melb</div>
                                <p className="p">
                                    General Practitioner, Male
                                </p>
                                <p className="p1">
                                    Works Mon, Wed, Fri
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="overlap-wrapper" onClick={() => setOpen(true)}>
                        <div className="overlap-group-2">
                            <div className="div-wrapper">
                                <div className="overlap-group-2">
                                    <div className="div-wrapper">
                                        <div className="group-wrapper">
                                            <div className="group-15" />
                                        </div>
                                    </div>
                                    <img src={star} className="star" alt="star" />
                                    <div className="group-3">
                                        <div className="text-wrapper-2">8/10</div>

                                    </div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-3">Dr. Meline Jeb</div>
                                <p className="p">
                                    General Practitioner, Female
                                </p>
                                <p className="p1">
                                    Works Mon-Thu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="h-2">Add Doctor</h1>
                <p className="text-wrapper-10">Click the Doctor you wish to book with</p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                {open ? <Popup text="Saving GP" closePopup={() => setOpen(false)} /> : null}
            </div>
        </div>
    );
};
export default GpDoctor;