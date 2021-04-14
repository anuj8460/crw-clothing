import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyQizcdkiKWcuu3MUC_F6NlMi3P9BVPOY",
  authDomain: "cwrn-db-6b634.firebaseapp.com",
  projectId: "cwrn-db-6b634",
  storageBucket: "cwrn-db-6b634.appspot.com",
  messagingSenderId: "283720481265",
  databaseURL: "https://cwrn-db-6b634.firebaseio.com",
  appId: "1:283720481265:web:20db54db02d995ecdfec50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;