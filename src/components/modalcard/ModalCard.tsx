import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import Button from '../button/Button';
import MyButton from "../button/MyButton";
import Input from '../input/Input';
// import "./assets/style/style.css";



interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}



export default function ModalCard() {
  return (
    <Styledapp>
      <form action="">
        <h1>Add user</h1>
        {/* <Input placeholder="Full name *" />
        <Input placeholder="Phone number *" /> */}
        {/* <Input placeholder="Brand" />
        <Input placeholder="Employee count" /> */}
        <div className="buton">
          {/* <Button  pe={false} typee="button">
            Save
          </Button>
          <Button typee="button" pe={true}>
            Cancel
          </Button> */}
        </div>
      </form>
    </Styledapp>
  );
}
const Styledapp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  form {
    .buton {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    padding: 33px 23px;
    background: #ffffff;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      margin-bottom: 39px;
    }
  }
`;
