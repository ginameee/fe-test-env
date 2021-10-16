import React, { useCallback } from "react";
import { actions, TRootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TTodoFormData } from "./type";

function TodosPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TTodoFormData>();
  const todosState = useSelector((state: TRootState) => state.todos);

  const addTodo = useCallback((data) => {
    console.log("::: data", data);
    // e.preventDefault();

    // const title = e.target.title.value;
    // const content = e.target.content.value;
    // dispatch(
    //   actions.todos.add({
    //     id: new Date().getTime(),
    //     title,
    //     content,
    //     completed: false,
    //   })
    // );
    // console.log(title, content);
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

export default TodosPage;
