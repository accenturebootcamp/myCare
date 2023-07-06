import React from "react";
import arrow from './arrow.svg';
import star from './star.svg';

import { useNavigate } from "react-router-dom";
import "./style.css";

function ClinicGp() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/BookingLocation");
    }
    const back = () => {
        // goes to Add Service
        navigate("/KeyPad");
    }
    return (
        <div className="booking-GP-clinic">
            <div className="div">
                <div className="overlap">
                    <div className="overlap-group">
                        {/* <Link className="rectangle" to="/booking-gp-clinic" /> */}
                        <div className="text-wrapper">Post Code 3000</div>
                    </div>
                    <div className="group">
                        <div className="overlap-group-2">
                            <div className="div-wrapper">
                                <div className="overlap-group-2">
                                    <div className="div-wrapper">
                                        <div className="group-wrapper">
                                            <div className="group-2" />
                                        </div>
                                    </div>
                                    <img src={star} className="star" alt="star" />

                                    <div className="group-3">
                                        <div className="text-wrapper-2">8.5/10</div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-3">Melbourne City <br /> Medical Centre</div>
                                <p className="p">
                                    68 Lonsdale Street Melbourne,<br />VIC 3000
                                </p>
                                <p className="p1">
                                    Open Mon-Fri 8:00-5:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="overlap-wrapper" onClick={routeChange}>
                        <div className="overlap-group-2">
                            <div className="div-wrapper">
                                <div className="overlap-group-2">
                                    <div className="div-wrapper">
                                        <div className="group-wrapper">
                                            <div className="group-5" />
                                        </div>
                                    </div>
                                    <img src={star} className="star" alt="star" />
                                    <div className="group-3">
                                        <div className="text-wrapper-2">8/10</div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-3">Paramount <br /> Medical Clinic</div>
                                <p className="p">
                                    Front St Melb VIC 3000
                                    <br />
                                    <br />
                                    Open Mon-Fri 8:00-5:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="h-1">GP Clinic</h1>
                <p className="text-wrapper-4">Click GP clinic you wish to book</p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};
export default ClinicGp;