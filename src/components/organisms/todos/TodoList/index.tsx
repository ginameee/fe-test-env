import TodoItem from "@/components/molecules/TodoItem";
import { TTodo } from "@/models/todos";
import { actions, TRootState } from "@/store";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state: TRootState) => state.todos);

  const handleCheckTodo = useCallback((id: number) => {
    dispatch(actions.todos.toggleComplete(id));
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    dispatch(actions.todos.remove(id));
  }, []);

  return (
    <ul data-testid="todo-list">
      {todosState.list.map((todo: TTodo) => (
        <li key={todo.id} data-testid="todo-item">
          <TodoItem
            data={todo}
            onCheck={handleCheckTodo}
            onDelete={handleDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
