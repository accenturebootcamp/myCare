import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React from "react";
import chat from '../icon/question_answer_black_24dp_1.png';
import celebration from '../icon/celebration_black_24dp_1.png';
import calenderBooking from '../icon/edit_calendar_black_24dp_1.png';
import caregiverIcon from '../icon/person_black_24dp_1.png';
import medication from '../icon/vaccines_black_24dp_1.png';
import heart from '../icon/Frame-9.png';
import { useNavigate } from "react-router-dom";


Amplify.configure(awsExports);
function Home() {
    // hook change location
    const navigate = useNavigate();
    // change route
    const booking = () => {
        // goes to Add Service
        navigate("/Services");
    }

    const caregivers = () => {
        // goes to Add Service
        navigate("/Caregivers");
    }


    const events = () => {
        // goes to Add Service
        navigate("/EventLocation");
    }

    return (


      
            <div className="home-page">
              <div className="div">               
                <div className="group">
                    <button onClick={booking}className="overlap-group" >
                    <img className="img" alt="Vaccines black" src={medication} />
                    </button>
                    <div className="text-wrapper">Medication</div>
                </div>

                <div className="overlap">
                    <button onClick={caregivers}className="overlap-group" >
                        
                    <img className="img-2" alt="Person black" src={caregiverIcon} />
                        
                    </button>
                </div>
                
                <div className="edit-calendar-black-wrapper">
                    <button onClick={booking}className="overlap-group" >
                        <img className="img" alt="Edit calendar black" src={calenderBooking} />
                    </button>
                </div>

                <div className="text-wrapper-2">Caregivers</div>
                <div className="text-wrapper-3">Bookings</div>

                <div className="question-answer-wrapper">
                    <button onClick={booking}className="chatbotButton" >
                        <img className="question-answer" alt="Question answer" src={chat} />
                    </button>
                </div>
        
                  
       

                <div className="text-wrapper-4">Chat</div>
                <h1 className="h-1">Hi, Cindy!</h1>

                <p className="what-would-you-like">
                  What would you like <br />
                  to do today?
                </p>

                <div className="group-2">
                    <button onClick={booking}className="overlap-group" >
                    <img className="img-2" alt="Celebration black" src={celebration} />
                    </button>
                    <div className="text-wrapper-5">Events</div>
                </div>

                <div className="box">
                        <img className="frame" alt="Frame" src={heart} />
                </div>

              </div>
            </div>
          );
}

export default Home;
