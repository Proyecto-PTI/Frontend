// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqa2OgqQh0Qxe2zcr_PTdjZBdZrspqmUU",
    authDomain: "pti-2025.firebaseapp.com",
    projectId: "pti-2025",
    storageBucket: "pti-2025.firebasestorage.app",
    messagingSenderId: "720384321128",
    appId: "1:720384321128:web:334a93c5eb21391a9bfddd",
    measurementId: "G-JT2X8KV28B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
