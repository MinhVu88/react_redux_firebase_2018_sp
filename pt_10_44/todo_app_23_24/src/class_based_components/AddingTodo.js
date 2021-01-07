import React, { Component } from 'react';

export default class AddingTodo extends Component {
    state = {content: ''};

    handleChange = e => {
        this.setState({content: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);

        // props are received automatically between class-based components without importing them at the top of the file
        this.props.addTodo(this.state);
        
        // after each submission, the input field becomes blank by firstly making content equal to an empty string
        // secondly in the return statement of render(), the input element's value attribute is assigned the state's content
        // that way, when content is empty, the add input field is empty too  
        this.setState({content: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
