import React, { useState, useContext, useEffect } from "react";
import { TicketStyled } from "./TicketStyled";
import SearchInput from "../../components/searchinput/SerchInput";
import BaseModalWrapper from "../../components/modal/BaseModalWrapper";
import TicketModal from "./ticketModal/TicketModal";
import BaseTicket from "./ticketModal/BaseTicket";



export default function Ticket() {

  const [isModalVisible , setIsModalVisible] = useState(false);

const toggleModal = () => {
  setIsModalVisible((wasModalVisible) => !wasModalVisible);
};
const [checked, setChecked] = useState<boolean>(false)
const handleChange = () =>{
  setChecked(!checked)
}


  return (
    <TicketStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1"
            ></div>
            <div onClick={toggleModal} className="icon icon-add"></div>
            <div className="icon icon-icon2"></div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput />
        </div>
        <div className="grid--div">
          <div>
            <div className="expand">
              <input type="checkbox" onClick={handleChange} checked={checked}/>
              <p>Full name</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <BaseTicket
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        
      />
    </TicketStyled>
  );
}
