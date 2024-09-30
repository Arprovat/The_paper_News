// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_APIKEY,
  projectId: import.meta.env.VITE_APIKEY,
  storageBucket: import.meta.env.VITE_APIKEY,
  messagingSenderId: import.meta.env.VITE_APIKEY,
  appId: import.meta.env.VITE_APIKEY,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;