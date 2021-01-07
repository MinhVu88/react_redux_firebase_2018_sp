import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';

class ProjectCreation extends Component {
    state = {
        title: '',
        content: ''
    };

    handleChange = e => {
        console.log(e);

        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state,'|', this.props);

        // this.props.generateProject() -> dispatch() -> createProject() -> projectReducer() -> rootReducer()/combineReducers() -> createStore()
        this.props.generateProject(this.state);
    };

    render() {
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Create A New Project</h5>

                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='materialize-textarea' id='content' onChange={this.handleChange}></textarea>
                    </div>

                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
                    </div>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {generateProject: project => dispatch(createProject(project))}; // project === this.state
};

// the 1st param of connect() is the mapStateToProps() function, which isn't defined in this file, so null takes its place
export default connect(null, mapDispatchToProps)(ProjectCreation);