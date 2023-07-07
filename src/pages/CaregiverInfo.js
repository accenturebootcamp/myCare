import React from "react";
import "./Maxadams.css";
import { useNavigate } from "react-router-dom";
import adam from "../icon/ellipse-adam.png";
import pinpoint from "../icon/vector.svg";
import arrow from './arrow.svg';
import HomeServices from "./HomeServices";
import CaregiverBooked from "./CaregiverBooked";

function CaregiverInfo() {
  // hook change location
  const navigate = useNavigate();
  // change route
  const homeroute = () => {

      navigate("/");
  }

  const homeservice= () => {
      // goes to Add Service
      navigate("/HomeServices");
  }

  const bookconfirm= () => {
    // goes to Add Service
    navigate("/CaregiverBooked");
}

  
  return (
    <div className="home-caregiversInfo">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img className="ellipse" alt="Ellipse" src={adam} />
          <div className="ellipse-2" onClick={homeservice}/>
          <img className="arrow" alt="Arrow" src={arrow} onClick={homeservice} />
        </div>
        <h1 className="text-wrapper">Max Adams</h1>
        <div className="overlap-group">
          <div className="rectangle-2" onClick={bookconfirm}/>
          <div className="text-wrapper-2" onClick={bookconfirm}>Book Now</div>
          <p className="greetings-my-name-is">
            <span className="span">
              Greetings! My name is Max and I am a compassionate and skilled caregiver dedicated to providing
              exceptional care to my patients.
              <br />
            </span>
            <span className="text-wrapper-3">
              <br />
            </span>
            <span className="text-wrapper-4">Experience: </span>
            <span className="span">
              5 years <br />
            </span>
            <span className="text-wrapper-5">
              <br />
            </span>
            <span className="text-wrapper-4">
              Specializations: <br />
            </span>
            <span className="span">
              <li>ElderlyCare</li>
              <li>Medications</li>
              <li>Cleaning</li>
            </span>
          </p>
        </div>
        <div className="overlap-2">
          <img className="vector" alt="Vector" src={pinpoint} />
          <div className="text-wrapper-6">55 minutes away</div>
        </div>
      </div>
    </div>
  );
}

export default CaregiverInfo;
