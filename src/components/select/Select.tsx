import React from "react";

import styled from "styled-components";
export default function () {
  return (
    <SelectStyled>
      <section className="select_heder">
        <input type="select" placeholder="Feiled" />
        <div className="icon icon-vector"></div>
      </section>
    </SelectStyled>
  );
}
const SelectStyled = styled.div`
  .select_heder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
   
    input {
      width: 100%;
      padding: 10px 12px;
      background: #f6f6f6;
      border-radius: 8px;
      width: 422px;
      border: none;
      position: relative;

    }  
    
    div {
        position: relative;
        border: 1px solid red;
              position: absolute;
             top: 50%;
             right: 20px;
             transform:translateY(-50%);
      
    }
  }
`;
