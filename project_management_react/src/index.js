import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'; // applyMiddleware() is a function that acts as a redux store enhancer
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; // thunk is a middleware
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {getFirestore, reduxFirestore, createFirestoreInstance} from 'redux-firestore';
import firebase, {firebaseConfig} from './config/firebaseConfig';

// multiple middlewares & store enhancers may be applied to the store to add extra functionalities to it
// the extra functionality: a function returned inside the action creators can interact with the database
const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
                                               reduxFirestore(firebase, firebaseConfig)
                                       )
);

const reactReduxFirebaseProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
