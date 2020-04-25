import { ADD_TODO, AddTodoType } from "actions/addTodo";

export interface TodoState {
  todo: string;
}

export const initialState: TodoState = { todo: "" };

const todo = (
  state = initialState,
  { type, payload }: AddTodoType
): TodoState => {
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
