import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// user default Avatar icon
import userAvatar from "../../assets/images/userAvatarIcon.png";
import Fields from "../../pages/fields/Fields";

export default function Sidebar() {
  const location: string = useLocation().pathname;

  return (
    <StyledSidebar>
      <div className="userAvatar">
        <img src={userAvatar} alt="UserAvatar" />
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-fields"></div>
        <p><Link to={"/fields"}>Fields</Link></p>
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout"></div>
         <p><Link to={"/position"}>Positions</Link></p>
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout"></div>
      </div>
      <div className={"icon__wrapper" + (location === "/users" ? " On" : "")}>
        <div className="icon icon-users"></div>
      </div>
      <div className="icon__wrapper out">
        <Link to="/users">
          <div className="icon icon-out"></div>
        </Link>
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
  position: relative;
  .userAvatar {
    max-width: 58px;
    max-height: 58px;
    margin-bottom: 32px;
    margin-left: 14px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon__wrapper {
    width: max-content;
    height: 48px;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
      padding-top: 17px;
      padding-left: 5px;
      font-size: 15px;
      line-height: 17px;
      color: #8992a9;
      font-weight: bold;
      a {
        text-align: center;
        list-style: none;
        text-decoration: none;

      }
    }

    &.On {
      background: #e3ebff;
      border-radius: 16px;

      .icon {
        background-color: #3b72ff;
      }
    }

    &.out {
      position: absolute;
      bottom: 32px;
    }
  }
`;
