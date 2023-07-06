import React from "react";
import "./HomeServices.css";
import arrow from './arrow.svg';
import vectorImg2 from '../icon/vector-1.svg';
import vectorImg from '../icon/vector.svg';
import fav from "../icon/favorite-fill0-wght400-grad0-opsz48-1.png";
import { useNavigate } from "react-router-dom";

function HomeServices() {
        // hook change location
        const navigate = useNavigate();
        // change route
        const caregiver= () => {
            // goes to Add Service
            navigate("/Caregivers");
        }

        const maxadams= () => {
            // goes to Add Service
            navigate("/Maxadams");
        }


  return (
    <div className="home-caregivers-list">
      <div className="div">
        <h1 className="text-wrapper">Home Services</h1>
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="div-wrapper">
                    <div className="group-wrapper">
                      <div className="group-2" />
                    </div>
                  </div>
                  <div className="group-3">
                    <div className="text-wrapper-2">8.5/10</div>
                    <img className="vector" alt="Vector" src={vectorImg2} />
                  </div>
                </div>
              </div>
              <div className="group-4">
                <div className="text-wrapper-3">Alice Springs</div>
                <p className="p">
                  Hello! I am a passionate and dedicated caregiver committed to making a positive impact on...
                </p>
              </div>
              <img className="img" alt="Vector" src={vectorImg} />
              <div className="text-wrapper-4">15 mins away...</div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="div-wrapper">
                      <div className="group-wrapper">
                        <div className="group-5" />
                      </div>
                    </div>
                    <div className="group-3">
                      <div className="text-wrapper-2">7.9/10</div>
                      <img className="vector" alt="Vector" src={vectorImg2} />
                    </div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="text-wrapper-3">Olivia Chen</div>
                  <p className="p">
                    Hello! I&#39;m Olivia Thompson, a dedicated and compassionate nurse who strives to provide...
                  </p>
                </div>
                <img className="img" alt="Vector" src={vectorImg} />
                <div className="text-wrapper-4">33 mins away...</div>
              </div>
            </div>
            <img className="favorite" alt="Favorite" src= {fav}/>
          </div>
          <div className="overlap-group-wrapper" onClick={maxadams}>
            <div className="overlap-group">
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="div-wrapper">
                    <div className="group-wrapper">
                      <div className="group-6" />
                    </div>
                  </div>
                  <div className="group-3">
                    <div className="text-wrapper-2">8.2/10</div>
                    <img className="vector" alt="Vector" src={vectorImg2} />
                  </div>
                </div>
              </div>
              <div className="group-4">
                <div className="text-wrapper-3">Max Adams</div>
                <p className="p">
                  Greetings! My name is Max Adams, and I am a compassionate, skilled caregiver dedicated to providing...
                </p>
              </div>
              <img className="vector-2" alt="Vector" src={vectorImg} />
              <div className="text-wrapper-4">55 mins away...</div>
            </div>
          </div>
        </div>
        <p className="text-wrapper-5">Click caregiver you wish to book</p>
        <div className="arrow-wrapper" onClick={caregiver}>
          <img className="arrow" alt="Arrow" src={arrow} />
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
