import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IContext, MyContext } from "../../../context/Context";
import Button from "../../../components/button/Button";
// import Button from "../button/Button";
import MyButton from "../../../components/button/MyButton";
import Input from "../../../components/input/Input";
// import "./assets/style/style.css";
import Selects from "../../../components/select/Selects";

interface ModalProps {
  onBackdropClick: () => void;
  user: any;
}

export interface IModal {
  id: number;
  name: string;
}

const arr: IModal[] = [
  {
    id: 1,
    name: "Activity",
  },
  {
    id: 2,
    name: "Speaker",
  },
];

const AgendaModal: React.FC<ModalProps> = ({ onBackdropClick, user, }) => {
  const { postAgenda, userSpicers, putAgenda } =
    useContext<IContext>(MyContext);
  const [name, setName] = useState({
    name: {
      en: "",
      ru: "",
      uz: "",
    },
    type: "activity",
    endTime: "",
    startTime: "",
  });


  function changeNamee(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p: any) => ({
      ...p,
      name: { en: p.name.en, ru: p.name.ru, uz: p.name.uz, [name]: value },
    }));
  }

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value }));
  }

  function handleeSubmit() {
    // if (user?.name.name === "") {
      if (postAgenda) {
        postAgenda(name);
    } else {
      const _id = user?._id;
      if (putAgenda) {
        putAgenda({ _id, name });
      }
    }
  }

  useEffect(() => {
    if (!user._id) return;
        setName(user.name.name)
    setName(user.name);
    console.log(user);
  }, []);

  return ReactDOM.createPortal(
    <div>
      <Styledapp>
        <form>
          <h1>Add Users</h1>
          <Selects placeholder="Type Speaker or Activity" options={arr} />
          <Input
            value={name.name.en}
            placeholder="Name in English*"
            onChange={changeNamee}
            name="en"
            setName={setName}
          />
          <Input
            value={name.name.ru}
            placeholder="Name in Russia *"
            onChange={changeNamee}
            name="ru"
            setName={setName}
          />
          <Input
            value={name.name.uz}
            placeholder="Name in Uzbek*"
            onChange={changeNamee}
            name="uz"
            type="text"
            setName={setName}
          />
          <Input
            value={name.startTime}
            placeholder="Star Time*"
            onChange={changeName}
            name="startTime"
            type="datetime-local"
            setName={setName}
          />
          <Input
            value={name.endTime}
            placeholder="End Time *"
            onChange={changeName}
            name="endTime"
            type="datetime-local"
            setName={setName}
          />
          <Selects placeholder="Speaker" usersData={userSpicers} />
          <div className="button">
            <Button
              click={() => {
                handleeSubmit();
                onBackdropClick();
              }}
              pe={false}
              typee="button"
            >
              Save
            </Button>
            <Button typee="button" click={onBackdropClick} pe={true}>
              Cancel
            </Button>
          </div>
        </form>
      </Styledapp>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default AgendaModal;

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
