import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJWsRZ_ZUWCngrsGtXzkgos7HL3AodYRk",
  authDomain: "homework-4-ee67d.firebaseapp.com",
  projectId: "homework-4-ee67d",
  storageBucket: "homework-4-ee67d.appspot.com",
  messagingSenderId: "190875574280",
  appId: "1:190875574280:web:5d95bd5f8cc1eaa951f1bd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
