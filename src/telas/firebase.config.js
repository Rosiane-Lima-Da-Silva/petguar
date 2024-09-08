// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUsaJO8EWd0mjwU5eFtd7qJofUWBWW2b4",
  authDomain: "petguar-396b0.firebaseapp.com",
  projectId: "petguar-396b0",
  storageBucket: "petguar-396b0.appspot.com",
  messagingSenderId: "30401052844",
  appId: "1:30401052844:web:107527609d524555d35f09",
  measurementId: "G-6PQP2H1F1J"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);