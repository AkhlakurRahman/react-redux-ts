import React from 'react';
import './App.css';
import { Todos, fetchTodos, removeTodo } from './actions';
import { StoreState } from './reducers';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todos[];
  fetchTodos: Function;
  removeTodo: typeof removeTodo;
}

class _App extends React.Component<AppProps> {
  fetchTodosOnClick = (): void => {
    this.props.fetchTodos();
  };

  removeTodoOnClick = (id: number): void => {
    this.props.removeTodo(id);
  };

  renderTodoList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todos) => (
      <div key={todo.id} onClick={() => this.removeTodoOnClick(todo.id)}>
        {todo.title}
      </div>
    ));
  };

  render() {
    console.log(this.props.todos);

    return (
      <div className='App'>
        <button onClick={this.fetchTodosOnClick}>Fetch Todos</button>
        {this.renderTodoList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todos[] } => {
  return {
    todos: state.todos
  };
};

export const App = connect(mapStateToProps, { fetchTodos, removeTodo })(_App);
