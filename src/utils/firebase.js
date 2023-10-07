// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9hu132gnEbs41RApvLkrH302MZOupzXI",
  authDomain: "netflixgpt-909cd.firebaseapp.com",
  projectId: "netflixgpt-909cd",
  storageBucket: "netflixgpt-909cd.appspot.com",
  messagingSenderId: "1026071185724",
  appId: "1:1026071185724:web:3c2bc4ede8dc10bf67b639",
  measurementId: "G-R7XRNHT805",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
