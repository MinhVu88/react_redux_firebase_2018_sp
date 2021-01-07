import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'; // an action creator

class Post extends Component {
    /*
    - When the Delete Post button is clicked, the handleClick() method is called
    
    - Then the props object's deletePost() method is invoked, an action type called DELETE_POST
      along with a payload representing the removed post id are dispatched to rootReducer

    - The id property of the props object's post property is passed to deletePost(), 
      so that the currently open post can be identified as the removed post

    - After a post's deleted, user is redirected back to the home page
    */
    handleClick = () => {
        this.props.deletePost(this.props.post.id);

        this.props.history.push('/');
    };

    render() {
        console.log(this.props);

        const post = this.props.post ? (
            <div className='post'>
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className='center'>
                    <button className='btn grey' onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (<div className='center'>Loading post....</div>);
        
        return (<div className='container'>{post}</div>)
    };
};

/*
- originalProps refers to Post's props before the component's connection with the Redux store

- originalProps contains info about the Route parameter, from which the post id (route_param_id) can be retrieved

- route_param_id is then used to find a post (rootReducer.js) whose id is identical to it

- Then the matched redux_post is assigned to the returned object's post property of mapStateToProps()

- post is then mapped to Post's props

- The object returned by mapStateToProps() is passed to the connect() function as its arg

- connect, when invoked, returns a higher-order component, that takes Post as its arg
*/
const mapStateToProps = (storeState, preReduxProps) => {
    let route_param_id = preReduxProps.match.params.post_id;

    return {
        post: storeState.redux_posts.find(redux_post => redux_post.id === route_param_id)
    };
};

/* To dispatch an action from a component to the reducer

- The mapDispatchToProps() function's param is dispatch, which represents the dispatch() method of the Redux store 
  -> store.dispatch({type: action_type, payload: optional})

- mapDispatchToProps() returns another function called deletePost(), whose param is id representing a removed post

- Inside deletePost(), dispatch() is called or in other words, dispatching an action to reducer

- dispatch() takes an object as its param that contains properties representing the action type & the payload (the removed post's id)

- deletePost() is then mapped to Post's props, so it can be used in the component & 
  the DELETE_POST action is dispatched whenever deletePost() is called

- Like mapStateToProps(), deletePost() returned by mapDispatchToProps() is passed to the connect() function as its 2nd arg 
*/
const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);