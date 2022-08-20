import React from "react";

//
import SearchInput from "../searchinput/SerchInput";
import { UsersStyled } from "./UsersStyled";

export default function UsersMain() {
  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1"></div>
            <div className="icon icon-icon2"></div>
            <div className="icon icon-icon3"></div>
            <div className="icon icon-icon4"></div>
            <div className="icon icon-dont"></div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput />
        </div>
        <div className="grid--div">
            <div>
              <div className="expand">
                <input type="checkbox" />
                 <p>Full name</p>
              </div>
            </div>
        </div>
      </section>
    </UsersStyled>
  );
}
