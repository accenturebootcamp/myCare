import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const Popup = ({ text, closePopup }) => {
    // hook change location
    const navigate = useNavigate();
    // change route
    const routeChange = () => {
        // goes to Add Service
        navigate("/SelectDate");
    }
    return (
        <div className="popup-container">
            <div className="popup-body">
                <h1>{text}</h1>

                <div>
                    <p className="popup-text">
                        <b>Clinic:</b> Melbourne City <br /> Medical Centre
                    </p>
                    <p className="popup-text">
                    <b>Dotor:</b> Dr. Denis Melb
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