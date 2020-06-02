import { ADD_TODO, AddTodoType } from "actions/addTodo";

export type TodoState = {
  todo: string;
};

export const initialState: TodoState = { todo: "" };

const todo: (state: TodoState, { todo, type }: AddTodoType) => TodoState = (
  state = initialState,
  { todo, type }
) => {
  switch (type) {
    case ADD_TODO: {
      return { ...state, todo };
    }
    default: {
      return state;
    }
  }
};

export default todo;
