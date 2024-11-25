// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdp9ah26vBnhE7e2vIlKpoTSXNQSIHb_M",
  authDomain: "peakpointpt-45b6c.firebaseapp.com",
  projectId: "peakpointpt-45b6c",
  storageBucket: "peakpointpt-45b6c.firebasestorage.app",
  messagingSenderId: "149960445628",
  appId: "1:149960445628:web:df499f02e5bfdb6737cab9",
  measurementId: "G-9GFZT9YF20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);