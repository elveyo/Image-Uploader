// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFWDUTL7vQpVii2pKkZEXZJo7q0okYqo",
  authDomain: "image-uploader-1d6b9.firebaseapp.com",
  projectId: "image-uploader-1d6b9",
  storageBucket: "image-uploader-1d6b9.appspot.com",
  messagingSenderId: "390236670753",
  appId: "1:390236670753:web:f6ce246f98b0f2740c0c60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
