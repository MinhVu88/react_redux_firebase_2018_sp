/*
- Thanks to the thunk middleware, the dispatch process from a component to its corresponding reducer can be temporarily halted

- During the halt process, async calls can be made to fetch external data from a database or API

- Once the fetch's complete & external data's returned, the dispatch process continues & 
  this time the action delivered to the reducer is packed with that external data
*/
export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore(); // get a reference to the firestore db

        // access the 'projects' collection in firestore db & add a new doc (an object) to it
        firestore.collection('projects').add({
          ...project,
          authorFirstName: 'Heinrich',
          authorLastName: 'Muller',
          authorID: 123,
          createdAt: new Date()
        }).then(() => dispatch({type: 'CREATE_PROJECT', project}))
          .catch(error => dispatch({type: 'CREATE_PROJECT_ERROR', error}));        
    };
};