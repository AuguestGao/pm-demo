import styled from "styled-components";

export const HomeRootContainer = styled.div`
  width: 70%;
  min-width: 350px;
  /* max-width: 600px; */
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const CardPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TopContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  justify-content: space-around;

  button {
    height: 45px;
    width: 60px;
    padding: 5px 10px;
  }
`;

export const SearchBarContainer = styled.div`
  width: 50%;
`;
