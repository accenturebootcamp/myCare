import React from "react";
import "./Maxadams.css";
import adam from '../icon/adam.png';
import arrow from './arrow.svg';
import vectorImg from '../icon/vector.svg';
import { useNavigate } from "react-router-dom";

function Maxadams() {
    const navigate = useNavigate();
        // change route
    const HomeService = () => {
        // goes to Add Service
        navigate("/HomeServices");
        }

    const booked = () => {
        // goes to Add Service
        navigate("/CaregiverBooked");
    }

  return (
   
       
    <div className="home-caregivers">
    <div className="div">
      <div className="overlap">
        <div className="rectangle" />
        <img className="ellipse" alt="Ellipse" src={adam} />
        <div className="ellipse-2" />
        <img className="arrow" alt="Arrow" src={arrow} />
      </div>
      <h1 className="text-wrapper">Max Adams</h1>
      <div className="overlap-group">
        <div className="rectangle-2" />
        <div className="text-wrapper-2">Book Now</div>
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
            <li>Elderly Care</li>
            <li>Medication</li>
            <li>Cleaning</li>

          </span>
        </p>
      </div>
      <div className="overlap-2">
        <img className="vector" alt="Vector" src="/img/vector.svg" />
        <div className="text-wrapper-6">55 minutes away</div>
      </div>
    </div>
  </div>
  );
};

export default Maxadams;