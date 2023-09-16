// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkAH8cy3PX2Ih1ZYGlb7GZ8G5uTTzyz8k",
    authDomain: "carb-c6640.firebaseapp.com",
    projectId: "carb-c6640",
    storageBucket: "carb-c6640.appspot.com",
    messagingSenderId: "501858042664",
    appId: "1:501858042664:web:efc9c910acc2470ef8c61d",
    measurementId: "G-5Y9RW8MGG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
