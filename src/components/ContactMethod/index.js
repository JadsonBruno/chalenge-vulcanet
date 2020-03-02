import React from "react";
import "./style.css";
import calendar from "../../assets/img/calendar.svg";
import envelope from "../../assets/img/envelope.svg";
import skype from "../../assets/img/skype.svg";
import telephone from "../../assets/img/telephone.svg";
import comment from "../../assets/img/comment.svg";
import whats from "../../assets/img/whats.svg";

export default function ContactMethod({ show, setShow }) {
  return (
    <aside className="side-bar">
      <ul className="method-chat">
        <li className="method-chat-item show">
          <div className={`${show ? "move" : ""}`}>
            <button
              className={`burger-button ${show ? "translate" : ""}`}
              onClick={() => setShow(!show)}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </li>
        <li className="method-chat-item">
          <div className="calendar">
            <img src={calendar} alt="" />
          </div>
        </li>
        <li className="method-chat-item whats-bg">
          <div className="whats">
            <img src={whats} alt="" />
          </div>
          <span className="count">2</span>
        </li>
        <li className="method-chat-item email-bg">
          <div className="email">
            <img src={envelope} alt="" />
          </div>
          <span className="count">1</span>
        </li>
        <li className="method-chat-item">
          <div className="skype">
            <img src={skype} alt="" />
          </div>
        </li>
        <li className="method-chat-item">
          <div className="phone">
            <img src={telephone} alt="" />
          </div>
        </li>
        <li className="method-chat-item">
          <div className="comment">
            <img src={comment} alt="" />
          </div>
        </li>
      </ul>
    </aside>
  );
}
