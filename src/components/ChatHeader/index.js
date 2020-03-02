import React from "react";
import "./style.css";
import searchIcon from "../../assets/img/searchIcon2.svg";

export default function ChatHeader({
  showContactInfo,
  setShowContactInfo,
  showContacts
}) {
  return (
    <div className={`header ${showContactInfo || showContacts ? "grow" : ""}`}>
      <div className="input">
        <input type="text" />
        <img src={searchIcon} alt="" />
      </div>
      <div className="btn-actions">
        <div className="btns-responsive">
          <button className="alt">TRANSFERIR</button>
          <button className="solid">FINALIZAR ATENDIMENTO</button>
        </div>
      </div>
      <button
        className={`burguer-button-info showContact ${
          showContactInfo ? "translate" : ""
        }`}
        onClick={() => setShowContactInfo(!showContactInfo)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}
