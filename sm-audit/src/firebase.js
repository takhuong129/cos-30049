// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3XfFhm0wN4IGv3S1Gkl84TAHRZWtvX30",
  authDomain: "cos30049.firebaseapp.com",
  projectId: "cos30049",
  storageBucket: "cos30049.appspot.com",
  messagingSenderId: "779145451673",
  appId: "1:779145451673:web:b08be9a22fcc2005bdc008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);