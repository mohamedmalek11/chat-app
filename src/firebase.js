// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClEGEzbNpzm_YtcauVfdHQw8YBAiGA_C4",
  authDomain: "chat-app-a3c42.firebaseapp.com",
  projectId: "chat-app-a3c42",
  storageBucket: "chat-app-a3c42.appspot.com",
  messagingSenderId: "304654635037",
  appId: "1:304654635037:web:606867ff65cbbac9c436f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)