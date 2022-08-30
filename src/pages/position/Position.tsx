import React, { useState, useContext, useEffect } from "react";
import BaseModalWrapper from "../../components/modal/BaseModalWrapper";

//
import SearchInput from "../../components/searchinput/SerchInput";
import { UsersStyled } from "../../components/usermain/UsersStyled";
import { PositionStyled } from "./PositionStyled";
import { IContext, IPosit, MyContext, IDate } from "../../context/Context";

interface inputProps {
  deletePosit?: Promise<void> | undefined;
}

export default function Position() {
  const [list, setList] = useState<string[]>([]);
  const { getPosition, userPosit, deletePosit } = useContext<IContext>(MyContext);

  useEffect(() => {
    if (getPosition) {
      getPosition();
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };


  const [curent, setCurent] = useState({
    _id: "",
    name: {
      uz: "",
      ru: "",
      en: "",
    },
  });

  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {

    if (!checked) {
      for (let i = 0; i < userPosit?.data.length; i++) {
        setList((p) => [...p, userPosit?.data?.[i]._id]);
      }
    } else {
      for (let i = 0; i < userPosit?.data.length; i++)
        setList((p) => p.filter((item) => item !== userPosit?.data[i]?._id));
    }

    setChecked(!checked);
  };

  function editInfo() {
    const index:any = list.map((item, idx)=> item && idx)
    const editItem = userPosit?.data?.map((item: any) =>  item?._id === list[0] && item  );
    return editItem
  }


  function deleteId(id: string) {
    if (list.includes(id)) {
      setList((p) => p.filter((i) => i !== id));
    } else {
      setList((p) => [...p, id]);
    }
  }

  function deletePosition() {
    if (deletePosit) {
      deletePosit({ ids: list });
    }
  }

  return (
    <PositionStyled >
       <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>{list.length === 0 ? "" : list.length + " selected"}</h2>
          </div>
              <div className="icon--div">
                <div onClick={deletePosition} className="icon icon-icon1"></div>
                <div onClick={toggleModal} className="icon icon-add"></div>
                <div  className={"" + (list.length === 1 ? "icon icon-icon2" : "")} 
                   onClick={() => {
                    toggleModal(); editInfo()
                  }}
                ></div>
              </div>
       </div>
        <div className="second--div">
          <SearchInput />
        </div>
        <div className="grid--div">
            <div>
              <div className="expand">
                <input type="checkbox"
                onClick={handleChange}
                checked={checked}
                />
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
            <div className="grid--div">
              <div className="card--div">
                <div className="expand">
                  <input type="checkbox"
                    checked={list.includes(i._id)} 
                    onChange={ () => {deleteId(i._id);
                     setCurent(i)}
                  }
                  />
                  <p   onClick={() => {
                      toggleModal();
                      deleteId(i._id);
                      setCurent(i);
                      editInfo();
                    }} id="p">{i?.name.uz}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.__v}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand"></div>
                <p>{i?.name.ru}</p>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        editInfo={editInfo}
        user={curent}
      />
    </PositionStyled>
  );
}
