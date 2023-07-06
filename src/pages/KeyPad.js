import * as React from 'react';
import arrow from './arrow.svg';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import "./style.css";

function KeyPad() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/");
    }
    const back = () => {
        // goes to Add Service
        navigate("/Services");
    }
    return (
        <div className="key-pad">
            <div className="div">
                <h1 className="find-GP-clinic-by">
                    Find GP Clinic by <br />
                    Post Code
                </h1>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <div className="overlap">
                    <div className="text-wrapper">Confirm</div>
                </div>
                <div className="overlap-group">
                    <div className="text-wrapper-2">4</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">2</div>
                </div>
                <div className="overlap-2">
                    <div className="text-wrapper-4">7</div>
                </div>
                <div className="overlap-3">
                    <div className="text-wrapper-2">5</div>
                </div>
                <div className="overlap-4">
                    <div className="text-wrapper-4">8</div>
                </div>
                <div className="overlap-5">
                    <div className="text-wrapper-2">6</div>
                </div>
                <div className="overlap-6">
                    <div className="text-wrapper-5">9</div>
                </div>
                <div className="overlap-7">
                    <div className="text-wrapper-2">0</div>
                </div>
                <div className="overlap-8">
                    <div className="text-wrapper-6">3</div>
                </div>
                <button className="arrow-overlap" onClick={back}>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
                <div className="overlap-9">
                    <div className="text-wrapper-2">1</div>
                </div>
            </div>
        </div>
    );
};
export default KeyPad;