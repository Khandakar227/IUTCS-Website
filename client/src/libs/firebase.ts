// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN2at0WOPFzzU6aK0pBfwGNiX3Rxq_jyU",
  authDomain: "iutcs-a3c99.firebaseapp.com",
  projectId: "iutcs-a3c99",
  storageBucket: "iutcs-a3c99.appspot.com",
  messagingSenderId: "1007570644435",
  appId: "1:1007570644435:web:2a1839c2a25eafbf261326",
  measurementId: "G-33CG03203Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);