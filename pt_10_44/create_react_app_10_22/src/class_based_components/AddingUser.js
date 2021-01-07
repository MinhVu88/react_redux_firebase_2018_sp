// should this be a container/class-based component or an UI/function-based component?
// user input in each input field needs to be stored locally on the component's state -> container
import React, {Component} from 'react';

export default class AddingUser extends Component {
    state = {
        name: null,
        age: null,
        birth_year: null,
        location: null
    };

    /*
     - When user types something in the input fields & submits that value, the handleChange() func fires

     - The func uses these input values to set/update the state's properties on the fly

     - This's done as the values of the input fields' id attributes & the properties' names are identical

     - The func keeps the values of the id attributes & properties in sync with each other

     - So in other words, {[e.target.id]: e.target.value} is equal {['name'/'age'/'birth_year'/'location']: user input}

     - And that's how setState() returns an object that has those properties with all the input values user provided

     - Also, even though there are multiple properties to update, the functionality to do so for each one is the same
    
     - That's why 1 func is enough for all those props 
    */
    handleChange = e => this.setState({[e.target.id]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();

        this.props.addUser(this.state); // the addUser() method from the parent component, App.js
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor='age'>Age:</label>
                    <input type='text' id='age' onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor='birth_year'>Birth year:</label>
                    <input type='text' id='birth_year' onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor='location'>Location:</label>
                    <input type='text' id='location' onChange={this.handleChange}/>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};
