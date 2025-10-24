(function() {
    // Firebase Configuration
    // Note: Firebase SDK is loaded from CDN in index.html (compat mode)
    // Access via global firebase object

    const firebaseConfig = {
        apiKey: "AIzaSyAs7_DlWthyuWVVLbYCo7SQHHt2Siw_DH0",
        authDomain: "jordan-math-practice.firebaseapp.com",
        databaseURL: "https://jordan-math-practice-default-rtdb.firebaseio.com",
        projectId: "jordan-math-practice",
        storageBucket: "jordan-math-practice.firebasestorage.app",
        messagingSenderId: "1011552332362",
        appId: "1:1011552332362:web:8bc57f83156212d63094b3"
    };

    // Initialize Firebase using global firebase object from CDN (compat mode)
    const app = firebase.initializeApp(firebaseConfig);
    const database = app.database(); // Use app.database() instead of firebase.database()

    // Helper functions to match the modular API style
    function ref(db, path) {
        return database.ref(path); // Use the database instance directly
    }

    function set(reference, data) {
        return reference.set(data);
    }

    function get(reference) {
        return reference.once('value');
    }

    function onValue(reference, callback) {
        return reference.on('value', callback);
    }

    function update(reference, data) {
        return reference.update(data);
    }

    // Make database and functions available globally
    window.FirebaseDB = {
        database: database,
        ref: ref,
        set: set,
        get: get,
        onValue: onValue,
        update: update
    };
})();
