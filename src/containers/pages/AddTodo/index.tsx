import React, { FC, useState } from "react";
import { connect } from "react-redux";
import addTodo from "actions/addTodo";
import { Dispatch } from "redux";
import Input from "components/atoms/forms/Input";

const AddTodo: FC<{ dispatch: Dispatch }> = ({ dispatch }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(addTodo(value));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

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
