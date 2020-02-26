import React from "react";
import "./style.css";
import Message from "../Message";

import iconGalery from "../../assets/img/galery.svg";
import iconPaper from "../../assets/img/papers.svg";
import iconMicro from "../../assets/img/microphone.svg";
import iconSendArrow from "../../assets/img/sendArrow.svg";
import ContactMethod from "../ContacMethod";
import ChatHeader from "../ChatHeader";

export default function Chat({ data }) {
  return (
    <main className="chat">
      <ContactMethod />
      <div className="chat-element">
        {/* transformar em componente */}
        <ChatHeader />
        <div className="chat-content">
          <div className="date-att-bg">
            <span className="line-1"></span>
            <p className="date-att">
              Atendimento finalizado em
              <span className="date-end">07/10/2019</span>
            </p>
            <span className="line-2"></span>
          </div>
          {data.map(message => (
            <Message
              content={message.content}
              author={message.author}
              key={message.id}
              date={message.date}
              logged={message.logged}
            />
          ))}
        </div>
        <div className="text-input">
          <input type="text" placeholder="Digite uma mensagem..." />
          <a href="/" className="icon-input">
            <img src={iconGalery} alt="" />
          </a>
          <a href="/" className="icon-input">
            <img src={iconPaper} alt="" />
          </a>
          <a href="/" className="icon-input">
            <img src={iconMicro} alt="" />
          </a>
          <a href="/" className="icon-input">
            <img src={iconSendArrow} alt="" className="icon-input" />
          </a>
        </div>
      </div>
    </main>
  );
}
