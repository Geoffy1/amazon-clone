
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEpS_5geSB7Awp8wkF1w-C9LBO9_OqeHc",
  authDomain: "clone-145df.firebaseapp.com",
  projectId: "clone-145df",
  storageBucket: "clone-145df.appspot.com",
  messagingSenderId: "110403252177",
  appId: "1:110403252177:web:f9411334cc2f3dca72faf0",
  measurementId: "G-2MEF23LDV8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };