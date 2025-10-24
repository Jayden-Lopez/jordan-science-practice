// Practice/quiz logic functions

// Access global objects
const { database, ref, get } = window.FirebaseDB;
const {
    currentChapter,
    currentQuestionIndex,
    currentQuestions,
    sessionStats,
    userProgress,
    selectedAnswer,
    hintUsed,
    setCurrentChapter,
    setCurrentQuestionIndex,
    setCurrentQuestions,
    setSessionStats,
    setSelectedAnswer,
    setHintUsed,
    incrementQuestionIndex,
    incrementSessionCorrect,
    incrementSessionTotal
} = window.AppState;

// Render units and chapters
function renderUnits() {
    const container = document.getElementById('unitsContainer');
    container.innerHTML = '';

    Object.keys(curriculum).forEach(unitName => {
        const unitSection = document.createElement('div');
        unitSection.className = 'unit-section';

        const unitHeader = document.createElement('div');
        unitHeader.className = 'unit-header';
        unitHeader.textContent = unitName;
        unitSection.appendChild(unitHeader);

        const chaptersGrid = document.createElement('div');
        chaptersGrid.className = 'chapters-grid';

        curriculum[unitName].forEach(chapter => {
            const card = createChapterCard(chapter);
            chaptersGrid.appendChild(card);
        });

        unitSection.appendChild(chaptersGrid);
        container.appendChild(unitSection);
    });
}

// Create chapter card
function createChapterCard(chapter) {
    const card = document.createElement('div');
    const progress = window.AppState.userProgress[chapter.id] || { correct: 0, total: 0, accuracy: 0, mastered: false };
    const isLocked = chapter.id > 1 && !window.AppState.userProgress[chapter.id - 1]?.mastered;

    card.className = 'chapter-card';
    if (isLocked) card.classList.add('locked');
    if (progress.mastered) card.classList.add('mastered');

    card.innerHTML = `
        <div class="chapter-number">Chapter ${chapter.id}</div>
        <div class="chapter-title">${chapter.title}</div>
        <div class="chapter-progress">
            ${progress.total > 0 ? `${progress.correct}/${progress.total} correct (${Math.round(progress.accuracy)}%)` : 'Not started'}
        </div>
        ${isLocked ? '<div class="lock-icon">🔒</div>' : ''}
        ${progress.mastered ? '<div class="mastery-badge">✓ Mastered</div>' : ''}
    `;

    if (!isLocked) {
        card.onclick = () => startChapter(chapter.id);
    }

    return card;
}

// Start chapter practice
function startChapter(chapterId) {
    window.AppState.setCurrentChapter(chapterId);
    window.AppState.setCurrentQuestions([...questionBank[chapterId]].sort(() => Math.random() - 0.5));
    window.AppState.setCurrentQuestionIndex(0);
    window.AppState.setSessionStats({ correct: 0, total: 0 });

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('practiceScreen').style.display = 'block';

    // Find chapter name
    let chapterName = '';
    Object.values(curriculum).forEach(unit => {
        const chapter = unit.find(ch => ch.id === chapterId);
        if (chapter) chapterName = chapter.title;
    });

    document.getElementById('practiceChapterTitle').textContent = `Chapter ${chapterId}: ${chapterName}`;
    showQuestion();
}

// Show current question
function showQuestion() {
    if (window.AppState.currentQuestionIndex >= window.AppState.currentQuestions.length) {
        finishChapter();
        return;
    }

    const question = window.AppState.currentQuestions[window.AppState.currentQuestionIndex];
    document.getElementById('questionNumber').textContent = `Question ${window.AppState.currentQuestionIndex + 1} of ${window.AppState.currentQuestions.length}`;
    document.getElementById('practiceProgress').textContent = `Progress: ${window.AppState.sessionStats.correct}/${window.AppState.sessionStats.total} correct`;
    document.getElementById('questionText').textContent = question.question;

    const answerArea = document.getElementById('answerArea');
    answerArea.innerHTML = '';

    if (question.type === 'multiple') {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => selectOption(index);
            optionsContainer.appendChild(btn);
        });
        answerArea.appendChild(optionsContainer);
    } else if (question.type === 'truefalse') {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        ['True', 'False'].forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => selectOption(index === 0);
            optionsContainer.appendChild(btn);
        });
        answerArea.appendChild(optionsContainer);
    } else if (question.type === 'fillin') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'input-answer';
        input.id = 'fillInAnswer';
        input.placeholder = 'Type your answer here...';
        answerArea.appendChild(input);
    }

    document.getElementById('feedback').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';

    // Reset hint
    document.getElementById('hintDisplay').classList.remove('show');
    document.getElementById('hintDisplay').textContent = '';
    document.getElementById('hintBtn').disabled = false;
    document.getElementById('hintBtn').textContent = '💡 Show Hint';
    window.AppState.setHintUsed(false);
}

// Show hint
function showHint() {
    const question = window.AppState.currentQuestions[window.AppState.currentQuestionIndex];
    const hintDisplay = document.getElementById('hintDisplay');
    const hintBtn = document.getElementById('hintBtn');

    if (question.hint) {
        hintDisplay.textContent = question.hint;
        hintDisplay.classList.add('show');
        hintBtn.disabled = true;
        hintBtn.textContent = '💡 Hint Shown';
        window.AppState.setHintUsed(true);
    }
}

// Select option
function selectOption(index) {
    window.AppState.setSelectedAnswer(index);
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
}

