import React from "react";
import iconCheck from "../../assets/img/check.svg";
import "./style.css";
import user1 from "../../assets/img/avatar-user.png";
import user2 from "../../assets/img/avatar-user2.png";

export default function Message({ content, author, logged, date }) {
  return (
    <>
      {!logged ? (
        <div className="message">
          <div className="contact">
            <img src={user1} alt="" className="img-user" />
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
            <img src={user2} alt="" className="img-user" />
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
