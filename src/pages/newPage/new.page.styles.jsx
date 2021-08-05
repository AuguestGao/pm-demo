import styled from "styled-components";

export const PageContainer = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 50px auto;
  /* max-width: 400px; */
  border: 2px solid black;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  padding: 25px 15px;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;
