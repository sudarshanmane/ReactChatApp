// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgcVmyGkfHhIPA8ACfJXK0XqwAvv630OA",
  authDomain: "reactchat-56a23.firebaseapp.com",
  projectId: "reactchat-56a23",
  storageBucket: "reactchat-56a23.appspot.com",
  messagingSenderId: "932712606696",
  appId: "1:932712606696:web:f8741725a46059fe00925d",
  measurementId: "G-S9FXTPT01F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
