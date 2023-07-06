import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React from "react";
import chat from './icon/question_answer_black_24dp_1.png';
import celebration from './icon/celebration_black_24dp_1.png';
import calenderBooking from './icon/edit_calendar_black_24dp_1.png';
import caregiverIcon from './icon/person_black_24dp_1.png';
import medication from './icon/vaccines_black_24dp_1.png';



Amplify.configure(awsExports);
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        {/*Authentication*/}
        <Authenticator>
        {({ signOut, user }) => (
          <main>
          
          <div className="home-page">
          <button onClick={signOut}>Sign out</button>
          <div className="div">
            <div className="group">
              <div className="div-2">
                <img src={medication} className="img" alt="Vaccines black" />
              </div>
              <div className="text-wrapper">Medication</div>
            </div>
            <div className="overlap">
              <img className="img-2" alt="Person black" src={caregiverIcon} />
            </div>
            <div className="overlap-group">
              <div className="div-2" />
              <img className="img" alt="Edit calendar black" src={calenderBooking} />
            </div>
            <div className="text-wrapper-2">Home Caregiver</div>
            <div className="text-wrapper-3">Bookings</div>
            <div className="question-answer-wrapper">
              <img src ={chat} className="question-answer" alt="Question answer"  />
            </div>
            <div className="text-wrapper-4">Chat</div>
            <p className="what-would-you-like">
              What would you like <br />
              to do today?
            </p>
            <div className="group-2">
              <div className="div-2">
                <img className="img-2" alt="Celebration black" src={celebration} />
              </div>
              <div className="text-wrapper-5">Events</div>
            </div>
          </div>
        </div>

              
           </main>
        )}
      </Authenticator>
          </header>
    </div>
  );
}

export default App;
