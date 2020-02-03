import { Todos, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/actionTypes';

export const todosReducer = (state: Todos[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    default:
      return state;
  }
};
