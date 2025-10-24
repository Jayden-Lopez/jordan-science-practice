// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, get, onValue, update } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs7_DlWthyuWVVLbYCo7SQHHt2Siw_DH0",
    authDomain: "jordan-math-practice.firebaseapp.com",
    databaseURL: "https://jordan-math-practice-default-rtdb.firebaseio.com",
    projectId: "jordan-math-practice",
    storageBucket: "jordan-math-practice.firebasestorage.app",
    messagingSenderId: "1011552332362",
    appId: "1:1011552332362:web:8bc57f83156212d63094b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export database and functions
export { database, ref, set, get, onValue, update };
