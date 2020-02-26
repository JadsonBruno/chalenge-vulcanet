import React, { useState, useEffect } from "react";
import data from "./services/mockAPI";
import messagesData from "./services/mockMessages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./styles/global.css";
import Contact from "./components/Contact";
import InfoContact from "./components/InfoContact";
import Chat from "./components/Chat";

function App() {
  library.add(fab);
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setContacts(data);
    setMessages(messagesData);
  }, [messages]);

  return (
    <div className="App">
      <Contact data={contacts} number={messages} />
      <Chat data={messages} />
      <InfoContact />
    </div>
  );
}

export default App;
