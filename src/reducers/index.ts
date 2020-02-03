import { todosReducer } from './todos';
import { combineReducers } from 'redux';
import { Todos } from '../actions';

export interface StoreState {
  todos: Todos[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
