import * as React from 'react';
import arrow from './arrow.svg';
import { useNavigate } from "react-router-dom";
import "./style.css";

function SelectDate() {
  // hook change location
  const navigate = useNavigate();
  // change route
  const routeChange = () => {
    navigate("/SelectTime");
  }
  const back = () => {
    // goes to Add Service
    navigate("/GpDoctor");
  }
  return (
    <div className="boooking-select-date">
      <div className="div">
        <h1 className="text-wrapper">Date</h1>
        <div className="overlap-group">
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-2">8th July</div>
            </div>
          </div>
          <div className="overlap">
            <div className="text-wrapper-3">12th July</div>
          </div>
          <div className="overlap-2" onClick={routeChange}>
            <div className="text-wrapper-3">14th July</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-4">15th July</div>
          </div>
          <div className="overlap-4">
            <div className="group-2" />
            <div className="text-wrapper-5">11th July</div>
          </div>
          <div className="text-wrapper-6">Dr. Denis Melb</div>
        </div>
        <p className="p">Select a date for appointment <br/> at Melbourne City Medical Centre</p>
        <button className="arrow-overlap" onClick={back}>
          <img src={arrow} className="arrow" alt="arrow" />
        </button>
      </div>
    </div>
  );
};
export default SelectDate