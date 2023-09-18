// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nextblog-399205.firebaseapp.com",
  projectId: "nextblog-399205",
  storageBucket: "nextblog-399205.appspot.com",
  messagingSenderId: "807433879294",
  appId: "1:807433879294:web:2eb2b542a62b0db05eafaf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
