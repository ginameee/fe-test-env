import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos";

const store: any = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export const actions = {
  todos: todosSlice.actions,
};

export default store;
