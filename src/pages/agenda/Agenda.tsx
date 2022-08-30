import React, { useContext, useEffect, useState } from "react";
import { AgendaStyle } from "./AgendaStyle";
import SearchInput from "../../components/searchinput/SerchInput";
import BaseAgenda from "./agendaModal/BaseAgenda";
import { IContext, MyContext, IDate } from "../../context/Context";

export default function Agenda() {
  const [list, setList] = useState<string[]>([]);
  const { getAgenda, userAgenda, deleteAgenda } = useContext<IContext>(MyContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  useEffect(() => {
    if (getAgenda) {
      getAgenda();
    }
  }, []);

    

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
      for (let i = 0; i < userAgenda?.data.length; i++) {
        setList((p) => [...p, userAgenda?.data?.[i]._id]);
      }
    } else {
      for (let i = 0; i < userAgenda?.data.length; i++)
        setList((p) => p.filter((item) => item !== userAgenda?.data[i]?._id));
    }

    setChecked(!checked);
  };

  const [curent, setCurent] = useState({
    _id: "",
    name: {
      en: "",
      ru: "",
      uz: "",
     },
     type: "",
     endTime: "",
     startTime: "",
  });

  function deleteAgend() {
    if (deleteAgenda) {
      deleteAgenda({ ids: list });
    }
  }


  return (
    <AgendaStyle>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>{list.length === 0 ? "" : list.length + " selected"}</h2>
          </div>
          <div className="icon--div">
            <div onClick={deleteAgend} className="icon icon-icon1"></div>
            <div onClick={toggleModal} className="icon icon-add"></div>
            <div  className={"" + (list.length === 1 ? "icon icon-icon2" : "")}></div>
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
        {userAgenda?.data?.map((i: IDate, idx: number) => (
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
                        console.log(setCurent(i));
                        
                      }}
                  id="p">{i?.name.en}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.name.ru}</p>
                </div>
              </div>
              <div>
                <div className="expand"></div>
                <p>{i?.name.uz}</p>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.type}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.startTime}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.endTime}</p>
                </div>
              </div>
              <div className="card--div">
              </div>
            </div>
          </div>
        ))}
      </section>
      <BaseAgenda
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        user={curent}
      />
    </AgendaStyle>
  );
}
