// import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCDF_h_9kHHHyWku6RXdrSyUkH44eJCkbg",
  authDomain: "voting-system-5290c.firebaseapp.com",
  projectId: "voting-system-5290c",
  storageBucket: "voting-system-5290c.appspot.com",
  messagingSenderId: "192699614743",
  appId: "1:192699614743:web:9e1f8f0e8cf266c0033e52"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
