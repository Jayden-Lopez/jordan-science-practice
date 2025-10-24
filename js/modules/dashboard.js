(function() {
    // Parent dashboard functions

    // Show parent dashboard
    function showParentDashboard() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('practiceScreen').style.display = 'none';
    document.getElementById('parentDashboard').style.display = 'block';
    document.getElementById('pinScreen').style.display = 'block';
    document.getElementById('dashboardContent').style.display = 'none';
    document.getElementById('pinInput').value = '';
}

// Verify PIN
function verifyPin() {
    const enteredPin = document.getElementById('pinInput').value;
    if (window.AppState.hashPin(enteredPin) === window.AppState.parentSettings.pinHash) {
        document.getElementById('pinScreen').style.display = 'none';
        document.getElementById('dashboardContent').style.display = 'block';
        renderProgressChart();
    } else {
        alert('Incorrect PIN. Please try again.');
        document.getElementById('pinInput').value = '';
    }
}

// Close parent dashboard
function closeParentDashboard() {
    document.getElementById('parentDashboard').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'block';
}

// Render progress chart
function renderProgressChart() {
    const chartContainer = document.getElementById('progressChart');
    chartContainer.innerHTML = '<h3>Chapter Progress</h3>';

    for (let i = 1; i <= 15; i++) {
        const progress = window.AppState.userProgress[i] || { correct: 0, total: 0, accuracy: 0, mastered: false, incorrectAnswers: [] };
        const item = document.createElement('div');
        item.className = 'chapter-progress-item';

        let chapterName = '';
        Object.values(curriculum).forEach(unit => {
            const chapter = unit.find(ch => ch.id === i);
            if (chapter) chapterName = chapter.title;
        });

        item.innerHTML = `
            <div style="flex: 1;">
                <strong>Ch ${i}: ${chapterName}</strong><br>
                ${progress.total > 0 ? `${progress.correct}/${progress.total} (${Math.round(progress.accuracy)}%)` : 'Not started'}
                ${progress.mastered ? ' ✓ Mastered' : ''}
                ${progress.incorrectAnswers && progress.incorrectAnswers.length > 0 ?
                    `<br><button class="btn btn-secondary" style="font-size: 0.8em; padding: 5px 10px; margin-top: 5px;" onclick="window.DashboardManager.showIncorrectAnswers(${i})">
                        View ${progress.incorrectAnswers.length} Incorrect Answer${progress.incorrectAnswers.length > 1 ? 's' : ''}
                    </button>` : ''}
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${Math.min(progress.accuracy, 100)}%"></div>
            </div>
        `;
        chartContainer.appendChild(item);
    }
}

// Show incorrect answers for a chapter
function showIncorrectAnswers(chapterId) {
    const progress = window.AppState.userProgress[chapterId];
    if (!progress || !progress.incorrectAnswers || progress.incorrectAnswers.length === 0) {
        alert('No incorrect answers recorded for this chapter.');
        return;
    }

    let chapterName = '';
    Object.values(curriculum).forEach(unit => {
        const chapter = unit.find(ch => ch.id === chapterId);
        if (chapter) chapterName = chapter.title;
    });

    let html = `
        <div class="incorrect-answers-section">
            <h3>Incorrect Answers - Chapter ${chapterId}: ${chapterName}</h3>
            <button class="btn btn-secondary" onclick="window.DashboardManager.renderProgressChart()" style="margin-bottom: 15px;">← Back to Progress</button>
    `;

    progress.incorrectAnswers.forEach((answer, index) => {
        html += `
            <div class="incorrect-answer-item">
                <strong>Question:</strong> ${answer.question}<br>
                <strong>Your Answer:</strong> ${answer.userAnswer}<br>
                <strong>Correct Answer:</strong> ${answer.correctAnswer}<br>
                ${answer.hintUsed ? '<em>💡 Hint was used</em><br>' : ''}
                <div class="incorrect-answer-date">Answered on: ${answer.date}</div>
            </div>
        `;
    });

    html += '</div>';
    document.getElementById('progressChart').innerHTML = html;
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
        if (confirm('This will delete all of Jordan\'s progress. Are you REALLY sure?')) {
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

            const progressRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/progress');
            window.FirebaseDB.set(progressRef, window.AppState.userProgress);

            const streakRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/streak');
            window.FirebaseDB.set(streakRef, 0);

            alert('All progress has been reset.');
            closeParentDashboard();
            window.PracticeManager.renderUnits();
            window.PracticeManager.updateStats();
        }
    }
}

// Change PIN
function changePin() {
    const newPin = prompt('Enter new 4-digit PIN:');
    if (newPin && newPin.length === 4 && !isNaN(newPin)) {
        window.AppState.parentSettings.pinHash = window.AppState.hashPin(newPin);
        const settingsRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/parentSettings');
        window.FirebaseDB.set(settingsRef, window.AppState.parentSettings);
        alert('PIN changed successfully!');
    } else {
        alert('Invalid PIN. Must be 4 digits.');
    }
}

    // Make functions available globally
    window.DashboardManager = {
        showParentDashboard,
        verifyPin,
        closeParentDashboard,
        renderProgressChart,
        showIncorrectAnswers,
        resetProgress,
        changePin
    };
})();
