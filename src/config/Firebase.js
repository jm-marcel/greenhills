import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDAMD54r6ECALH2rjvuhMYNsZcCSsQQw0I",
  authDomain: "greenhills-1.firebaseapp.com",
  projectId: "greenhills-1",
  storageBucket: "greenhills-1.appspot.com",
  messagingSenderId: "702245784151",
  appId: "1:702245784151:web:e2d370d72d20ae9c61f112",
  measurementId: "G-8LD6GQ7GV7",
};

firebase.initializeApp(firebaseConfig);

// const database = firebase.firestore();

export default firebase;
