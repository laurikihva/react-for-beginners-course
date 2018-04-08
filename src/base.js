import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCD4fOBsAiu2YePwVQnqXIHNlk2-q_bg4",
    authDomain: "catch-of-the-day-lauri.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lauri.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;