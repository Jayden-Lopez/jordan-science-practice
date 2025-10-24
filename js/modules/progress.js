// Progress tracking & Firebase operations

// Load progress from Firebase
function loadProgress() {
    const progressRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/progress');
    window.FirebaseDB.get(progressRef).then((snapshot) => {
        if (snapshot.exists()) {
            window.AppState.setUserProgress(snapshot.val());
            // Ensure all chapters have incorrectAnswers array
            for (let i = 1; i <= 15; i++) {
                if (window.AppState.userProgress[i] && !window.AppState.userProgress[i].incorrectAnswers) {
                    window.AppState.userProgress[i].incorrectAnswers = [];
                }
            }
        } else {
            // Initialize progress for all chapters
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
        window.PracticeManager.renderUnits();
        window.PracticeManager.updateStats();
    }).catch((error) => {
        console.error('Error loading progress:', error);
    });
}

// Save progress to Firebase
function saveProgress() {
    const progressRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/progress');
    window.FirebaseDB.set(progressRef, window.AppState.userProgress);
}

// Load parent settings
function loadParentSettings() {
    const settingsRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/parentSettings');
    window.FirebaseDB.get(settingsRef).then((snapshot) => {
        if (snapshot.exists()) {
            window.AppState.setParentSettings(snapshot.val());
        } else {
            window.FirebaseDB.set(settingsRef, window.AppState.parentSettings);
        }
    });
}

// Check daily streak
function checkDailyStreak() {
    const today = new Date().toDateString();
    const lastVisitRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/lastVisit');
    window.FirebaseDB.get(lastVisitRef).then((snapshot) => {
        const lastVisit = snapshot.val();
        if (lastVisit !== today) {
            window.FirebaseDB.set(lastVisitRef, today);

            const streakRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/streak');
            window.FirebaseDB.get(streakRef).then((streakSnapshot) => {
                const currentStreak = streakSnapshot.val() || 0;
                if (!lastVisit) {
                    window.FirebaseDB.set(streakRef, 1);
                } else {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    if (lastVisit === yesterday.toDateString()) {
                        window.FirebaseDB.set(streakRef, currentStreak + 1);
                    } else {
                        window.FirebaseDB.set(streakRef, 1);
                    }
                }
            });
        }
    });
}

// Make functions available globally
window.ProgressManager = {
    loadProgress,
    saveProgress,
    loadParentSettings,
    checkDailyStreak
};
