// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgPjOEHqI7ijRGCTdkxkSpzZJaySYVTLM",
  authDomain: "quick-notes-668e3.firebaseapp.com",
  projectId: "quick-notes-668e3",
  storageBucket: "quick-notes-668e3.firebasestorage.app",
  messagingSenderId: "244527390742",
  appId: "1:244527390742:web:c3ffdb349f4626585e5537",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
