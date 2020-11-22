import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

export const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = app.auth()

export const logout = function logout() {
    auth.signOut();
} 

export const roles = {
    ADMIN: 'ADMIN'
}

export default firebase;
export {
    firebase
}