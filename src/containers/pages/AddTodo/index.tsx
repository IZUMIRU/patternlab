import React, { FC } from "react";
import { connect } from "react-redux";
import addTodo from "actions/addTodo";

// TODO: 型修正
// TODO: ルーティング実装後スタイル当て
const AddTodo: FC = ({ dispatch }: any) => {
  let input: any;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect()(AddTodo);
