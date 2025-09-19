import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkEvZDhQKO-izIMIhc3VXG-bJsuyKJ6dc",
  authDomain: "zaika-app-342eb.firebaseapp.com",
  projectId: "zaika-app-342eb",
  storageBucket: "zaika-app-342eb.firebasestorage.app",
  messagingSenderId: "895285034349",
  appId: "1:895285034349:web:848cc3d6d5d810b695ae64"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();






