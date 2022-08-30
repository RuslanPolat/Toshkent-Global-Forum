import React, { useState, useContext, useEffect } from "react";
import BaseModal from "../../pages/fields/fieldmodal/BaseModal";

//
import SearchInput from "../../components/searchinput/SerchInput";
import { UsersStyled } from "../../components/usermain/UsersStyled";
import { FieldsStyle } from "./FieldsStyle";

import { IContext, IPosit, MyContext, IDate } from "../../context/Context";

export default function Fields() {
  const [list, setList] = useState<string[]>([]);
  const { getField, userFiel, deleteField } = useContext<IContext>(MyContext);

  useEffect(() => {
    if (getField) {
      getField();
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  function deleteId(id: string) {
    if (list.includes(id)) {
      setList((p) => p.filter((i) => i !== id));
    } else {
      setList((p) => [...p, id]);
    }
  }
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    if (!checked) {
      for (let i = 0; i < userFiel?.data.length; i++) {
        setList((p) => [...p, userFiel?.data?.[i]._id]);
      }
    } else {
      for (let i = 0; i < userFiel?.data.length; i++)
        setList((p) => p.filter((item) => item !== userFiel?.data[i]?._id));
    }

    setChecked(!checked);
  };

  const [curent, setCurent] = useState({
    _id: "",
    name: {
      uz: "",
      ru: "",
      en: "",
    },
  });

  function editInfo() {
    const index: any = list.map((item, idx) => item && idx);
    const editItem = userFiel?.data?.map(
      (item: any) => item?._id === list[0] && item
    );
    return editItem;
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  function deleteFields() {
    if (deleteField) {
      deleteField({ ids: list});
    }
  }

  return (
    <FieldsStyle>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>{list.length === 0 ? "" : list.length + " selected"}</h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1" onClick={deleteFields}></div>
            <div onClick={toggleModal} className="icon icon-add"></div>
            <div
              className={"" + (list.length === 1 ? "icon icon-icon2" : "")}
              onClick={() => {
                toggleModal();
                editInfo();
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
              <input type="checkbox" onClick={handleChange} checked={checked} />
              <p>Full name</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="user--card">
        {userFiel?.data?.map((i: IDate, idx: number) => (
          <div key={idx}>
            <div className="grid--div">
              <div className="card--div">
                <div className="expand">
                  <input
                    type="checkbox"
                    checked={list.includes(i._id)}
                    onChange={() => {
                      deleteId(i._id);
                      setCurent(i);
                    }}
                  />
                  <p
                    onClick={() => {
                      toggleModal();
                      deleteId(i._id);
                      setCurent(i);
                      editInfo();
                    }}
                    id="p"
                  >
                    {i?.name.uz}
                  </p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.__v}</p>
                </div>
              </div>
              <div>
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
              <div className="card--div"></div>
            </div>
          </div>
        ))}
      </section>
      <BaseModal
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        editInfo={editInfo}
        user={curent}
      />
    </FieldsStyle>
  );
}
