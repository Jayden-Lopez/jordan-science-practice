(function() {
    // Firebase Configuration
    // Note: Firebase SDK is loaded from CDN in index.html (compat mode)
    // Access via global firebase object

    const firebaseConfig = {
        apiKey: "AIzaSyAs7_DlWthyuWVVLbYCo7SQHHt2Siw_DH0",
        authDomain: "jordan-math-practice.firebaseapp.com",
        projectId: "jordan-math-practice",
        storageBucket: "jordan-math-practice.firebasestorage.app",
        messagingSenderId: "1011552332362",
        appId: "1:1011552332362:web:8bc57f83156212d63094b3"
    };

    // Initialize Firebase using global firebase object from CDN (compat mode)
    const app = firebase.initializeApp(firebaseConfig);
    const firestore = app.firestore(); // Use app.firestore() for Firestore

    // Helper functions for Firestore operations
    function doc(db, collection, docId) {
        return firestore.collection(collection).doc(docId);
    }

    function getDoc(docRef) {
        return docRef.get().then(snapshot => {
            return {
                exists: () => snapshot.exists,
                data: () => snapshot.data()
            };
        });
    }

    function setDoc(docRef, data) {
        return docRef.set(data);
    }

    function updateDoc(docRef, data) {
        return docRef.update(data);
    }

    function onSnapshot(docRef, callback) {
        return docRef.onSnapshot((snapshot) => {
            callback({
                exists: () => snapshot.exists,
                data: () => snapshot.data()
            });
        });
    }

    // Make Firestore and functions available globally
    window.FirebaseDB = {
        firestore: firestore,
        doc: doc,
        getDoc: getDoc,
        setDoc: setDoc,
        updateDoc: updateDoc,
        onSnapshot: onSnapshot
    };
})();
