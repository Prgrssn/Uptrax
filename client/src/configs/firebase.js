import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyATvibOUSzp1gJhU2Jses6zFX4iD8CIwdM",
  authDomain: "uptrax-3ee38.firebaseapp.com",
  projectId: "uptrax-3ee38",
  storageBucket: "uptrax-3ee38.appspot.com",
  messagingSenderId: "806658018579",
  appId: "1:806658018579:web:82762ba98e2766573d9ee6",
  measurementId: "G-K1VL2Q7747",
});

export const auth = app.auth();
export default app;

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
