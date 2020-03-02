import React from "react";
import "./style.css";
import iconGalery from "../../assets/img/galery.svg";
import iconPaper from "../../assets/img/papers.svg";
import iconMicro from "../../assets/img/microphone.svg";
import iconSendArrow from "../../assets/img/sendArrow.svg";
export default function Footer() {
  return (
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
  );
}
