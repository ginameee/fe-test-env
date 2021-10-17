import React, { FormEventHandler, useCallback, useState } from "react";
import { actions } from "@/store";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TTodoFormData } from "@/models/todos";

type TProps = {
  onSubmit?: any;
};
const TodoInput: React.FC<TProps> = ({ onSubmit = () => {} }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TTodoFormData>();

  const addTodo = useCallback((data) => {
    const { title, content } = data;

    dispatch(
      actions.todos.add({
        title,
        content,
      })
    );

    onSubmit();
    reset();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(addTodo)} data-testid="todo-form">
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="제목"
            data-testid="todo-title-input"
          />
          <input
            type="textarea"
            {...register("content", { required: true })}
            placeholder="내용"
            data-testid="todo-content-input"
          />
          <button type="submit" data-testid="todo-submit-btn">
            추가
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(TodoInput);
