import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const Popup = ({ text, closePopup }) => {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/KeyPad");
    }
    return (
        <div className="popup-container">
            <div className="popup-body">
                <h1>{text}</h1>

                <div>
                    <p className="popup-text">
                        <b>Clinic:</b> Melb Clinic
                    </p>
                    <p className="popup-text">
                    <b>Dotor:</b> Dr Melb
                    </p>
                </div>
                <div>
                    <button className="popup-button" onClick={routeChange}>Yes</button>
                    <button className="popup-button-right" onClick={closePopup}>No</button>
                </div>
            </div>
        </div>
    );
};

// export default PopUp;