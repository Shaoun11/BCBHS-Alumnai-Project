// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4dWXByLDgTdBBwPZGPZpSpJZvX6RbLeQ",
  authDomain: "cnceptual-project-51.firebaseapp.com",
  databaseURL: "https://cnceptual-project-51-default-rtdb.firebaseio.com",
  projectId: "cnceptual-project-51",
  storageBucket: "cnceptual-project-51.appspot.com",
  messagingSenderId: "710237726792",
  appId: "1:710237726792:web:09b34bc288552b55e9107d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;
