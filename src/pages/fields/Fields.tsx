import React, { useState, useContext, useEffect } from "react";
import BaseModalWrapper from "../../components/modal/BaseModalWrapper";

//
import SearchInput from "../../components/searchinput/SerchInput";
import { UsersStyled } from "../../components/usermain/UsersStyled";
import { FieldsStyle } from "./FieldsStyle";

import {IContext, IPosit, MyContext, IDate } from "../../context/Context"

export default function Fields() {

  const { getField, userPosit } = useContext<IContext>(MyContext)

  useEffect(() => {
    if(getField) {
      getField();
    }
}, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <FieldsStyle>
       <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
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
      <section className="user--card">
        {userPosit?.data?.map((i: IDate, idx: number) => (
          <div key={idx}>
            {/* <div className="first--div">
              <div className="tag--div">
                <h2>4 Users selected</h2>
              </div>
              <div className="icon--div">
                <div className="icon icon-icon1"></div>
                <div onClick={toggleModal} className="icon icon-add"></div>
              </div>
            </div>
            <div className="second--div">
              <SearchInput />
            </div> */}
            <div className="grid--div">
              <div className="card--div">
                {/* <div className="expand">
                  <input type="checkbox" />
                  <p>Nomi</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                <div className="expand">
                  <input type="checkbox" />
                  <p id="p">{i?.name.uz}</p>
                </div>
              </div>
              <div className="card--div">
                {/* <div className="expand">
                  <p>Sector</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                <div className="expand">
                  <p>{i?.__v}</p>
                </div>
              </div>
              <div>
                {/* <div className="expand">
                  <p>Qator</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                <div className="expand"></div>
                <p>{i?.name.ru}</p>
              </div>
              <div className="card--div">
                {/* <div className="expand">
                  <p>O'rindiq</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
              <div className="card--div">
                {/* <div className="expand">
                  <p>Band qilingan</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
              <div className="card--div">
                {/* <div className="expand">
                  <p>Mijoz ismi</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
              <div className="card--div">
                {/* <div className="expand">
                  <p>Mijoz raqami</p>
                  <span>
                    <div className="icon icon-expand"></div>
                  </span>
                </div> */}
                {/* <div className="expand">
                  <span id="span">Banned</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
        
      </section>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </FieldsStyle>
  );
}
