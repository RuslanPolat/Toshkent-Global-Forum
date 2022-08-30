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
import { error } from "console";

interface ModalProps {
  onBackdropClick: () => void;
  editInfo: any;
  user: any;
}

export interface IModal {
  id: number;
  name: string;
}


const UsersModal: React.FC<ModalProps> = ({ onBackdropClick, editInfo, user }) => {
  const { postField, userPosit, userFiel, getField, getPosition, postUser } = useContext<IContext>(MyContext);
  const [name, setName] = useState({
    fullName: "",
    phoneNumber: "",
    fieldId: "",
    brand: "",
    employeeCount: 1,
    positionId: "",
  });

  // const arr: IModal[] = [
  //   {
  //     id: 1,
  //     name: "Fields",
  //   },
  //   {
  //     id: 2,
  //     name: "Position",
  //   }
  // ]

  function changeNamee(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value }));
  }

  // useEffect(() => {
  //   let index:number = 0
  //   for(let i=0; i<editInfo().length; i++){
  //     if(editInfo()[i]!==false)
  //     index = i;
  //   }
    
  //   if (editInfo()[index]?._id) {
  //     setName({
  //       fullname: editInfo()[index]?.name?.fullname,
  //       phonenumber: editInfo()[index]?.name?.phonenumber,
  //       brand: editInfo()[index]?.name?.brand,
  //       employeecount: editInfo()[index]?.name?.employeecount, 
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if(getField) getField();
    if(getPosition) getPosition();
    console.log(setName);
    
  }, [])


  function handleeSubmit() {
    if (postUser) {
      postUser(
        name
        )
      }
      // if(user?.name.uz === "") {
    // }
    else {
      const __id = user?.__id;      
      // if(putSpecers) {
      //   putSpecers({__id, name, bioname})
      // }
    }
  }

  return ReactDOM.createPortal(
    <div>
      <Styledapp>
        <form>
          <h1>Add Users</h1>
          <Input
            value={name.fullName}
            placeholder="Full Name*"
            onChange={changeNamee}
            name="fullName"
          />
          <Input
            value={name.phoneNumber}
            placeholder="phone number *"
            onChange={changeNamee}
            name="phoneNumber"
          />
           <Selects
            usersData={userFiel}
            placeholder="Fields"
            setName={setName}
            // options={userFiel}
           />
          <Input
            value={name.brand}
            placeholder="Brand *"
            onChange={changeNamee}
            name="brand"
          />
          <Input
            value={name.employeeCount}
            placeholder="Employee Count *"
            onChange={changeNamee}
            name="employeeCount"
          />
           <Selects 
           usersData={userPosit}
            placeholder="Position"
            setName={setName}
          //  options={userPosit}
           />
          <div className="button">
          <Button click={() => {handleeSubmit(); onBackdropClick()}} pe={false} typee="button">
              Save
            </Button>
            <Button  typee="button" click={onBackdropClick} pe={true}>
              Cancel
            </Button>
          </div>
        </form>
      </Styledapp>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default UsersModal;

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
