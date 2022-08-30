import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IContext, MyContext } from "../../../context/Context";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

interface ModalProps {
  onBackdropClick: () => void;
  user: any;
}

const SpicersModal: React.FC<ModalProps> = ({ onBackdropClick, user }) => {
  const { postSpicers, putSpecers } = useContext<IContext>(MyContext);
  const [bioname, setBioName] = useState({
      uz: "",
      ru: "",
      en: "",
  })

  const [name, setName] = useState({
      uz: "",
      ru: "",
      en: "",
  });

  const [img, setImage] = useState({
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5b%2FSt_Mary%2527s_Church%252C_Castle_Street_1.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTown&tbnid=WezSpnlkJBvXNM&vet=12ahUKEwix-Lup8dz5AhVCmosKHRK8AZUQMygAegUIARC9AQ..i&docid=Hyl4yZiJw9E9uM&w=640&h=480&q=town&ved=2ahUKEwix-Lup8dz5AhVCmosKHRK8AZUQMygAegUIARC9AQ"
    });


  function changeNamee(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setName((p) => ({ ...p, [name]: value  }));
  }

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setBioName((p) => ({ ...p, [name]: value  }));
  }

  function handleeSubmit() {
    if(user?.name.uz === "")
    {
      if (postSpicers) {
        postSpicers({
          name,
          bio:bioname,
          image:"some img"
        })
      }
    }
    else {
      const _id = user?._id;
      if(putSpecers) {
        putSpecers({_id, name, bio:bioname, image:"rasm"})
      }
    }
  }
  
  useEffect(() => {
      if(!user._id) return;
      setName(user.name)
      setBioName(user.bio)      
    }, [])

  return ReactDOM.createPortal(
    <div>
      <Styledapp>
        <form>
          <h1>Add Speaker</h1>
          <Input
            value={name.en}
            placeholder="Name in English*"
            onChange={changeNamee}
            name="en"
            setName={setName}
          />
          <Input
            value={name.ru}
            placeholder="Name in Russian*"
            onChange={changeNamee}
            name="ru"
            setName={setName}
          />
          <Input
            value={name.uz}
            placeholder="Name in Uzbek*"
            onChange={changeNamee}
            name="uz"
            setName={setName}
          />
          <Input
            value={bioname.en}
            placeholder="Bio in English*"
            onChange={changeName}
            name="en"
            setName={setBioName}
          />
          <Input
            value={bioname.ru}
            placeholder="Bio in Russia*"
            onChange={changeName}
            name="ru"
            setName={setBioName}
          />
          <Input
            value={bioname.uz}
            placeholder="Bio in Uzbek*"
            onChange={changeName}
            name="uz"
            setName={setBioName}
          />
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

export default SpicersModal;

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
