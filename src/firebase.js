// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqkNiuDoI_z9uz539zwsjvqPxkhU3zpZ8",
  authDomain: "linkedin-clone-320de.firebaseapp.com",
  projectId: "linkedin-clone-320de",
  storageBucket: "linkedin-clone-320de.appspot.com",
  messagingSenderId: "675852397495",
  appId: "1:675852397495:web:3358f505db52bc17db5632",
  measurementId: "G-FBX46XWPVB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
