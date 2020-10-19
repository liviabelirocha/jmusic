import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  color: #fff;
  background: #000;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  border-radius: 0.8rem;
  font-size: 24px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input[type="file"] {
      display: none;
    }

    .fileInput {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;

      span {
        cursor: pointer;
        width: 100%;
      }
    }

    input,
    .fileInput span {
      position: relative;
      max-width: 850px;
      color: #fff;
      background-color: #383236;
      margin: 10px 20px;
      padding: 5px;
      padding-left: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      border: 0;
      height: 30px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button {
    margin: 1rem;
    cursor: pointer;
    border: 0;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    font-family: "MV Boli V1";
    font-size: 20px;
  }
`;