// Submit answer
function submitAnswer() {
    const question = window.AppState.currentQuestions[window.AppState.currentQuestionIndex];
    let isCorrect = false;
    let userAnswer = null;

    if (question.type === 'multiple' || question.type === 'truefalse') {
        if (window.AppState.selectedAnswer === null) {
            alert('Please select an answer!');
            return;
        }
        userAnswer = window.AppState.selectedAnswer;
        isCorrect = window.AppState.selectedAnswer === question.correct;
    } else if (question.type === 'fillin') {
        userAnswer = document.getElementById('fillInAnswer').value.trim().toLowerCase();
        if (!userAnswer) {
            alert('Please enter an answer!');
            return;
        }
        isCorrect = userAnswer === question.correct.toLowerCase();
    }

    window.AppState.incrementSessionTotal();
    if (isCorrect) window.AppState.incrementSessionCorrect();

    // Track incorrect answers
    if (!isCorrect) {
        if (!window.AppState.userProgress[window.AppState.currentChapter]) {
            window.AppState.userProgress[window.AppState.currentChapter] = {
                correct: 0,
                total: 0,
                accuracy: 0,
                mastered: false,
                incorrectAnswers: []
            };
        }
        if (!window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers) {
            window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers = [];
        }

        let userAnswerText = '';
        let correctAnswerText = '';

        if (question.type === 'multiple') {
            userAnswerText = question.options[userAnswer];
            correctAnswerText = question.options[question.correct];
        } else if (question.type === 'truefalse') {
            userAnswerText = userAnswer ? 'True' : 'False';
            correctAnswerText = question.correct ? 'True' : 'False';
        } else {
            userAnswerText = userAnswer;
            correctAnswerText = question.correct;
        }

        const incorrectRecord = {
            question: question.question,
            userAnswer: userAnswerText,
            correctAnswer: correctAnswerText,
            date: new Date().toLocaleDateString(),
            hintUsed: window.AppState.hintUsed
        };

        window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers.unshift(incorrectRecord);
        // Keep only last 20 incorrect answers per chapter
        if (window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers.length > 20) {
            window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers =
                window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers.slice(0, 20);
        }
    }

    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
        feedback.textContent = '✓ Correct! Great job!';
    } else {
        if (question.type === 'multiple') {
            feedback.textContent = `✗ Not quite. The correct answer is: ${question.options[question.correct]}`;
        } else if (question.type === 'truefalse') {
            feedback.textContent = `✗ Not quite. The correct answer is: ${question.correct ? 'True' : 'False'}`;
        } else {
            feedback.textContent = `✗ Not quite. The correct answer is: ${question.correct}`;
        }
    }

    // Visual feedback on options
    if (question.type === 'multiple' || question.type === 'truefalse') {
        document.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.onclick = null;
            if (i === question.correct) {
                btn.classList.add('correct');
            } else if (i === window.AppState.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    }

    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    window.AppState.setSelectedAnswer(null);
}

// Next question
function nextQuestion() {
    window.AppState.incrementQuestionIndex();
    showQuestion();
}

// Finish chapter
function finishChapter() {
    // Update progress
    if (!window.AppState.userProgress[window.AppState.currentChapter]) {
        window.AppState.userProgress[window.AppState.currentChapter] = { correct: 0, total: 0, accuracy: 0, mastered: false, incorrectAnswers: [] };
    }
    if (!window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers) {
        window.AppState.userProgress[window.AppState.currentChapter].incorrectAnswers = [];
    }

    window.AppState.userProgress[window.AppState.currentChapter].correct += window.AppState.sessionStats.correct;
    window.AppState.userProgress[window.AppState.currentChapter].total += window.AppState.sessionStats.total;
    window.AppState.userProgress[window.AppState.currentChapter].accuracy = (window.AppState.userProgress[window.AppState.currentChapter].correct / window.AppState.userProgress[window.AppState.currentChapter].total) * 100;

    // Check for mastery (80% accuracy and at least 5 questions)
    if (window.AppState.userProgress[window.AppState.currentChapter].accuracy >= 80 && window.AppState.userProgress[window.AppState.currentChapter].total >= 5) {
        window.AppState.userProgress[window.AppState.currentChapter].mastered = true;
    }

    window.ProgressManager.saveProgress();

    const accuracy = Math.round((window.AppState.sessionStats.correct / window.AppState.sessionStats.total) * 100);
    const message = `Chapter Complete!\n\nYou got ${window.AppState.sessionStats.correct} out of ${window.AppState.sessionStats.total} correct (${accuracy}%)\n\n${
        window.AppState.userProgress[window.AppState.currentChapter].mastered ? '🎉 Chapter Mastered!' : 'Keep practicing to master this chapter!'
    }`;

    alert(message);
    exitPractice();
}

// Exit practice
function exitPractice() {
    document.getElementById('practiceScreen').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'block';
    renderUnits();
    updateStats();
}

// Update statistics
function updateStats() {
    let totalCorrect = 0;
    let totalQuestions = 0;
    let chaptersCompleted = 0;

    Object.values(window.AppState.userProgress).forEach(progress => {
        totalCorrect += progress.correct || 0;
        totalQuestions += progress.total || 0;
        if (progress.mastered) chaptersCompleted++;
    });

    document.getElementById('totalCorrect').textContent = totalCorrect;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('accuracy').textContent = totalQuestions > 0 ?
        Math.round((totalCorrect / totalQuestions) * 100) + '%' : '0%';
    document.getElementById('chaptersCompleted').textContent = chaptersCompleted;

    // Update streak
    const streakRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'science/streak');
    window.FirebaseDB.get(streakRef).then((snapshot) => {
        document.getElementById('currentStreak').textContent = snapshot.val() || 0;
    });
}

// Make functions available globally
window.PracticeManager = {
    renderUnits,
    updateStats,
    startChapter,
    exitPractice,
    showHint,
    submitAnswer,
    nextQuestion
};
