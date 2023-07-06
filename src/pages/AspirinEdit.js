import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function AspirinEdit() {
    // hook change location
    const navigate = useNavigate();
    const back = () => {
        // goes to Add Service
        navigate("/EditMedicine");
    }
    return (
        <div className="aspirin-edit">

            <div className="div">
                
                <div className="overlap">
                    <div className="text-wrapper">Aspirin</div>
                </div>
                <div className="overlap-group">
                    <div className="text-wrapper-2">Morning</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">Afternoon</div>
                </div>
                <div className="overlap-2">
                    <div className="text-wrapper-4">Night</div>
                </div>

                <div className="overlap-3">
                    <div className="text-wrapper-5">Edit Medicine</div>
                    <div className="overlap-4">
                        <p className="p">Choose what medicine you are changing</p>
                    </div>
                </div>
                <h1 className="h-1">Intake Frequency</h1>
                <div className="text-wrapper-6">Intake Time</div>
                <div className="overlap-5">
                    <div className="text-wrapper-7">+</div>
                </div>
                <div className="overlap-6">
                    <div className="text-wrapper-8">-</div>
                </div>
                <div className="overlap-7">
                    <div className="text-wrapper-9">2</div>
                </div>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
    );
};
export default AspirinEdit;
