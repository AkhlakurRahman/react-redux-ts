import { Todos, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todos[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.removeTodo:
      return state.filter((todo: Todos) => todo.id !== action.payload);
    default:
      return state;
  }
};
