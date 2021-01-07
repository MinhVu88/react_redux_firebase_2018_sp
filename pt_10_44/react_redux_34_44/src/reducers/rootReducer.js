const intialState = {
    redux_posts: [
        {id: '1', title: 'Var', body: 'Before the advent of ES6, var declarations ruled'},
        {id: '2', title: 'Let', body: 'let is now preferred for variable declaration'},
        {id: '3', title: 'Const', body: 'Variables declared with the const maintain constant values'}
    ]
};

// this's in the Redux store's state
const rootReducer = (state = intialState, action) => {
    console.log(action);

    /*
    - 1st, check the action type (only delete a post if the action type is DELETE_POST)
    
    - Then the Redux store's state is updated by using filter() to iterate over redux_posts in a non-destructive way (recommended)

    - filter() returns a new array (remaining_posts) based on the condition that if a post id in redux_posts is NOT equal to
      the removed_id received on action, that post is added to remaining_posts
    
    - If they're the SAME, then that post is filtered out & not added to remaining_posts (it's deleted)

    - Finally, a new object that represents the new state of the Redux store is returned using the spread operator (recommended)
    */
    if(action.type === 'DELETE_POST') {
        let remaining_posts = state.redux_posts.filter(post => action.removed_id !== post.id);

        return {...state, redux_posts: remaining_posts};
    }

    return state;
};

export default rootReducer;