import React, { useCallback } from "react";
import { actions } from "@/store";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TTodoFormData } from "@/models/todos";

function TodoInput() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TTodoFormData>();
  const addTodo = useCallback((data) => {
    const { title, content } = data;
    dispatch(
      actions.todos.add({
        id: new Date().getTime(),
        title,
        content,
        completed: false,
      })
    );
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(addTodo)}>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="제목"
          />
          <input
            type="textarea"
            {...register("content", { required: true })}
            placeholder="내용"
          />
          <input type="submit" value="추가" />
        </form>
      </div>
    </div>
  );
}

export default React.memo(TodoInput);
