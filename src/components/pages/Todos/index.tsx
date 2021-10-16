import React from "react";
import TodoInput from "@/components/organisms/todos/TodoInput";
import TodoList from "@/components/organisms/todos/TodoList";

function TodosPage() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default React.memo(TodosPage);
