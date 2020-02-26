import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEnvelope,
  faPhoneAlt,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";

export default function ContactMethod() {
  return (
    <aside className="side-bar">
      <ul className="method-chat">
        <li className="method-chat-item">
          <div className="calendar">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
        </li>
        <li className="method-chat-item whats-bg">
          <div className="whats">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
          </div>
        </li>
        <li className="method-chat-item">
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </li>
        <li className="method-chat-item">
          <div className="skype">
            <FontAwesomeIcon icon={["fab", "skype"]} />
          </div>
        </li>
        <li className="method-chat-item">
          <div className="phone">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
        </li>
        <li className="method-chat-item">
          <div className="comment">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
        </li>
      </ul>
    </aside>
  );
}
