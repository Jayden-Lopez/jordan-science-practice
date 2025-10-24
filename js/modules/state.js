// State Management - Application State

// Simple hash function for PIN
function hashPin(pin) {
    let hash = 0;
    for (let i = 0; i < pin.length; i++) {
        hash = ((hash << 5) - hash) + pin.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash).toString();
}

// State variables
let currentChapter = null;
let currentQuestionIndex = 0;
let currentQuestions = [];
let sessionStats = {
    correct: 0,
    total: 0
};
let userProgress = {};
let parentSettings = {
    pinHash: hashPin("1234") // Default PIN: 1234
};
let selectedAnswer = null;
let hintUsed = false;

// State setters
function setCurrentChapter(chapter) {
    currentChapter = chapter;
}

function setCurrentQuestionIndex(index) {
    currentQuestionIndex = index;
}

function setCurrentQuestions(questions) {
    currentQuestions = questions;
}

function setSessionStats(stats) {
    sessionStats = stats;
}

function setUserProgress(progress) {
    userProgress = progress;
}

function setParentSettings(settings) {
    parentSettings = settings;
}

function setSelectedAnswer(answer) {
    selectedAnswer = answer;
}

function setHintUsed(used) {
    hintUsed = used;
}

function incrementQuestionIndex() {
    currentQuestionIndex++;
}

function incrementSessionCorrect() {
    sessionStats.correct++;
}

function incrementSessionTotal() {
    sessionStats.total++;
}

// Make state and functions available globally
window.AppState = {
    // State variables
    get currentChapter() { return currentChapter; },
    get currentQuestionIndex() { return currentQuestionIndex; },
    get currentQuestions() { return currentQuestions; },
    get sessionStats() { return sessionStats; },
    get userProgress() { return userProgress; },
    get parentSettings() { return parentSettings; },
    get selectedAnswer() { return selectedAnswer; },
    get hintUsed() { return hintUsed; },

    // State setters
    setCurrentChapter,
    setCurrentQuestionIndex,
    setCurrentQuestions,
    setSessionStats,
    setUserProgress,
    setParentSettings,
    setSelectedAnswer,
    setHintUsed,
    incrementQuestionIndex,
    incrementSessionCorrect,
    incrementSessionTotal,
    hashPin
};
