import React from "react";
import "./style.css";

export default function ContactElement({ contact }) {
  return (
    <li className="contact-element">
      <div className="info-contact">
        <img src={contact.avatar} alt="" className="img" />
        <div className="text-contact">
          {contact.name} <span>{contact.company}</span>
        </div>
      </div>
      {contact.messages > 0 && (
        <div className="count-msg">{contact.messages}</div>
      )}
    </li>
  );
}
