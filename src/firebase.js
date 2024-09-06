


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { BASEURL } from "./data/dataApi.jsx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMEA9_mJV155UQLVOTvW9l959KVJK5bug",
  authDomain: `real-state-api-mocha.vercel.app/api/auth/google`,
  projectId: "mern-state-40a4f",
  storageBucket: "mern-state-40a4f.appspot.com",
  messagingSenderId: "798614973604",
  appId: "1:798614973604:web:308a1c41e64af4f9d0ca31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);