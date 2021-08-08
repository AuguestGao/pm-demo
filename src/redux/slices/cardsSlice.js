import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    createCard: {
      reducer: (state, action) => {
        const { id, data } = action.payload;
        return { ...state, [id]: data };
      },
      prepare: (profile) => {
        return {
          payload: {
            id: nanoid(),
            data: {
              createdAt: new Date().toISOString(),
              profile: profile,
              todos: [],
            },
          },
        };
      },
    },

    updateProfile(state, action) {
      const { cardId, profile } = action.payload;
      return { ...state, [cardId]: { ...state[cardId], profile: profile } };
    },

    addTodo: {
      reducer: (state, action) => {
        const { cardId, todoData } = action.payload;
        const card = state[cardId];
        if (card) {
          card.todos.push(todoData);
        }
      },
      prepare: (data) => {
        const { cardId, newContent } = data;
        return {
          payload: {
            cardId: cardId,
            todoData: {
              id: nanoid(),
              content: newContent,
              isDone: false,
            },
          },
        };
      },
    },

    toggleTodoIsDone(state, action) {
      const { cardId, todoId } = action.payload;
      const card = state[cardId];
      if (card) {
        const todos = card.todos.map((todo) =>
          todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
        );
        card.todos = todos;
      }
    },

    deleteTodo(state, action) {
      const { cardId, todoId } = action.payload;
      const card = state[cardId];
      if (card) {
        card.todos = card.todos.filter((obj) => obj.id !== todoId);
      }
    },

    deleteCard(state, action) {
      const { cardId } = action.payload;
      if (state.hasOwnProperty(cardId)) {
        delete state[cardId];
      }
    },
  },
});

export const {
  createCard,
  updateProfile,
  addTodo,
  toggleTodoIsDone,
  deleteTodo,
  deleteCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
