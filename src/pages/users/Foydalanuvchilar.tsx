import React, { useContext, useEffect, useState } from "react";
import { UsersStyle } from "./UsersStyle";
import SearchInput from "../../components/searchinput/SerchInput";
import BaseUsers from "./usersModal/BaseUsers";
import { IContext, MyContext, IDate } from "../../context/Context";

export default function Foydalanuvchilar() {
  const [list, setList] = useState<string[]>([]);
  const { getUsers, userUsers, deleteUser } = useContext<IContext>(MyContext);

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
      for (let i = 0; i < userUsers?.data.length; i++) {
        setList((p) => [...p, userUsers?.data?.[i]._id]);
      }
    } else {
      for (let i = 0; i < userUsers?.data.length; i++)
        setList((p) => p.filter((item) => item !== userUsers?.data[i]?._id));
    }

    setChecked(!checked);
  };

  function editInfo() {
    const index: any = list.map((item, idx) => item && idx);
    const editItem = userUsers?.data?.map(
      (item: any) => item?._id === list[0] && item
    );
    return editItem;
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  function deleteUsers() {
    if (deleteUser) {
      deleteUser({ ids: list });
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
    if (getUsers) {
      getUsers();
    }
  }, []);

  return (
    <UsersStyle>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
          <h2>{list.length === 0 ? "" : list.length + " selected"}</h2>
          </div>
          <div className="icon--div">
            <div onClick={deleteUsers} className="icon icon-icon1"></div>
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
        {userUsers?.data?.map((i: IDate, idx: number) => (
          <div key={idx}>
            <div className="grid--div">
              <div className="card--div">
                <div className="expand">
                  <input
                    type="checkbox"
                    checked={list.includes(i._id)}
                    onChange={() => {
                      deleteId(i._id);
                      // setCurent(i);
                    }}
                  />
                  <p   onClick={() => {
                      toggleModal();
                      deleteId(i._id);
                      // setCurent(i);
                      editInfo();
                    }} id="p">{i?.phoneNumber}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.fullName}</p>
                </div>
              </div>
              <div>
                <div className="expand"></div>
                <p>{i?.brand}</p>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.employeeCount}</p>
                </div>
              </div>
              {/* <div className="card--div">
                <div className="expand">
                  <p>{i?.field.name.en}</p>
                </div>
              </div>
              <div className="card--div">
                <div className="expand">
                  <p>{i?.positionId}</p>
                </div>
              </div>
              <div className="card--div"></div> */}
            </div>
          </div>
        ))}
      </section>
      <BaseUsers
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        editInfo={editInfo}
        user={curent}
      />
    </UsersStyle>
  );
}
