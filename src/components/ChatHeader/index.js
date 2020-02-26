import React from "react";
import "./style.css";

export default function ChatHeader() {
  return (
    <div className="header">
      <input type="text" />
      <div className="btn-actions">
        <button className="alt">TRANSFERIR</button>
        <button className="solid">FINALIZAR ATENDIMENTO</button>
      </div>
    </div>
  );
}
