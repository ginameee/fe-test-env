import React from "react";
import { render, screen } from "@testing-library/react";
import TodoItem from "./index";
import { TTodo } from "@/models/todos";

describe("molecules/TodoItem", () => {
  const todo: TTodo = {
    id: new Date().getTime(),
    title: "test titl2",
    content: "test title",
    completed: true,
  };

  beforeEach(() => {
    render(<TodoItem data={todo} />);
  });

  test("타이틀영역에는 data.title이 렌더링 됩니다.", () => {
    const el = screen.getByTestId("todo-title");
    expect(el.innerHTML).toBe(todo.title);
  });

  test("컨텐츠영역에는 data.content가 렌더링 됩니다.", () => {
    const el = screen.getByTestId("todo-content");
    expect(el.innerHTML).toBe(todo.content);
  });

  test("체크박스의 체크여부는 data.completed에 따라 결정됩니다.", () => {
    const el: HTMLInputElement = screen.getByTestId(
      "todo-completed-cbx"
    ) as HTMLInputElement;
    expect(el.checked).toBe(todo.completed);
  });
});
