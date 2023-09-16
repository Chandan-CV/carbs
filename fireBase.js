// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBWouSwG31pXRdjvmd-R7HFPLaWKem2ms",

  authDomain: "pickup-lines-20318.firebaseapp.com",

  projectId: "pickup-lines-20318",

  storageBucket: "pickup-lines-20318.appspot.com",

  messagingSenderId: "1045550185460",

  appId: "1:1045550185460:web:e33b62e220eefa32ea57a1",

  measurementId: "G-3G48WK58R3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
