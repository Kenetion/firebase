


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtLgtSztGbT1mhSX5gVLmmKsxltyl1yN0",
  authDomain: "react-typescript-learn-b6307.firebaseapp.com",
  projectId: "react-typescript-learn-b6307",
  storageBucket: "react-typescript-learn-b6307.appspot.com",
  messagingSenderId: "315100350823",
  appId: "1:315100350823:web:1f1f12e2e98d3b1009c7c2",
  measurementId: "G-JNLQ4QF3DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();