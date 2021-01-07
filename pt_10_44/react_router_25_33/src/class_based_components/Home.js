import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Eye from '../eye.png';
 
export default class Home extends Component {
    state = {
        posts: []
    };

    // In React component lifecycle, componentDidMount() fires when a component has mounted to the dom
    // it's also when data from an external source should be fetched, in this case, using Axios
    // only class-based components can use lifecycle hooks, functional components can't
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                 console.log(response);

                 this.setState({posts: response.data.slice(0, 10)});
            });
    };

    render() {
        const {posts} = this.state;

        /*
        - Check if posts contains any data as when the component 1st mounts to the dom, there's no data yet
        
        - Data is only fetched & available to use once axios finishes its task
        
        - Here a ternary operator is used to check if no data's available yet, 
          a JSX template containing the text 'no posts yet' is returned
        
        - If there's data returned, map() is used on posts to cycle thru those posts, fire a callback that
          returns JSX templates for each individual post 
        */
        const posts_list = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                        <img src={Eye} alt='the wired'/>
                        <div className='card-content'>
                            <Link to={'/' + post.id}> 
                                <span className='card-title red-text'>{post.title}</span> 
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (<div className='center'>No posts yet</div>);

        return (
            <div className='container home'>
                <h4 className='center'>Home</h4>
                <img src='https://cdnb.artstation.com/p/assets/images/images/000/676/909/large/tim-ridley-hacker-room-final.jpg?1430523049' alt='mancave'/>
                {posts_list}
            </div>
        )
    };
};
