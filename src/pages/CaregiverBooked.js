import React from "react";
import "./CaregiverBooked.css";
import arrow from './arrow.svg';
import adam from '../icon/group-7.png';
import { useNavigate } from "react-router-dom";

function CaregiverBooked(){

    const navigate = useNavigate();

    const HomeService = () => {
        // goes to Add Service
        navigate("/HomeServices");
    }

  return (
    <div className="home-caregivers">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img className="group" alt="Group" src={adam}/>
          <div className="ellipse" onClick={HomeService}/>
          <img className="arrow" alt="Arrow" src={arrow} onClick={HomeService} />
        </div>
        <h1 className="text-wrapper">Max Adams</h1>
        <div className="group-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-2">Booked!</div>
          </div>
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle-2" />
        </div>
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="text-wrapper-3">Approx. 50 minutes wait</div>
        <div className="group-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-4">Call Max</div>
              <img className="call" alt="Call" src="call-fill0-wght400-grad0-opsz48-1.svg" />
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-5">Cancel Booking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverBooked;