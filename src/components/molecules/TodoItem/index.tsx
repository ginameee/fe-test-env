import { TTodo } from "@/models/todos";
import React, { useCallback } from "react";

type TProps = {
  data: TTodo;
  onCheck: (id: number) => unknown;
  onDelete: (id: number) => unknown;
};
const TodoItem: React.FC<TProps> = ({ data, onCheck, onDelete }) => {
  const { title, content, completed } = data;

  const handleCheck = useCallback(() => {
    onCheck(data.id);
  }, [data]);

  const handleDelete = useCallback(() => {
    onDelete(data.id);
  }, [data]);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheck} />
      <h2>{title}</h2>
      <div>{content}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default React.memo(TodoItem);
