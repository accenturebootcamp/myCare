import React from "react";
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function EditMedicine() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        navigate("/AspirinEdit");
    }
    const back = () => {
        // goes to Add Service
        navigate("/Medicine");
    }
    return (
        <div className="choose-day">
            <div className="div">
                <h1 className="text-wrapper">Edit Medicine</h1>
                <p className="p">Choose what medicine you are changing</p>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                <div className="overlap-group" onClick={routeChange}>
                    <div className="text-wrapper-2">Aspirin</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">Ibuprofen</div>
                </div>
                <div className="overlap-2">
                    <div className="text-wrapper-4">Metformin</div>
                </div>
                <div className="overlap-group-2">
                    <div className="text-wrapper-5">Lisinopril</div>
                </div>
                <div className="overlap-3">
                    <div className="text-wrapper-6">Claritin</div>
                </div>
                <div className="overlap-4">
                    <div className="text-wrapper-7">Zantac</div>
                </div>
                <div className="overlap-5">
                    <div className="text-wrapper-8">Metoprolol</div>
                </div>
            </div>
        </div>
    );
};
export default EditMedicine;
