// Progress tracking & Firebase operations
import { database, ref, set, get } from '../config/firebase.js';
import { userProgress, setUserProgress, parentSettings, setParentSettings } from './state.js';
import { renderUnits, updateStats } from './practice.js';

// Load progress from Firebase
export function loadProgress() {
    const progressRef = ref(database, 'science/progress');
    get(progressRef).then((snapshot) => {
        if (snapshot.exists()) {
            setUserProgress(snapshot.val());
            // Ensure all chapters have incorrectAnswers array
            for (let i = 1; i <= 15; i++) {
                if (userProgress[i] && !userProgress[i].incorrectAnswers) {
                    userProgress[i].incorrectAnswers = [];
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
            setUserProgress(newProgress);
            saveProgress();
        }
        renderUnits();
        updateStats();
    }).catch((error) => {
        console.error('Error loading progress:', error);
    });
}

// Save progress to Firebase
export function saveProgress() {
    const progressRef = ref(database, 'science/progress');
    set(progressRef, userProgress);
}

// Load parent settings
export function loadParentSettings() {
    const settingsRef = ref(database, 'science/parentSettings');
    get(settingsRef).then((snapshot) => {
        if (snapshot.exists()) {
            setParentSettings(snapshot.val());
        } else {
            set(settingsRef, parentSettings);
        }
    });
}

// Check daily streak
export function checkDailyStreak() {
    const today = new Date().toDateString();
    const lastVisitRef = ref(database, 'science/lastVisit');
    get(lastVisitRef).then((snapshot) => {
        const lastVisit = snapshot.val();
        if (lastVisit !== today) {
            set(lastVisitRef, today);

            const streakRef = ref(database, 'science/streak');
            get(streakRef).then((streakSnapshot) => {
                const currentStreak = streakSnapshot.val() || 0;
                if (!lastVisit) {
                    set(streakRef, 1);
                } else {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    if (lastVisit === yesterday.toDateString()) {
                        set(streakRef, currentStreak + 1);
                    } else {
                        set(streakRef, 1);
                    }
                }
            });
        }
    });
}
