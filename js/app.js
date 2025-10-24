(function() {
    // Main application initialization

    // Initialize the app
    function init() {
        window.ProgressManager.loadProgress();
        window.ProgressManager.loadParentSettings();
        window.PracticeManager.renderUnits();
        window.PracticeManager.updateStats();
        window.ProgressManager.checkDailyStreak();
    }

    // Make functions available globally for HTML onclick handlers
    window.startChapter = window.PracticeManager.startChapter;
    window.exitPractice = window.PracticeManager.exitPractice;
    window.showHint = window.PracticeManager.showHint;
    window.submitAnswer = window.PracticeManager.submitAnswer;
    window.nextQuestion = window.PracticeManager.nextQuestion;
    window.showParentDashboard = window.DashboardManager.showParentDashboard;
    window.verifyPin = window.DashboardManager.verifyPin;
    window.closeParentDashboard = window.DashboardManager.closeParentDashboard;
    window.renderProgressChart = window.DashboardManager.renderProgressChart;
    window.showIncorrectAnswers = window.DashboardManager.showIncorrectAnswers;
    window.resetProgress = window.DashboardManager.resetProgress;
    window.changePin = window.DashboardManager.changePin;

    // Start the app when the page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
