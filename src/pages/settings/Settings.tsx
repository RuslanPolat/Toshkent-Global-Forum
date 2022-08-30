import React, {useState} from "react";
import { SettingsStyle } from "./SettingsStyle";
import SearchInput from "../../components/searchinput/SerchInput";
import BaseSettings from "./settingsModal/BaseSettings";
import { listenerCount } from "process";

export default function Settings() {


  const [isModalVisible , setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  


  return (
    <SettingsStyle>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2></h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1"></div>
            <div onClick={toggleModal} className="icon icon-add"></div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput />
        </div>
        <div className="grid--div">
          <div>
            <div className="expand">
              <input type="checkbox" />
              <p>Full name</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <BaseSettings
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </SettingsStyle>
    
  );
}
