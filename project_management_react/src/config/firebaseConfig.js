import firebase from 'firebase/app'; // "/app" means only importing the core/base functionalities/features of the firebase lib
import 'firebase/firestore'; // firestore is a NoSQL database
import 'firebase/auth';
import 'firebase/analytics';

export const firebaseConfig = {
    apiKey: "AIzaSyDBW40lpeMEc1eAd6lUiiCnTfUzI18DcUo",
    authDomain: "project-management-react-redux.firebaseapp.com",
    databaseURL: "https://project-management-react-redux.firebaseio.com",
    projectId: "project-management-react-redux",
    storageBucket: "project-management-react-redux.appspot.com",
    messagingSenderId: "510438855857",
    appId: "1:510438855857:web:60908551e29ca969b73e90",
    measurementId: "G-7FXBKXZNSL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({timestampsInSnapshots: true}); // this's no longer required & should be removed

firebase.firestore();

firebase.analytics();

export default firebase;