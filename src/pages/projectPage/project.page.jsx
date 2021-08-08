import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import FormInput from "../../components/FormInput/FormInput.component";
import {
  addTodo,
  toggleTodoIsDone,
  deleteTodo,
  deleteCard,
} from "../../redux/slices/cardsSlice";

import {
  ProjectRootContainer,
  ProfileSection,
  TodoSection,
  MainContainer,
  InlineProfile,
  InlineTodo,
  DeleteTodoContainer,
  CompletedTodoTitle,
  DeleteCardContainer,
  DeletionBoxContainer,
} from "./project.page.styles";

const ProjectPage = ({ match }) => {
  const { id } = match.params;

  const [newContent, setNewContent] = useState("");
  const resetNewContent = () => setNewContent("");

  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const history = useHistory();
  const card = cards.hasOwnProperty(id) ? cards[id] : undefined;

  const [showDeletionBox, toggleDeletionBox] = useState(false);
  const [deletionInput, setDeletionInput] = useState("");

  const handleAddTodoClicked = (e) => {
    e.preventDefault();
    dispatch(addTodo({ cardId: id, newContent }));
    resetNewContent();
  };

  const handleDeleteTodoClicked = (e) => {
    dispatch(deleteTodo({ cardId: id, todoId: e.target.parentNode.id }));
  };

  const handleConfirmDeleteClicked = () => {
    if (deletionInput !== card.profile.name) {
      alert("Input does not match project name, deletetion failed");
    } else {
      dispatch(deleteCard({ cardId: id }));
      history.push("/");
    }
  };

  const handleDiscardDeteleClicked = () => {
    setDeletionInput("");
    toggleDeletionBox(false);
  };

  const renderTodos = () => {
    const renderActiveTodos = [];
    const renderCompleteTodos = [];

    for (const todo of card.todos) {
      todo.isDone
        ? renderCompleteTodos.push(
            <InlineTodo key={todo.id} id={todo.id}>
              <div className="group isDone">
                <input
                  type="checkbox"
                  id={todo.id}
                  onChange={() =>
                    dispatch(toggleTodoIsDone({ cardId: id, todoId: todo.id }))
                  }
                  defaultChecked={true}
                />
                <label htmlFor={todo.id} className="strikethrough label">
                  {todo.content}
                </label>
              </div>
              <DeleteTodoContainer
                onClick={handleDeleteTodoClicked}
                style={{ color: "gray" }}
              >
                &#x2716;
              </DeleteTodoContainer>
            </InlineTodo>
          )
        : renderActiveTodos.push(
            <InlineTodo key={todo.id} id={todo.id}>
              <div className="group">
                <input
                  type="checkbox"
                  id={todo.id}
                  onChange={() =>
                    dispatch(toggleTodoIsDone({ cardId: id, todoId: todo.id }))
                  }
                />
                <label htmlFor={todo.id} className="label">
                  {todo.content}
                </label>
              </div>
              <DeleteTodoContainer
                onClick={handleDeleteTodoClicked}
                style={{ color: "gray" }}
              >
                &#x2716;
              </DeleteTodoContainer>
            </InlineTodo>
          );
    }
    return (
      <>
        {renderActiveTodos}
        <CompletedTodoTitle>Completed</CompletedTodoTitle>
        {renderCompleteTodos}
      </>
    );
  };

  if (!card) {
    return <Redirect to="/404" />;
  }

  return (
    <ProjectRootContainer>
      <div className="project-name">{card.profile.name}</div>
      <MainContainer>
        <ProfileSection>
          <InlineProfile>
            CREATED AT: <span>{card.createdAt.slice(0, 10)}</span>
          </InlineProfile>
          {Object.entries(card.profile).map(([key, value]) =>
            key !== "customFields" ? (
              <InlineProfile key={key}>
                {key.toUpperCase()}: <span>{value ? value : "N/A"}</span>
              </InlineProfile>
            ) : (
              value.map((field) => (
                <InlineProfile key={field.id}>
                  {field.name.toUpperCase()}: {field.value}
                </InlineProfile>
              ))
            )
          )}
          <Button
            variant="outline-dark"
            onClick={() => history.push(`/profile/${id}`)}
          >
            Edit Profile
          </Button>
        </ProfileSection>
        <TodoSection>
          {card.todos.length ? renderTodos() : <h2>No todos</h2>}
          <InlineTodo>
            <FormInput
              label="New todo"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <Button
              className="p-0"
              size="lg"
              variant="white"
              style={{
                fontWeight: "bolder",
                fontSize: "2rem",
                boxShadow: "none",
              }}
              onClick={handleAddTodoClicked}
            >
              &#43;
            </Button>
          </InlineTodo>
        </TodoSection>
      </MainContainer>
      <DeleteCardContainer>
        {showDeletionBox ? (
          <DeletionBoxContainer>
            <h2 className="warning">Confirm Deletion</h2>
            <form>
              <FormInput
                label="Enter Project name"
                value={deletionInput}
                onChange={(e) => setDeletionInput(e.target.value)}
              />
            </form>
            <div className="button-group">
              <Button
                size="md"
                variant="danger"
                onClick={handleConfirmDeleteClicked}
              >
                CONFIRM
              </Button>
              <Button
                size="md"
                variant="dark"
                onClick={handleDiscardDeteleClicked}
              >
                DISCARD
              </Button>
            </div>
          </DeletionBoxContainer>
        ) : (
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => toggleDeletionBox(true)}
            id="button"
          >
            DELETE CARD
          </Button>
        )}
      </DeleteCardContainer>
    </ProjectRootContainer>
  );
};

export default ProjectPage;
