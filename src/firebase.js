import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBw_TmdoOFPojaPG5QZmzFX-3pgy_HLfrU",
  authDomain: "netflix-clone-c8eab.firebaseapp.com",
  projectId: "netflix-clone-c8eab",
  storageBucket: "netflix-clone-c8eab.appspot.com",
  messagingSenderId: "94959823473",
  appId: "1:94959823473:web:e4f2a1f0cb4872f670c9d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
