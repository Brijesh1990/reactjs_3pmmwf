// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqDrfkxPb5xMscs1hn4eUobSsaWoZ0yMw",
  authDomain: "login-register-app-c55c5.firebaseapp.com",
  projectId: "login-register-app-c55c5",
  storageBucket: "login-register-app-c55c5.firebasestorage.app",
  messagingSenderId: "54158905298",
  appId: "1:54158905298:web:f3856210300e0af87ac20b",
  measurementId: "G-S118Q5YRGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default auth;