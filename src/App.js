import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./styles/global.css";
import Contacts from "./components/Contacts";
import ContactInfo from "./components/ContactInfo";
import Chat from "./components/Chat";

function App() {
  // hooks
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showContactList, setShowContactList] = useState(false);
  // effect hook
  useEffect(() => {
    async function getMessages() {
      const { data } = await api.get("/messages/");
      setMessages(data);
    }

    async function getContacts() {
      const { data } = await api.get("/contacts");
      setContacts(data);
    }

    getContacts();
    getMessages();
  }, []);

  return (
    <div className="App">
      <Contacts data={contacts} show={showContactList} />
      <Chat
        data={messages}
        showContacts={showContactList}
        setShowContacts={setShowContactList}
        showContactInfo={showContactInfo}
        setShowContactInfo={setShowContactInfo}
      />
      <ContactInfo showInfo={showContactInfo} />
    </div>
  );
}

export default App;
