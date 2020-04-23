import { ADD_TODO, AddTodoType } from "actions/addTodo";

export interface todoState {
  [text: string]: string;
}

export const initialState: todoState = {};

const todo = (
  state = initialState,
  { type, payload }: AddTodoType
): todoState => {
  switch (type) {
    case ADD_TODO: {
      const { text } = payload;
      return { ...state, text };
    }
    default: {
      return state;
    }
  }
};

export default todo;
