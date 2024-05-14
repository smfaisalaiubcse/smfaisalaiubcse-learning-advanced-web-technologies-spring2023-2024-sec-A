// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_VITE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_VITE_AUTHDOMAIN ,
    projectId: process.env.NEXT_PUBLIC_VITE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_VITE_STORAGEBUCKET ,
    messagingSenderId: process.env.NEXT_PUBLIC_VITE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;