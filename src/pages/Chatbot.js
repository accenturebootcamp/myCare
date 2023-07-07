import React from "react";
import chat from './chat.svg';
import heart from '../icon/Frame-9.png';

function Chatbot() {
    return (
        <div>
            <div className="circle">
            <img className="heart" alt="Frame" src={heart} />

                <img src={chat} className="chat" alt="chat" />
            </div>
        </div>


    )
}


export default Chatbot