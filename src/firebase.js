import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh_jwKFx2Ef8iHFTqs6Ko3M57rk5nJA_c",
  authDomain: "challenge-c7456.firebaseapp.com",
  databaseURL: "https://challenge-c7456-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "challenge-c7456",
  storageBucket: "challenge-c7456.appspot.com",
  messagingSenderId: "246137947913",
  appId: "1:246137947913:web:1b6bb93e6ebb5ced03f5d8",
  measurementId: "G-6T5RH12782"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
