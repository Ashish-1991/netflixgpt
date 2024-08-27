// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTCRBe9RgtiE_Zper43vsgxUfS94z3s-U",
  authDomain: "netflix-15308.firebaseapp.com",
  projectId: "netflix-15308", 
  storageBucket: "netflix-15308.appspot.com",
  messagingSenderId: "381068831563",
  appId: "1:381068831563:web:57a114b9f141705fd616ce",
  measurementId: "G-Z01388843B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// authentication 
export const auth = getAuth();
