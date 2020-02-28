import React, { useState, useEffect } from "react";
import data from "./services/mockContacts";
import messagesData from "./services/mockMessages";
import "./styles/global.css";
import Contacts from "./components/Contacts";
import ContactInfo from "./components/ContactInfo";
import Chat from "./components/Chat";

function App() {
  // hooks
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  // effect hook
  useEffect(() => {
    setContacts(data);
    setMessages(messagesData);
  }, []);

  return (
    <div className="App">
      <Contacts data={contacts} />
      <Chat data={messages} />
      <ContactInfo />
    </div>
  );
}

export default App;
