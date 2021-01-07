const intialState = {
    projects: [
        {id: '1', title: 'finish the react-redux-firebase project', content: 'blah blah blah'},
        {id: '2', title: 'move on to react hooks', content: 'blah blah blah'},
        {id: '3', title: 'move on to react native', content: 'blah blah blah'}
    ]
};

const projectReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);

            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('project creation error', action.error);

            return state;
        default:
            return state;
    };
};

export default projectReducer;