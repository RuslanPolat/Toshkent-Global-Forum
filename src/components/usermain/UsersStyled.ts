import styled from "styled-components";

export const UsersStyled = styled.div`
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 0 0 16px 16px;
  width: 90%;
  margin-left: 115px;
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
    gap: 8px;
    align-items: center;
    color: #8992A9;
    input:checkbox {
        border: none;
    }
  }
  footer {
     display: flex;
     align-items: center;
     border-radius: 0 0 16px 16px;
     padding-left: 18px;
     background-color: #FFF;
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
    color: #8992A9;
}
#p {
    color: #000;
}
`;
