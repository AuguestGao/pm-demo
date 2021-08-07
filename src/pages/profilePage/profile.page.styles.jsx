import styled from "styled-components";

export const ProfileRootContainer = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 50px auto;
  /* max-width: 400px; */
  border: 2px solid black;
  border-radius: 22px;
  flex-direction: column;
  padding: 25px 15px;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const CustomFieldContainer = styled.div`
  border-radius: 10px;
  color: #000;
  width: 90%;
  padding: 20px;
  margin: 50px auto 20px auto;
  border: solid 1px #999;
  box-shadow: 0 4px 23px 5px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SelectContainer = styled.select`
  margin: 10px auto;
  padding: 0;
  box-sizing: border-box;
  width: 90%;
`;

export const CustomFieldDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 95%;
`;

export const DeleteButtonContainer = styled.div`
  font-weight: bold;
  cursor: pointer;
`;
