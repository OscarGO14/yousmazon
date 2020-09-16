import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-_aVOT6_0ft6PAqnMFnInOffSzGwEAjo",
  authDomain: "yousmazon.firebaseapp.com",
  databaseURL: "https://yousmazon.firebaseio.com",
  projectId: "yousmazon",
  storageBucket: "yousmazon.appspot.com",
  messagingSenderId: "585264985887",
  appId: "1:585264985887:web:777a715d8355d1e44ca22a",
  measurementId: "G-XR3YBEDC1V"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
