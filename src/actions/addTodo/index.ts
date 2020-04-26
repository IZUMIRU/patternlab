export const ADD_TODO: string = "ADD_TODO";

export type AddTodoType = {
  payload: {
    todo: string;
  };
  type: typeof ADD_TODO;
};

const addTodo: (todo: string) => AddTodoType = (todo) => ({
  payload: {
    todo,
  },
  type: ADD_TODO,
});

export default addTodo;
