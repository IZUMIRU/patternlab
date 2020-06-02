import React, { FC, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import addTodo from "actions/addTodo";
import Input from "components/atoms/forms/Input";

const AddTodo: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = useCallback<() => void>(() => dispatch(addTodo(todo)), [
    dispatch,
    todo,
  ]);
  const handleChange = useCallback<
    (event: React.ChangeEvent<HTMLInputElement>) => void
  >((event) => setTodo(event.target.value), []);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="todo"
        placeholder="Please enter something."
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
