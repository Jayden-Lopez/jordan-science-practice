// Practice/quiz logic functions
import { database, ref, get } from '../config/firebase.js';
import { curriculum } from '../data/curriculum.js';
import { questionBank } from '../data/questions.js';
import {
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
} from './state.js';
import { saveProgress } from './progress.js';

// Render units and chapters
export function renderUnits() {
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
    const progress = userProgress[chapter.id] || { correct: 0, total: 0, accuracy: 0, mastered: false };
    const isLocked = chapter.id > 1 && !userProgress[chapter.id - 1]?.mastered;

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
export function startChapter(chapterId) {
    setCurrentChapter(chapterId);
    setCurrentQuestions([...questionBank[chapterId]].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setSessionStats({ correct: 0, total: 0 });

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
export function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        finishChapter();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById('practiceProgress').textContent = `Progress: ${sessionStats.correct}/${sessionStats.total} correct`;
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
    setHintUsed(false);
}

// Show hint
export function showHint() {
    const question = currentQuestions[currentQuestionIndex];
    const hintDisplay = document.getElementById('hintDisplay');
    const hintBtn = document.getElementById('hintBtn');

    if (question.hint) {
        hintDisplay.textContent = question.hint;
        hintDisplay.classList.add('show');
        hintBtn.disabled = true;
        hintBtn.textContent = '💡 Hint Shown';
        setHintUsed(true);
    }
}

// Select option
export function selectOption(index) {
    setSelectedAnswer(index);
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
}

// Submit answer
export function submitAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    let isCorrect = false;
    let userAnswer = null;

    if (question.type === 'multiple' || question.type === 'truefalse') {
        if (selectedAnswer === null) {
            alert('Please select an answer!');
            return;
        }
        userAnswer = selectedAnswer;
        isCorrect = selectedAnswer === question.correct;
    } else if (question.type === 'fillin') {
        userAnswer = document.getElementById('fillInAnswer').value.trim().toLowerCase();
        if (!userAnswer) {
            alert('Please enter an answer!');
            return;
        }
        isCorrect = userAnswer === question.correct.toLowerCase();
    }

    incrementSessionTotal();
    if (isCorrect) incrementSessionCorrect();

    // Track incorrect answers
    if (!isCorrect) {
        if (!userProgress[currentChapter]) {
            userProgress[currentChapter] = {
                correct: 0,
                total: 0,
                accuracy: 0,
                mastered: false,
                incorrectAnswers: []
            };
        }
        if (!userProgress[currentChapter].incorrectAnswers) {
            userProgress[currentChapter].incorrectAnswers = [];
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
            hintUsed: hintUsed
        };

        userProgress[currentChapter].incorrectAnswers.unshift(incorrectRecord);
        // Keep only last 20 incorrect answers per chapter
        if (userProgress[currentChapter].incorrectAnswers.length > 20) {
            userProgress[currentChapter].incorrectAnswers =
                userProgress[currentChapter].incorrectAnswers.slice(0, 20);
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
            } else if (i === selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    }

    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    setSelectedAnswer(null);
}

// Next question
export function nextQuestion() {
    incrementQuestionIndex();
    showQuestion();
}

// Finish chapter
function finishChapter() {
    // Update progress
    if (!userProgress[currentChapter]) {
        userProgress[currentChapter] = { correct: 0, total: 0, accuracy: 0, mastered: false, incorrectAnswers: [] };
    }
    if (!userProgress[currentChapter].incorrectAnswers) {
        userProgress[currentChapter].incorrectAnswers = [];
    }

    userProgress[currentChapter].correct += sessionStats.correct;
    userProgress[currentChapter].total += sessionStats.total;
    userProgress[currentChapter].accuracy = (userProgress[currentChapter].correct / userProgress[currentChapter].total) * 100;

    // Check for mastery (80% accuracy and at least 5 questions)
    if (userProgress[currentChapter].accuracy >= 80 && userProgress[currentChapter].total >= 5) {
        userProgress[currentChapter].mastered = true;
    }

    saveProgress();

    const accuracy = Math.round((sessionStats.correct / sessionStats.total) * 100);
    const message = `Chapter Complete!\n\nYou got ${sessionStats.correct} out of ${sessionStats.total} correct (${accuracy}%)\n\n${
        userProgress[currentChapter].mastered ? '🎉 Chapter Mastered!' : 'Keep practicing to master this chapter!'
    }`;

    alert(message);
    exitPractice();
}

// Exit practice
export function exitPractice() {
    document.getElementById('practiceScreen').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'block';
    renderUnits();
    updateStats();
}

// Update statistics
export function updateStats() {
    let totalCorrect = 0;
    let totalQuestions = 0;
    let chaptersCompleted = 0;

    Object.values(userProgress).forEach(progress => {
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
    const streakRef = ref(database, 'science/streak');
    get(streakRef).then((snapshot) => {
        document.getElementById('currentStreak').textContent = snapshot.val() || 0;
    });
}
