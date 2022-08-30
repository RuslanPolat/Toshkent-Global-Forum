import React, { useContext, useEffect, useState } from "react";
import { SpikerlarStyle } from "./SpikerlarStyle";
import SearchInput from "../../components/searchinput/SerchInput";
import BaseSpicers from "./spicersModal/BaseSpicers";

import { IContext, MyContext, IDate, IPosit } from "../../context/Context";
import { CONSTS } from "../../utils/consts";

export default function Spikerlar() {
  const [list, setList] = useState<string[]>([]);
  const { getSpicers, userSpicers, deleteSpicers} = useContext<IContext>(MyContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  useEffect(() => {
    if (getSpicers) {
      getSpicers();
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
      for (let i = 0; i < userSpicers?.data.length; i++) {
        setList((p) => [...p, userSpicers?.data?.[i]._id]);
      }
    } else {
      for (let i = 0; i < userSpicers?.data.length; i++)
        setList((p) => p.filter((item) => item !== userSpicers?.data[i]?._id));
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
    bio: {
      uz: "",
      ru: "",
      en: "",
    }
  });

  

  useEffect(()=>{
    console.log(list);
  },[list])
  

  function deleteSpecer() {
    if (deleteSpicers) {
      deleteSpicers({ ids: list });
    }
  }



  return (
    <SpikerlarStyle>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>{list.length === 0 ? "" : list.length + " selected"}</h2>
          </div>
          <div className="icon--div">
            <div onClick={deleteSpecer} className="icon icon-icon1"></div>
            <div onClick={toggleModal} className="icon icon-add"></div>
            <div
              className={"" + (list.length === 1 ? "icon icon-icon2" : "")}
              onClick={() => {
                toggleModal()
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
              <input type="checkbox"  onClick={handleChange} checked={checked} />
              <p>Full name</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="user--card">
        {userSpicers?.data?.map((i: IDate, idx: number) => (
          <div key={idx}>
            <div className="grid--div">
              <div className="card--div">
                <div className="expand">
                  <input
                    type="checkbox"
                    checked={list.includes(i._id)}
                    onChange={() =>  {deleteId(i._id); setCurent(i)}}
                  />
                  <p   onClick={() => {
                      toggleModal();
                      deleteId(i._id);
                      setCurent(i);
                    }} id="p">{i?.name.en}</p>
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
                  <p>{i?.bio.en}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.bio.ru}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.bio.uz}</p>
                </div>
              </div>
              <div className="card--div">
                {/* <img src={CONSTS.BASE_URL + i.image} alt="img" /> */}
              </div>
            </div>
          </div>
        ))}
      </section>
      <BaseSpicers
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        user={curent}
      />
    </SpikerlarStyle>
  );
}
