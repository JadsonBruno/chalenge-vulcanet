import React from "react";
import "./style.css";
import skype from "../../assets/img/skype-info.svg";
import envelope from "../../assets/img/email-info.svg";
import skypeLg from "../../assets/img/skype-info-large.svg";
import user from "../../assets/img/avatar-user.png";
import whatsIcon from "../../assets/img/whatsapp.svg";
import whatsLgIcon from "../../assets/img/whatsapp-lg.svg";
import pen from "../../assets/img/pen.svg";
import trash from "../../assets/img/trash.svg";

export default function ContactInfo({ showInfo }) {
  return (
    <aside
      className={`side-info-contact ${!showInfo ? "showContactInfo" : ""}`}
    >
      <div className="info-contact-2">
        <img src={user} alt="" className="img-info" />
        <div className="text-contact">
          João da Silva <span>ACME INC</span>
        </div>
      </div>
      <div className="btns">
        <button className="btnEdit">
          <img src={pen} alt="" />
        </button>
        <button className="btnTrash">
          <img src={trash} alt="" />
        </button>
      </div>
      <div className="latest-chat">
        <span className="first-span">ÚLTIMAS CONVERSAS</span>
        <ul className="chat-date">
          <li>
            <div className="date-img">
              <img src={whatsIcon} alt="" />
            </div>
            25/09/2019 (10 dias atrás)
          </li>
          <li>
            <div className="date-img">
              <img src={whatsIcon} alt="" />
            </div>
            15/09/2019 (20 dias atrás)
          </li>
          <li>
            <div className="date-img">
              <img src={skype} alt="" />
            </div>
            15/06/2019 (100 dias atrás)
          </li>
        </ul>
      </div>
      <div className="comments">
        <span>OBSERVAÇÕES:</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, lacus,
          et potenti nisl viverra a, feugiat. Eget ultrices elit faucibus arcu
          volutpat vulputate.
        </p>
      </div>
      <div className="contact-info">
        <ul className="list-info-contact">
          <li>
            <div className="date-img">
              <img src={whatsLgIcon} alt="" />
            </div>
            <div className="contact-method">
              <span>WHATSAPP</span>
              <span>55 (19) 1234-5678</span>
            </div>
          </li>
          <li>
            <div className="date-img email">
              <img src={envelope} alt="" />
            </div>
            <div className="contact-method">
              <span>EMAIL</span>
              <span>joao@silva.com.br</span>
            </div>
          </li>
          <li>
            <div className="date-img">
              <img src={skypeLg} alt="" />
            </div>
            <div className="contact-method">
              <span>SKYPE</span>
              <span>@joao_silva</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
