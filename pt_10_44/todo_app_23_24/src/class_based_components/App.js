import React, { Component } from 'react';
import Todos from '../stateless_UI_components/Todos';
import AddingTodo from './AddingTodo';

export default class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'practice coding'},
            {id: 2, content: 'practice guitar'}
        ]
    };

    // this method's passed to the Todos component
    deleteTodo = removed_id => {
        const remaining_items = this.state.todos.filter(todo => todo.id !== removed_id);

        console.log(remaining_items);

        this.setState({todos: remaining_items});
    };

    addTodo = todo => {
      todo.id = Math.round((Math.random() * 100) + 1);

      console.log(todo.id);

      let new_todos = [...this.state.todos, todo];

      this.setState({todos: new_todos});
    };

    render() {
        return (
            <div className='todo-app container'>
                <h1 className='center blue-text'>Todos List</h1>

                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                
                <AddingTodo addTodo={this.addTodo}/>
            </div>
        )
    };
};