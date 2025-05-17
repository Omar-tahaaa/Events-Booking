import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7f0Tl0HQjCqbob1llRmba3jotj-664r0",
  authDomain: "eventsbooking-1338e.firebaseapp.com",
  projectId: "eventsbooking-1338e",
  storageBucket: "eventsbooking-1338e.firebasestorage.app",
  messagingSenderId: "702331468754",
  appId: "1:702331468754:web:9d5b53cc9705240c82260b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
