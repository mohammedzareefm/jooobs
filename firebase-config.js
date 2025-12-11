// firebase-config.js - إعدادات Firebase من المشروع المنفرد
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// 🔥 إعدادات Firebase من مشروع imdex.html
const firebaseConfig = {
    apiKey: "AIzaSyB4b0m4nZ3uwg6oV9pAZwsSEPd6HMx8vzs",
    authDomain: "obs-82e8c.firebaseapp.com",
    databaseURL: "https://obs-82e8c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "obs-82e8c",
    storageBucket: "obs-82e8c.firebasestorage.app",
    messagingSenderId: "780885555766",
    appId: "1:780885555766:web:3dfb9ad3de11e4883bf697",
    measurementId: "G-QBFN260H69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Realtime Database
export const db = getFirestore(app);      // Firestore
export const storage = getStorage(app);
export const auth = getAuth(app);