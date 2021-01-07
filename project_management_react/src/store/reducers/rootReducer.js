import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';

// in the redux store's state object, the properties (redux_auth & redux_project) correspond to authReducer & projectReducer
// in return, these reducers update info on the properties within the state object
// inside combineReducers(), these 2 reducers are combined together as an object which's then assigned to rootReducer
const rootReducer = combineReducers({
    redux_auth: authReducer, 
    redux_project: projectReducer
});

export default rootReducer;