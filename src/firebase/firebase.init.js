import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXj9YN5zxKW60RkPhTBOAUkLkyz0X96WQ",
    authDomain: "photographer-ovilash.firebaseapp.com",
    projectId: "photographer-ovilash",
    storageBucket: "photographer-ovilash.appspot.com",
    messagingSenderId: "875143429253",
    appId: "1:875143429253:web:4ca348f6ba6137b938bdec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;