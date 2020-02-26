import React from "react";
import "./style.css";
import ContactElement from "../ContactElement";
import iconAdd from "../../assets/img/add.svg";
import iconArrow from "../../assets/img/arrow.svg";

export default function Contact({ data }) {
  return (
    <aside className="side-contact">
      <div className="user">
        <div className="user-info">
          <img src="" alt="" className="img" />
          <p>
            Carlos Corrêa <span>PREMIUN PEÇAS</span>
          </p>
        </div>
        <div className="arrow">
          <img src={iconArrow} alt="" />
        </div>
      </div>
      <input type="text" />
      <div className="handle-chat">
        <div className="status">
          <span>EM ANDAMENTO</span>
          <div className="arrow">
            <img src={iconArrow} alt="" />
          </div>
        </div>
        <button>
          <img src={iconAdd} alt="" />
        </button>
      </div>
      <ul className="contacts">
        {data.map(contact => (
          <ContactElement key={contact.id} contact={contact} />
        ))}
      </ul>
    </aside>
  );
}
