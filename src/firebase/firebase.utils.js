import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYsl8j5EqAu0A7T4gHLTa32tuK4YN1nIA",
    authDomain: "ecommerceapp-7aecc.firebaseapp.com",
    databaseURL: "https://ecommerceapp-7aecc.firebaseio.com",
    projectId: "ecommerceapp-7aecc",
    storageBucket: "ecommerceapp-7aecc.appspot.com",
    messagingSenderId: "867694438156",
    appId: "1:867694438156:web:c9c71450e85f6836610b29",
    measurementId: "G-35ZKEBC5MM"
};
// 1119591

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;