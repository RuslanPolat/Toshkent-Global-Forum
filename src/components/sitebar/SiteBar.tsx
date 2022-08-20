import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// user default Avatar icon
import userAvatar from "../../assets/images/userAvatarIcon.png";
import Fields from "../../pages/fields/Fields";

export default function Sidebar() {
  const location: string = useLocation().pathname;
  const navigate = useNavigate(); 

  function pageOut() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ISAUTH");
    navigate("/login")
  }

  return (
    <StyledSidebar>
      <div className="userAvatar">
        <img src={userAvatar} alt="UserAvatar" />
      </div>
      <div className={"icon__wrapper" + (location === "/fields" ? " On" : "")}>
        <div className="icon icon-fields"></div>
        <p><Link to={"/fields"}>Fields</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/position" ? " On" : "")}>
        <div className="icon icon-positions"></div>
         <p><Link to={"/position"}>Positions</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/ticket" ? " On" : "")}>
        <div className="icon icon-ticket"></div>
         <p><Link to={"/ticket"}>Biletlar</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/foydalanuvchilar" ? " On" : "")}>
        <div className="icon icon-users"></div>
         <p><Link to={"/foydalanuvchilar"}>Users</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/agenda" ? " On" : "")}>
        <div className="icon icon-agenda"></div>
         <p><Link to={"/agenda"}>Aganda</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/spikerlar" ? " On" : "")}>
        <div className="icon icon-speaker"></div>
         <p><Link to={"/spikerlar"}>Spikerlar</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/comments" ? " On" : "")}>
        <div className="icon icon-comments"></div>
         <p><Link to={"/comments"}>Comments</Link></p>
      </div>
      <div className={"icon__wrapper" + (location === "/settings" ? " On" : "")}>
        <div className="icon icon-settings"></div>
         <p><Link to={"/settings"}>Settings</Link></p>
      </div>
      {/* <div className={"icon__wrapper" + (location === "/users" ? " On" : "")}>
        <div className="icon icon-users">User</div>
      </div> */}
      <div  onClick={pageOut} id="out" className="icon__wrapper">
          <div className="icon icon-out"></div>
          <p>Exit</p>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  padding: 15px;
  /* margin: 0 50px; */
  width: max-content;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  position: fixed;
  .userAvatar {
    max-width: 58px;
    max-height: 58px;
    /* margin-left: 10px; */
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
    p {
      padding-top: 17px;
      padding-left: 5px;
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

    &.On {
      /* background: #e3ebff; */
      color: #fff;
      
      a {
        border-radius: 16px;
        padding: 2px;
        padding-top: 0;
        color: #3b72ff;
        background-color:#E3EBFF;
      }
      .icon .icon--layout {
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
