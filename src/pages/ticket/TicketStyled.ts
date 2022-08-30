import styled from "styled-components";

export const TicketStyled = styled.div`
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 0 0 16px 16px;
  margin: 0 38px;
  width: 85%;
  margin-top: 94px;
  margin-left: 155px;
  .first--div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px 15px 18px;
    margin-bottom: 4px;
    border-bottom: 1px solid #f4f5f7;
    .tag--div {
      h2 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #8992a9;
      }
    }
    .icon--div {
      display: flex;
      align-items: center;
      gap: 29px;
    }
  }

  .user-information {
    display: flex;
    justify-content: space-between;
    /* gap: 100px; */
    background: #fafafb;
    padding: 15px 18px;
  }
  .expand {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: flex-start;
    color: #8992a9;
    cursor: pointer;

    input {
      width: 22px;
      height: 22px;
      display: inline-block;
      border: 2px solid #c4c8d4;
      border-radius: 8px;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #8992a9;
    }
  }
  footer {
    display: flex;
    align-items: center;
    border-radius: 0 0 16px 16px;
    padding-left: 18px;
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;

    .banned {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      color: #ff3b3b;
      width: 60px;
      height: 20px;
      background: rgba(255, 59, 59, 0.14);
      border-radius: 6px;
      text-align: center;
      padding: 4px;
      margin-left: 27px;
    }
  }
  .numbers--div {
    display: flex;
    margin-left: 75px;
    align-items: center;
    gap: 140px;
    width: 75%;
    color: #8992a9;
  }
  #p {
    color: #000;
  }

  .grid--div {
    display: grid;
    grid-template-columns: 20% 15% 15% 15% 15% 10%;
    align-items: center;
    padding: 16px 18px 10px;
    background: #fafafb;
  }
  .users--div {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 16px 18px 10px;
    background: #fff;
  }
  #span {
    background: rgba(255, 59, 59, 0.14);
    border-radius: 6px;
    padding: 2.5px 8px;
    color: #ff3b3b;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: justify;
  }
  .card--div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .expand {
      color: #8992a9;
    }
  }

  #free {
    background-color: green;
    color: #fff;
    border-radius: 8px;
    padding: 5px 8px 8px;
  }
`;
