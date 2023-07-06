import React from "react";
import chat from './chat.svg';

function Chatbot() {
    return (
        <div className="box">
            <div className="ellipse-wrapper">

                <div className="ellipse" />
                <img src={chat} className="chat" alt="chat" />
            </div>
        </div>
    )
}


export default Chatbot