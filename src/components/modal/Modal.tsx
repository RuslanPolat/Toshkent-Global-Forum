import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IContext, MyContext } from "../../context/Context";
import Button from "../button/Button";
import MyButton from "../button/MyButton";
import Input from "../input/Input";
// import "./assets/style/style.css";
import Select from "../select/Select";
import BaseModalWrapper from "./BaseModalWrapper";

interface ModalProps {
  onBackdropClick: () => void;
  editInfo: any;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick, editInfo }) => {
  const { postPosit } = useContext<IContext>(MyContext);
  const [name, setName] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  useEffect(() => {
    // console.log(editInfo()[0]?.name?.uz);

    if (editInfo()[0]?._id) {
      setName({
        uz: editInfo()[0]?.name?.uz,
        ru: editInfo()[0]?.name?.ru,
        en: editInfo()[0]?.name?.en,
      });
    }
  }, []);

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit() {
    if (postPosit) {
      postPosit(name);
    }
    setName({
      uz: "",
      ru: "",
      en: "",
    });
    // onBackdropClick()

  }

  return ReactDOM.createPortal( 
    <div >
      <Styledapp>
        <form>
          <h1>Add Position</h1>
          <Input
            value={name.uz}
            placeholder="Name in uz*"
            onChange={changeName}
            name="uz"
          />
          <Input
            value={name.ru}
            placeholder="Name in ru*"
            onChange={changeName}
            name="ru"
          />
          <Input
            value={name.en}
            placeholder="Name in en*"
            onChange={changeName}
            name="en"
          />
          <div className="button">
            {/* <MyButton stylee={false} onClick={() => onBackdropClick!} click={handleSubmit}>
              Click
            </MyButton>
            <MyButton stylee={true} onClick={() => onBackdropClick} click={() => onBackdropClick}>
              Close
            </MyButton> */}
            <Button click={() => {handleSubmit(); onBackdropClick()}} pe={false} typee="button">
              Save 
            </Button>
            <Button typee="submit" pe={true}>
              Cancel
            </Button>
          </div>
        </form>
      </Styledapp>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;

const Styledapp = styled.div`
  width: max-content;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50% 50%);
  position: fixed;
  z-index: 3;
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
  .button {
    align-items: center;
    display: flex;
    /* justify-content: space-between; */
    gap: 39px;
    text-align: center;
  }
`;
