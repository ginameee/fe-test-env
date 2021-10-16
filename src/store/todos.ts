import { TTodo } from "@/models/todos";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  list: TTodo[];
};

const getInitialState = (): TState => ({
  list: [],
});

const todosSlice = createSlice({
  name: "todo",
  initialState: getInitialState(),
  reducers: {
    add: (state: TState, action: PayloadAction<TTodo>) => {
      state.list.push(action.payload);
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
