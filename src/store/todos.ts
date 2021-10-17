import { TTodo } from "@/models/todos";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TState = {
  nextId: number;
  list: TTodo[];
};

export const getInitialState = (): TState => ({
  nextId: 0,
  list: [],
});

const todosSlice = createSlice({
  name: "todo",
  initialState: getInitialState(),
  reducers: {
    add: (
      state: TState,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      const { content, title } = action.payload;

      state.list.push({
        id: state.nextId++,
        title,
        content,
        completed: false,
      });
    },
    remove: (state: TState, action: PayloadAction<number>) => {
      const id = action.payload;
      state.list = state.list.filter((todo) => todo.id !== id);
    },
    toggleComplete: (state: TState, action: PayloadAction<number>) => {
      const id = action.payload;
      const selectedTodo = state.list.find((todo) => todo.id === id);

      if (selectedTodo) {
        selectedTodo.completed = !selectedTodo.completed;
      }
    },
  },
});

export default todosSlice;
