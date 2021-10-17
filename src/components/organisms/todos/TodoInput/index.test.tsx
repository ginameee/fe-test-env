import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent, waitFor } from "@testing-library/dom";
import TodoInput from "./index";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { getInitialState, TState } from "@/store/todos";
import { actions, TRootState } from "@/store";

const createStore = configureStore<TRootState>([]);
let rootStore!: MockStoreEnhanced<TRootState>;
let todosState!: TState;

describe("organisms/TodoInput", () => {
  beforeEach(async () => {
    rootStore = createStore({
      todos: getInitialState(),
    });
    todosState = rootStore.getState().todos;
    rootStore.dispatch = jest.fn();

    render(
      <Provider store={rootStore}>
        <TodoInput />
      </Provider>
    );
  });

  test("추가버튼 클릭시 add 이벤트를 dispatch 합니다.", async () => {
    const submitEl = screen.getByTestId("todo-submit-btn");
    fireEvent.input(screen.getByTestId("todo-title-input"), {
      target: {
        value: "test title",
      },
    });

    fireEvent.input(screen.getByTestId("todo-content-input"), {
      target: {
        value: "test content",
      },
    });

    fireEvent.submit(submitEl);

    await waitFor(() => {
      expect(rootStore.dispatch).toBeCalledWith(
        actions.todos.add({
          title: "test title",
          content: "test content",
        })
      );
    });
  });
});
