import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IContext, MyContext } from "../../context/Context";
import Button from "../button/Button";
import MyButton from "../button/MyButton";
import Input from "../input/Input";
// import "./assets/style/style.css";
import Select from "../select/Select";

interface ModalProps {
  onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick }) => {
  const { postPosit } = useContext<IContext>(MyContext);
  const [name, setName] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit() {
    if (postPosit) {
      postPosit(name);
    }
  }

  return ReactDOM.createPortal(
    <div>
      <Styledapp>
        <form>
          <h1>Add field</h1>
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
          <div className="buton">
            <MyButton click={handleSubmit}>CLick</MyButton>
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
