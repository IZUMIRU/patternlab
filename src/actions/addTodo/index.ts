export const ADD_TODO = "ADD_TODO";

export type AddTodoType = {
  payload: {
    text: string;
  };
  type: typeof ADD_TODO;
};

const addTodo = (text: string): AddTodoType => ({
  payload: {
    text,
  },
  type: ADD_TODO,
});

export default addTodo;
