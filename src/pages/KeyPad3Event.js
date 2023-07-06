import * as React from 'react';
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function KeyPad3() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        navigate("/KeyPad30Event");
    }
    const back = () => {
        // goes to Add Service
        navigate("/EventLocation");
    }
    return (
        <div className="key-pad">
            <div className="div">
                <h1 className="find-GP-clinic-by">
                    Find GP Clinic by <br />
                    Post Code
                </h1>
                <div><p className="p">Enter post code with the key pad <br/>by tapping the number</p></div>
                <button className="text-field"><div className="text">3</div></button>
                <button className="overlap">
                    <div className="text-wrapper">Confirm</div>
                </button>
                <button className="overlap-group">
                    <div className="text-wrapper-2">4</div>
                </button>
                <button className="div-wrapper">
                    <div className="text-wrapper-3">2</div>
                </button>
                <button className="overlap-2">
                    <div className="text-wrapper-4">7</div>
                </button>
                <button className="overlap-3">
                    <div className="text-wrapper-2">5</div>
                </button>
                <button className="overlap-4">
                    <div className="text-wrapper-4">8</div>
                </button>
                <button className="overlap-5">
                    <div className="text-wrapper-2">6</div>
                </button>
                <button className="overlap-6">
                    <div className="text-wrapper-5">9</div>
                </button>
                <button className="overlap-7" onClick={routeChange}>
                    <div className="text-wrapper-2">0</div>
                </button>
                <button className="overlap-8" onClick={routeChange}>
                    <div className="text-wrapper-6">3</div>
                </button>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                <button className="overlap-9">
                    <div className="text-wrapper-2">1</div>
                </button>
            </div>
        </div>
    );
};
export default KeyPad3;