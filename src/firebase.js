import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



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
export const db = getFirestore(app);