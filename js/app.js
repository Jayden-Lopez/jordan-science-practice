// Main application initialization
import { loadProgress, loadParentSettings, checkDailyStreak } from './modules/progress.js';
import { renderUnits, updateStats, startChapter, exitPractice, showHint, submitAnswer, nextQuestion } from './modules/practice.js';
import { showParentDashboard, verifyPin, closeParentDashboard, renderProgressChart, showIncorrectAnswers, resetProgress, changePin } from './modules/dashboard.js';

// Initialize the app
function init() {
    loadProgress();
    loadParentSettings();
    renderUnits();
    updateStats();
    checkDailyStreak();
}

// Make functions available globally for HTML onclick handlers
window.startChapter = startChapter;
window.exitPractice = exitPractice;
window.showHint = showHint;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.showParentDashboard = showParentDashboard;
window.verifyPin = verifyPin;
window.closeParentDashboard = closeParentDashboard;
window.renderProgressChart = renderProgressChart;
window.showIncorrectAnswers = showIncorrectAnswers;
window.resetProgress = resetProgress;
window.changePin = changePin;

// Start the app when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
