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


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

export default firebase;