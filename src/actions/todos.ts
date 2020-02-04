import { ActionTypes } from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todos[];
}

export interface RemoveTodoAction {
  type: ActionTypes.removeTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todos[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const removeTodo = (id: number): RemoveTodoAction => {
  return {
    type: ActionTypes.removeTodo,
    payload: id
  };
};
