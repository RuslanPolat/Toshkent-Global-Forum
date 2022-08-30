import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import userAvatar from "../../assets/images/userAvatarIcon.png";
import Fields from "../../pages/fields/Fields";

export default function Sidebar() {
  const location: string = useLocation().pathname;
  const navigate = useNavigate();

  function pageOut() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ISAUTH");
    navigate("/login");
  }

  return (
    <StyledSidebar>
      <div className="userAvatar">
        <img src={userAvatar} alt="UserAvatar" />
      </div>
      <div className={"icon__wrapper" + (location === "/fields" ? " On" : "")}>
        <Link to={"/fields"}>
          <div className="icon icon-fields"></div>
        </Link>
      </div>
      <div
        className={"icon__wrapper" + (location === "/position" ? " On" : "")}
      >
        <Link to={"/position"}>
          <div className="icon icon-positions"></div>
        </Link>
      </div>
      <div className={"icon__wrapper" + (location === "/ticket" ? " On" : "")}>
        <Link to={"/ticket"}>
          <div className="icon icon-ticket"></div>
        </Link>
      </div>
      <div
        className={
          "icon__wrapper" + (location === "/foydalanuvchilar" ? " On" : "")
        }
      >
        <Link to={"/foydalanuvchilar"}>
          <div className="icon icon-users"></div>
        </Link>
      </div>
      <div className={"icon__wrapper" + (location === "/agenda" ? " On" : "")}>
        <Link to={"/agenda"}>
          <div className="icon icon-agenda"></div>
        </Link>
      </div>
      <div
        className={"icon__wrapper" + (location === "/spikerlar" ? " On" : "")}
      >
        <Link to={"/spikerlar"}>
          <div className="icon icon-speaker"></div>
        </Link>
      </div>
      <div
        className={"icon__wrapper" + (location === "/comments" ? " On" : "")}
      >
        <Link to={"/comments"}>
          <div className="icon icon-comments"></div>
        </Link>
      </div>
      <div
        className={"icon__wrapper" + (location === "/settings" ? " On" : "")}
      >
        <Link to={"/settings"}>
          <div className="icon icon-settings"></div>
        </Link>
      </div>
      <div onClick={pageOut} id="out" className="icon__wrapper">
        <Link to={"/login"}>
          <div className="icon icon-out"></div>
          <p>Exit</p>
        </Link>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  padding: 15px;
  width: max-content;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  position: fixed;
  .userAvatar {
    max-width: 58px;
    max-height: 58px;
    margin: 0 auto 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon__wrapper {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        /* padding-top: 15px; */
        font-size: 15px;
        line-height: 1px;
        color: #8992a9;
        font-weight: bold;
        a {
          text-align: center;
          list-style: none;
          text-decoration: none;
          color: #8992a9;
        }
      }
    }

    &.On {
      color: #fff;
      background-color: #e3ebff;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* padding: 5px; */
      a {
        border-radius: 16px;
        color: royalblue;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
      }
      .icon {
        background: royalblue;
        /* padding: 15px; */
      }
    }

    &.out {
      position: absolute;
      bottom: 32px;
      display: flex;
    }
  }
  #out {
    position: absolute;
    bottom: 5px;
    display: flex;
    margin-left: 22px;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 5px;
    }
  }
`;
