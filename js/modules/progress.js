(function() {
    // Progress tracking & Firestore operations

    // Load progress from Firestore
    function loadProgress() {
        const userDoc = window.FirebaseDB.doc(window.FirebaseDB.firestore, 'science-users', 'jordan');
        window.FirebaseDB.getDoc(userDoc).then((doc) => {
            if (doc.exists()) {
                const data = doc.data();
                if (data.progress) {
                    window.AppState.setUserProgress(data.progress);
                    // Ensure all chapters have incorrectAnswers array
                    for (let i = 1; i <= 15; i++) {
                        if (window.AppState.userProgress[i] && !window.AppState.userProgress[i].incorrectAnswers) {
                            window.AppState.userProgress[i].incorrectAnswers = [];
                        }
                    }
                } else {
                    // Initialize progress if document exists but no progress field
                    initializeProgress();
                }
            } else {
                // Initialize progress for all chapters
                initializeProgress();
            }
            window.PracticeManager.renderUnits();
            window.PracticeManager.updateStats();
        }).catch((error) => {
            console.error('Error loading progress:', error);
        });
    }

    // Initialize progress for new users
    function initializeProgress() {
        const newProgress = {};
        for (let i = 1; i <= 15; i++) {
            newProgress[i] = {
                correct: 0,
                total: 0,
                accuracy: 0,
                mastered: false,
                incorrectAnswers: []
            };
        }
        window.AppState.setUserProgress(newProgress);
        saveProgress();
    }

    // Save progress to Firestore
    function saveProgress() {
        const userDoc = window.FirebaseDB.doc(window.FirebaseDB.firestore, 'science-users', 'jordan');
        window.FirebaseDB.updateDoc(userDoc, {
            progress: window.AppState.userProgress
        }).catch((error) => {
            // If document doesn't exist, create it with setDoc
            if (error.code === 'not-found') {
                window.FirebaseDB.setDoc(userDoc, {
                    progress: window.AppState.userProgress,
                    streak: 0,
                    lastVisit: new Date().toDateString()
                });
            } else {
                console.error('Error saving progress:', error);
            }
        });
    }

    // Load parent settings
    function loadParentSettings() {
        const settingsDoc = window.FirebaseDB.doc(window.FirebaseDB.firestore, 'science-settings', 'parent');
        window.FirebaseDB.getDoc(settingsDoc).then((doc) => {
            if (doc.exists()) {
                window.AppState.setParentSettings(doc.data());
            } else {
                // Initialize with default settings
                window.FirebaseDB.setDoc(settingsDoc, window.AppState.parentSettings);
            }
        }).catch((error) => {
            console.error('Error loading parent settings:', error);
        });
    }

    // Check daily streak
    function checkDailyStreak() {
        const today = new Date().toDateString();
        const userDoc = window.FirebaseDB.doc(window.FirebaseDB.firestore, 'science-users', 'jordan');

        window.FirebaseDB.getDoc(userDoc).then((doc) => {
            const data = doc.exists() ? doc.data() : {};
            const lastVisit = data.lastVisit;
            const currentStreak = data.streak || 0;

            if (lastVisit !== today) {
                let newStreak = 1;

                if (lastVisit) {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);

                    if (lastVisit === yesterday.toDateString()) {
                        newStreak = currentStreak + 1;
                    }
                }

                // Update lastVisit and streak
                if (doc.exists()) {
                    window.FirebaseDB.updateDoc(userDoc, {
                        lastVisit: today,
                        streak: newStreak
                    });
                } else {
                    window.FirebaseDB.setDoc(userDoc, {
                        lastVisit: today,
                        streak: newStreak,
                        progress: {}
                    });
                }
            }
        }).catch((error) => {
            console.error('Error checking daily streak:', error);
        });
    }

    // Make functions available globally
    window.ProgressManager = {
        loadProgress,
        saveProgress,
        loadParentSettings,
        checkDailyStreak
    };
})();
