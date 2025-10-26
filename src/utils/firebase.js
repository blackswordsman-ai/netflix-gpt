// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWbizxOrXLOFiwliluv8IfdcBS8ckoQOg",
  authDomain: "netflix-gptt-a7571.firebaseapp.com",
  projectId: "netflix-gptt-a7571",
  storageBucket: "netflix-gptt-a7571.firebasestorage.app",
  messagingSenderId: "431203799203",
  appId: "1:431203799203:web:29271e27b6fc78e90caf16",
  measurementId: "G-KDV9LPJZLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()
