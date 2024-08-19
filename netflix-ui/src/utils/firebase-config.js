import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAt2pZAv16leY7KJkdkcHjAbfMHYq3c_UU",
  authDomain: "kachiflix-c9383.firebaseapp.com",
  projectId: "kachiflix-c9383",
  storageBucket: "kachiflix-c9383.appspot.com",
  messagingSenderId: "112531933276",
  appId: "1:112531933276:web:85f9e9e45ceb89fca73e99"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
