import React, {useState} from 'react'
import { UsersStyle } from './UsersStyle'
import SearchInput from '../../components/searchinput/SerchInput'
import BaseUsers from './usersModal/BaseUsers';

export default function Foydalanuvchilar() {


  const [isModalVisible , setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  

  return (
    <UsersStyle>
        <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1"
            ></div>
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
      <BaseUsers
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </UsersStyle>
  )
}
