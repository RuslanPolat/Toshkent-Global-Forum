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
  editInfo: any;
  user: any;
}

export interface IModal {
  id: number;
  name: string;
}


const TicketModal: React.FC<ModalProps> = ({ onBackdropClick, editInfo, user }) => {
  const { postTicket } = useContext<IContext>(MyContext);
  const [name, setName] = useState({
    category: "vip",
    sector: "",
    row: "",
    seat: "",
    price: 12000,
    barcode: "spon",
  });

  const arr: IModal[] = [
    {
      id: 1,
      name: "VIP",
    },
    {
      id: 2,
      name: "PREMIUM",
    },
    {
      id: 3,
      name: "ECONOM"
    },
  ]

  function changeNamee(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value }));
  }

  function handleeSubmit() {
    if (postTicket) {
      postTicket(name);
    }
  }

  
  // useEffect(() => {
  //   let index:number = 0
  //   for(let i=0; i<editInfo().length; i++){
  //     if(editInfo()[i]!==false)
  //     index = i;
  //   }
    
  //   if (editInfo()[index]?._id) {
  //     setName({
  //       category: editInfo()[index]?.namme?.category,
  //       sector: editInfo()[index]?.name?.sector,
  //       row: editInfo()[index]?.name?.row,
  //       seat: editInfo()[index]?.name?.seat,
  //       price: editInfo()[index]?.name?.price, 
  //       barcode: editInfo()[index]?.name?.barcore,
  //     });
  //   }
  // }, []);



  return ReactDOM.createPortal(
    <div>
      <Styledapp>
        <form>
          <h1>Add Users</h1>
          <Selects
            placeholder="Category"
          options={arr}/>
          <Input
            value={name.sector}
            placeholder="Sector *"
            onChange={changeNamee}
            name="sector"
            setName={setName}
          />
          <Input
            value={name.row}
            placeholder="Row *"
            onChange={changeNamee}
            name="row"
            setName={setName}
          />
          <Input
            value={name.seat}
            placeholder="Seat *"
            onChange={changeNamee}
            name="seat"
            setName={setName}
          />
          <Input
            value={name.price}
            placeholder="Narxi *"
            onChange={changeNamee}
            name="price"
            setName={setName}
          />
          <div className="button">
          <Button click={() => {handleeSubmit(); onBackdropClick()}} pe={false} typee="button">
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

export default TicketModal;

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
