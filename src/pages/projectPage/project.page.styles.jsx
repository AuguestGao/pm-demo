import styled from "styled-components";

export const ProjectRootContainer = styled.div`
  width: 70%;
  min-width: 350px;
  /* max-width: 600px; */
  height: 100%;
  margin: 0 auto;

  .project-name {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    padding: 30px;
    border-bottom: 2px solid black;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px auto;
`;

export const ProfileSection = styled.div`
  box-sizing: border-box;
  border-right: 1px solid gray;
  padding-right: 10px;
`;

export const TodoSection = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
`;

export const InlineProfile = styled.p`
  .span {
    font-weight: bold;
  }
`;

export const InlineTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 2px;

  .group {
    margin: 0;
    padding: 0 1px;
    display: inline-block;
  }

  .isDone {
    color: gray;
  }

  .strikethrough {
    text-decoration: line-through;
  }

  .label {
    margin-left: 5px;
  }
`;

export const DeleteTodoContainer = styled.div`
  font-weight: bold;
  cursor: pointer;
`;
