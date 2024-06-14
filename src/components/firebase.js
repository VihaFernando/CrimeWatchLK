// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDREWDeVLGC6MmL0cbQNKpoYoMKRv_aMBE",
  authDomain: "cybercrimereporting-56e15.firebaseapp.com",
  projectId: "cybercrimereporting-56e15",
  storageBucket: "cybercrimereporting-56e15.appspot.com",
  messagingSenderId: "259748660741",
  appId: "1:259748660741:web:52a868af927dca307b3e6c",
  measurementId: "G-9XE9DF4HDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);