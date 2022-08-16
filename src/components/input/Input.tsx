import React from "react";
import styled from "styled-components";

interface IInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name: string;
}

export default function Input({
  value,
  placeholder,
  onChange,
  type = "text",
  name
}: IInput) {
  return (
    <StyledInput>
      <div className="div">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        <div className="icon icon-clear"></div>
      </div>
    </StyledInput>
  );
}

const StyledInput = styled.div`
  .div {
    position: relative;
    .icon {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
  input {
    padding: 10px 12px;
    background: #f6f6f6;
    border-radius: 8px;
    width: 422px;
    border: none;
    &::placeholder {
      color: #343434;
    }
    &:focus {
      outline: none;
    }
  }
`;
