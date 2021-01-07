import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Eye from '../eye.png';
import {connect} from 'react-redux';
 
class Home extends Component {
    render() {
        console.log(this.props);

        const {home_posts} = this.props;

        console.log(home_posts);

        const posts = home_posts.length ? (
            home_posts.map(post => {
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
                {posts}
            </div>
        )
    };
};

/* To connect the Home component to the Redux store:

- If Home wants to access some data in the Redux store's state, it maps the state data to its props

- The mapStateToProps() function returns an object whose properties are added to Home's props

- In this case, there's only 1 property & that is home_posts

- home_posts is then assigned redux_posts from the Redux store's state (defined in rootReducer.js)

- Eventually home_posts is mapped to Home's props

- The object returned by mapStateToProps() is passed to the connect() function as its arg

- connect, when invoked, returns a higher-order component, that takes Home as its arg

- All of this is to make the connection between the data Home wants to get from the Redux store (redux_posts) &
  the property in Home's props to which the data is mapped (home_posts)
*/
const mapStateToProps = storeState => {
    return {home_posts: storeState.redux_posts};
};

export default connect(mapStateToProps)(Home);