// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "houseestate-d63c4.firebaseapp.com",
  projectId: "houseestate-d63c4",
  storageBucket: "houseestate-d63c4.appspot.com",
  messagingSenderId: "355764462969",
  appId: "1:355764462969:web:cab6ad8d9737def89b7ba8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);