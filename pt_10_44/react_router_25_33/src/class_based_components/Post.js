import React, { Component } from 'react';
import axios from 'axios';

export default class Post extends Component {
    state = {post: null}

    /*
    - componentDidMount() should be where & when route parameters are identified

    - When a component's used as a Route (like those defined in App.js), 
      it automatically gets access to the Route object's info (provided by React Router) on its props

    - Use that extra info to identify the route param 

    - The match, params properties are from this.props/Route info, post_id is the route param's name defined in App.js

    - Also, child-class-based components automatically get props from their parent-class-based components
    */
    componentDidMount() {
        console.log(this.props);

        let postID = this.props.match.params.post_id;

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
             .then(response => {
                this.setState({post: response.data});

                console.log(response);
            });
    };

    render() {
        const post = this.state.post ? (
            <div className='post'>
                <h4 className='center'>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (<div className='center'>Loading post....</div>);
        
        return (<div className='container'>{post}</div>)
    };
}
