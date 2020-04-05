import { ADD_TODO, AddTodoType } from "actions/addTodo";

export interface State {
  [text: string]: string;
}

export const initialState: State = {};

const todo = (state = initialState, { type, payload }: AddTodoType): State => {
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
