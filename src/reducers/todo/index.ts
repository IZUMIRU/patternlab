import { ADD_TODO, AddTodoType } from "actions/addTodo";

export type TodoState = {
  todo: string;
};

export const initialState: TodoState = { todo: "" };

const todo: (
  state: TodoState,
  {
    payload: { todo },
    type,
  }: AddTodoType
) => TodoState = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const { todo } = payload;
      return { ...state, todo };
    }
    default: {
      return state;
    }
  }
};

export default todo;
