import { ADD_TODO, AddTodoType } from "actions/addTodo";

export interface todoState {
  todo: string;
}

export const initialState: todoState = { todo: "" };

const todo = (
  state = initialState,
  { type, payload }: AddTodoType
): todoState => {
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
