import React from "react";
import { render, screen, within } from "@testing-library/react";
import TodoList from "./index";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { getInitialState, TState } from "@/store/todos";
import { TRootState } from "@/store";

const createStore = configureStore<TRootState>([]);
let rootStore!: MockStoreEnhanced<TRootState>;
let todosState!: TState;

describe("organisms/TodoList", () => {
  beforeEach(() => {
    rootStore = createStore({
      todos: getInitialState(),
    });
    rootStore.dispatch = jest.fn();
    todosState = rootStore.getState().todos;

    render(
      <Provider store={rootStore}>
        <TodoList />
      </Provider>
    );
  });

  test("store의 리스트를 rendering 합니다.", () => {
    const listEl = screen.getByTestId("todo-list");
    let itemEls = within(listEl).queryAllByTestId("todo-item");

    expect(itemEls.length).toBe(todosState.list.length);
  });
});
