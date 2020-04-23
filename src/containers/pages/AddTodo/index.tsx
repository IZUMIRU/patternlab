import React, { FC, useState, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import addTodo from "actions/addTodo";
import Input from "components/atoms/forms/Input";

const AddTodo: FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => dispatch(addTodo(value)), [
    dispatch,
    value,
  ]);
  const handleChange = useCallback<
    (event: React.ChangeEvent<HTMLInputElement>) => void
  >((event) => setValue(event.target.value), []);

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

export default connect()(AddTodo);
