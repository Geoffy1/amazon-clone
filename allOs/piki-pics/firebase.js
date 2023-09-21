import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAnEYo_UuzOAuwia6Sry9ZFOP7W6xX7SY",
    authDomain: "pic-app-13be3.firebaseapp.com",
    projectId: "pic-app-13be3",
    storageBucket: "pic-app-13be3.appspot.com",
    messagingSenderId: "331670202098",
    appId: "1:331670202098:web:a7dbbb98840fa4fbcbd26b"
};

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};