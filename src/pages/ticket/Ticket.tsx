import React, { useState, useContext, useEffect } from "react";
import { TicketStyled } from "./TicketStyled";
import SearchInput from "../../components/searchinput/SerchInput";
import BaseModalWrapper from "../../components/modal/BaseModalWrapper";
import TicketModal from "./ticketModal/TicketModal";
import BaseTicket from "./ticketModal/BaseTicket";
import { IContext, MyContext, IDate } from "../../context/Context";

export default function Ticket() {
  const [list, setList] = useState<string[]>([]);
  const { getTicket, userTicket, deleteTicket } =
    useContext<IContext>(MyContext);

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
      for (let i = 0; i < userTicket?.data.length; i++) {
        setList((p) => [...p, userTicket?.data?.[i]._id]);
      }
    } else {
      for (let i = 0; i < userTicket?.data.length; i++)
        setList((p) => p.filter((item) => item !== userTicket?.data[i]?._id));
    }

    setChecked(!checked);
  };

  function editInfo() {
    const index: any = list.map((item, idx) => item && idx);
    const editItem = userTicket?.data?.map(
      (item: any) => item?._id === list[0] && item
    );
    return editItem;
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  function deleteTickets() {
    if (deleteTicket) {
      deleteTicket({ ids: list });
    }
  }

  const [curent, setCurent] = useState({
    _id: "",
    sector: "",
    row: "",
    seat: "",
    price: "",
  });

  useEffect(() => {
    if (getTicket) {
      getTicket();
    }
  }, []);

  return (
    <TicketStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>{list.length} selected</h2>
          </div>
          <div className="icon--div">
            <div onClick={deleteTickets} className="icon icon-icon1"></div>
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
        {userTicket?.data?.map((i: IDate, idx: number) => (
          <div key={idx}>
            <div className="grid--div">
              <div className="card--div">
                <div className="expand">
                  <input
                    type="checkbox"
                    checked={list.includes(i._id)}
                    onChange={() => {
                      deleteId(i._id);
                      // setCurent(i.se);
                    }}
                  />
                  <p id="p">{i?.category}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.sector}</p>
                </div>
              </div>
              <div>
                <div className="expand"></div>
                <p>{i?.row}</p>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.seat}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.price}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.occupied}</p>
                </div>
              </div>
              <div className="card--div"></div>
            </div>
          </div>
        ))}
      </section>
      <BaseTicket
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        editInfo={editInfo}
        user={curent}
      />
    </TicketStyled>
  );
}
