import styled from "styled-components";

export const NavbarStyle = styled.section`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 50px 0px 38px;
    background: #f8f8f8;
    position: fixed;
    width: 90%;
    margin-left: 118px;
    background-color: #f8f8f8;
    z-index: 2;
    .text--div {
      h1 {
        font-family: Lato;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        padding-top: 20px
      }
    }
    .icon--div {
      display: flex;
      align-items: center;
      gap: 32px
    }
    .back--icon {
        background-color: #fff;
        padding: 15px;
        border-radius: 16px;
    }
  }
`;
