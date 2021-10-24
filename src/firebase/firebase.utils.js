import firebase from 'firebase/compat';

const config = {
  apiKey: "AIzaSyDP3i4H61LU2e9l7r-XfDflTRAaCjegndI",
  authDomain: "crwn-db-fba0b.firebaseapp.com",
  projectId: "crwn-db-fba0b",
  storageBucket: "crwn-db-fba0b.appspot.com",
  messagingSenderId: "621683534018",
  appId: "1:621683534018:web:1ffb9032b64f67bc4d735b",
  measurementId: "G-2MYTYNB0L2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;