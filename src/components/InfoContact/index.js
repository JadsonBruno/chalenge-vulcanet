import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenAlt,
  faTrashAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function() {
  return (
    <aside className="side-info-contact">
      <div className="info-contact-2">
        <img src="" alt="" className="img-info" />
        <div className="text-contact">
          João da Silva <span>ACME INC</span>
        </div>
      </div>
      <div className="btns">
        <button className="btnEdit">
          <FontAwesomeIcon icon={faPenAlt} />
        </button>
        <button className="btnTrash">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
      <div className="latest-chat">
        <span className="first-span">ÚLTIMAS CONVERSAS</span>
        <ul className="chat-date">
          <li>
            <div className="date-img">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </div>
            25/09/2019 (10 dias atrás)
          </li>
          <li>
            <div className="date-img">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </div>
            15/09/2019 (20 dias atrás)
          </li>
          <li>
            <div className="date-img">
              <FontAwesomeIcon icon={["fab", "skype"]} />
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
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </div>
            <div className="contact-method">
              <span>WHATSAPP</span>
              <span>55 (19) 1234-5678</span>
            </div>
          </li>
          <li>
            <div className="date-img email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-method">
              <span>EMAIL</span>
              <span>joao@silva.com.br</span>
            </div>
          </li>
          <li>
            <div className="date-img">
              <FontAwesomeIcon icon={["fab", "skype"]} />
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
