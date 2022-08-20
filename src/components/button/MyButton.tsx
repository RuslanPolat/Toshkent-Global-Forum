import React, { useState } from "react";
import styled from "styled-components";

interface IButton {
  type?: "button";
  stylee?: () => boolean;
  children?: any;
  onClick : () => void;
  click : () => void;
}

export default function MyButton({ stylee, type = "button", children, click }: IButton) {
  return (
    <StyledMyButton >
      <button  type={type} onClick={click} >{children}</button>
    </StyledMyButton>
  );
}
const StyledMyButton = styled.div`
  width: 100%;
  /* .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px; */
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-radius: 15px;
      width: 189px;
      height: 40px;
      color: #4340da;
      border: none;
      background: #f6f6f6;
      background: ${(props) => (props.style ? " #f6f6f6" : "#4340da")};
      color: ${(props) => (props.style ? "#4340da": "white")};

      &:first-of-type {
        background-color: royalblue;
        background: #4340da;
        border: none;
        color: #fff;
      }
    }
`;
