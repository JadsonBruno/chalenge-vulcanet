import React from "react";
import "./style.css";
import Message from "../Message";
import ContactMethod from "../ContactMethod";
import ChatHeader from "../ChatHeader";
import Footer from "../Footer";

export default function Chat({
  data,
  showContacts,
  setShowContacts,
  showContactInfo,
  setShowContactInfo
}) {
  return (
    <main className="chat">
      <ContactMethod show={showContacts} setShow={setShowContacts} />
      <div className="chat-element">
        <ChatHeader
          showContacts={showContacts}
          showContactInfo={showContactInfo}
          setShowContactInfo={setShowContactInfo}
        />
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
              avatar={message.avatar}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
