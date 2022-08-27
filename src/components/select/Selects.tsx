import React, { useState } from "react";
import styled from "styled-components";
import { IModal } from "../../pages/ticket/ticketModal/TicketModal";

export interface SecectProps {
  options?: IModal[];
  placeholder: string;
  usersData?: any;
  setName?: any;
}




export default function Selects({ options = undefined, placeholder, usersData, setName }: SecectProps) {
  const [assa, setassa] = useState(false);
  const [value, setvalue] = useState("");
  function d(name: string) {
    setvalue(name);
    setassa(false);
  }


  function onclick(id: string, name: string) {
    console.log(id, name, placeholder);        
    if (placeholder === "Fields") setName((p: {}) => ({ ...p, fieldId: id }));
    if (placeholder === "Position")
      setName((p: {}) => ({ ...p, positionId: id }));
  }
  return (
    <SelectStyled>
      <section
        className="select_heder"
          onClick={() => {
            setassa((p:any) => !p);
          }}
      >
        <div className="ch_heder">
          <p>{value || placeholder || "Category"}</p>
          <i className="icon icon-vector"></i>
        </div>
      </section>
      {assa ? (
        <section className="select_list">
          <ul>
          {options
              ? options.map((i: any, idx: number) => (
                  <li key={idx} onClick={() => d(i.name)}>
                    {i.name}
                  </li>
                ))
              : usersData?.data?.map((i: any, idx: number) => (
                  <li
                    key={idx}
                    onClick={() => {
                      d(i.name.uz);
                      onclick(i._id, i.name.uz);
                    }}
                  >
                    {i.name.uz}hhhh
                  </li>
                ))}
          </ul>
        </section>
      ) : null}
    </SelectStyled>
  );
}
const SelectStyled = styled.div`
  position: relative;
  color: #8992A9;
  .select_heder {
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      margin-bottom: 12px;
      color:  #343434;
    }
    .ch_heder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f6f6f6;
      border-radius: 8px;
      padding: 10px 19px 10px 12px;
      cursor: pointer;
      color:  #343434;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        /* line-height: 24px; */
        letter-spacing: 0em;
        /* font-weight: normal; */
        color: #343434;
      }
    }
  }
  .select_list {
    position: absolute;
    background: #f6f6f6;
    box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
    border-radius: 20px;
    width: 100%;
    z-index: 5;
    left: 0;
    bottom: 0;
    transform: translateY(calc(100% + 12px));
    max-height: 300px;
    overflow-y: auto;
    ul {
      padding: 20px;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 14px;
      li {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        color: #8992A9;
        cursor: pointer;
        &:hover {
          color: royalblue;
        }
      }
    }
  }
`;