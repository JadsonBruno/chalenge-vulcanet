import React from "react";
import iconCheck from "../../assets/img/check.svg";
import "./style.css";

export default function Message({ content, author, logged, date, avatar }) {
  return (
    <>
      {!logged ? (
        <div className="message">
          <div className="contact">
            <img src={avatar} alt="" className="img-user" />
            <span className="user-name">
              {author} - <span>{date}</span>
            </span>
            <div className="check">
              <img src={iconCheck} alt="" />
            </div>
          </div>
          <div className="message-content-bg">
            <span className="tooltip"></span>
            <div className="message-content">
              <p className="text">{content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="message-logged-user">
          <div className="contact">
            <img src={avatar} alt="" className="img-user" />
            <span className="user-name">
              {author} - <span>{date}</span>
            </span>
            <div className="check">
              <img src={iconCheck} alt="" />
            </div>
          </div>
          <div className="message-content-bg">
            <span className="tooltip"></span>
            <div className="message-content">
              <p className="text">{content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
