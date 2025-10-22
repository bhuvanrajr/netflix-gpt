// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfSCWB2mWvr8dLi-q6rOsS3uAivPepcic",
  authDomain: "netflix-gpt-87d4a.firebaseapp.com",
  projectId: "netflix-gpt-87d4a",
  storageBucket: "netflix-gpt-87d4a.firebasestorage.app",
  messagingSenderId: "562364078956",
  appId: "1:562364078956:web:114dfeb520847714e3f149",
  measurementId: "G-R22WRJLT1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();