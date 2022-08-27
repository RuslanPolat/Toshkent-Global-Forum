import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IContext, MyContext } from "../../../context/Context";
import Button from "../../../components/button/Button";
// import Button from "../button/Button";
import MyButton from "../../../components/button/MyButton";
import Input from "../../../components/input/Input";
// import "./assets/style/style.css";
// import Select from "../select/Select";

interface ModalProps {
  onBackdropClick: () => void;
  editInfo: any;
  user: any;
}

const FieldModal: React.FC<ModalProps> = ({ onBackdropClick, editInfo, user }) => {
  const { postField, putField } = useContext<IContext>(MyContext);
  const [name, setName] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  useEffect(() => {
    let index:number = 0
    for(let i=0; i<editInfo().length; i++){
      if(editInfo()[i]!==false)
      index = i;
    }
    
    if (editInfo()[index]?._id) {
      setName({
        uz: editInfo()[index]?.name?.uz,
        ru: editInfo()[index]?.name?.ru,
        en: editInfo()[index]?.name?.en, 
      });
    }
  }, []);

  function changeNamee(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value }));
  }



  function handleeSubmit() {
      if(user?.name.uz === "") {
        if (postField) {
          postField(name);
        }
      }
      else {
        const _id = user?._id;
        if (putField) {
          putField({_id, name});
        }
      }
  }

  return ReactDOM.createPortal(
    <div>
      <Styledapp>
        <form>
          <h1>Add Field</h1>
          <Input
            value={name.uz}
            placeholder="Name in uz*"
            onChange={changeNamee}
            name="uz"
            setName={setName}
          />
          <Input
            value={name.ru}
            placeholder="Name in ru*"
            onChange={changeNamee}
            name="ru"
            setName={setName}
          />
          <Input
            value={name.en}
            placeholder="Name in en*"
            onChange={changeNamee}
            name="en"
            setName={setName}
          />

          <div className="button">
            <Button
              click={() => {
                handleeSubmit();
                onBackdropClick();
                console.log(name);
              }}
              pe={false}
              typee="button"
            >
              Save
            </Button>
            <Button typee="button" click={() => onBackdropClick()} pe={true}>
              Cancel
            </Button>
          </div>
        </form>
      </Styledapp>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default FieldModal;

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
