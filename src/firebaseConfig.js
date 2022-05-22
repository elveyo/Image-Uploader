// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoC12BAwOCurq7ch3EGK7XTghVWnHRkiM",
  authDomain: "image-uploader-8741b.firebaseapp.com",
  projectId: "image-uploader-8741b",
  storageBucket: "image-uploader-8741b.appspot.com",
  messagingSenderId: "599948981311",
  appId: "1:599948981311:web:4aa55d1b8a9ab53a40348a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
