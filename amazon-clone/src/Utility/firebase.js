import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBjLR7aV9TGvvC8h7pACSKjv1izAE6ZB8Y",
  authDomain: "clone-63448.firebaseapp.com",
  projectId: "clone-63448",
  storageBucket: "clone-63448.appspot.com",
  messagingSenderId: "610615519933",
  appId: "1:610615519933:web:20c5f7a5799c106ac2e5d4"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()