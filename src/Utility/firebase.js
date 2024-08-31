import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDqkwyP2fwsUB-5d36ooU6e0NHtN5F8ArU",
  authDomain: "clone-933ec.firebaseapp.com",
  projectId: "clone-933ec",
  storageBucket: "clone-933ec.appspot.com",
  messagingSenderId: "799492081617",
  appId: "1:799492081617:web:10a4a9e6b5cb2121c482f0",
};
const app = firebase(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()