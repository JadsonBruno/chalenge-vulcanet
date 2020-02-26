import React, { useState, useEffect } from "react";
import data from "./services/mockAPI";
import "font-awesome/css/font-awesome.css";
import "./styles/global.css";
import Contact from "./components/Contact";
import InfoContact from "./components/InfoContact";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(data);
  }, []);

  return (
    <>
      <div className="App">
        <Contact data={contacts} />
        <InfoContact />
      </div>
    </>
  );
}

export default App;
