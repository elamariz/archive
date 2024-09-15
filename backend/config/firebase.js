// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "rare-archive.firebaseapp.com",
  projectId: "rare-archive",
  storageBucket: "rare-archive.appspot.com",
  messagingSenderId: "219736491875",
  appId: "1:219736491875:web:f7b52c5e38306755cdf556",
  measurementId: "G-L13FMMCT4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)