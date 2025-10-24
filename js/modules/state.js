// State Management - Application State
export let currentChapter = null;
export let currentQuestionIndex = 0;
export let currentQuestions = [];
export let sessionStats = {
    correct: 0,
    total: 0
};
export let userProgress = {};
export let parentSettings = {
    pinHash: hashPin("1234") // Default PIN: 1234
};
export let selectedAnswer = null;
export let hintUsed = false;

// Simple hash function for PIN
export function hashPin(pin) {
    let hash = 0;
    for (let i = 0; i < pin.length; i++) {
        hash = ((hash << 5) - hash) + pin.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash).toString();
}

// State setters
export function setCurrentChapter(chapter) {
    currentChapter = chapter;
}

export function setCurrentQuestionIndex(index) {
    currentQuestionIndex = index;
}

export function setCurrentQuestions(questions) {
    currentQuestions = questions;
}

export function setSessionStats(stats) {
    sessionStats = stats;
}

export function setUserProgress(progress) {
    userProgress = progress;
}

export function setParentSettings(settings) {
    parentSettings = settings;
}

export function setSelectedAnswer(answer) {
    selectedAnswer = answer;
}

export function setHintUsed(used) {
    hintUsed = used;
}

export function incrementQuestionIndex() {
    currentQuestionIndex++;
}

export function incrementSessionCorrect() {
    sessionStats.correct++;
}

export function incrementSessionTotal() {
    sessionStats.total++;
}
