(function() {
    // Test Simulation Module
    // This module provides a timed test simulation feature where students can practice
    // for upcoming tests by selecting specific chapters

    // Simulation state
    let simulationChapters = [];
    let simulationQuestions = [];
    let simulationStartTime = null;
    let simulationResults = {
        correct: 0,
        total: 0,
        timeSpent: 0
    };

    // Show simulation selection screen
    function showSimulationMenu() {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('simulationMenu').style.display = 'block';
        renderSimulationChapters();
    }

    // Render chapter selection for simulation
    function renderSimulationChapters() {
        const container = document.getElementById('simulationChaptersContainer');
        container.innerHTML = '';

        const instructionDiv = document.createElement('div');
        instructionDiv.className = 'simulation-instructions';
        instructionDiv.innerHTML = `
            <h3>📝 Select Chapters for Your Test Simulation</h3>
            <p>Choose one or more chapters to practice. The simulation will randomly select questions from your chosen chapters.</p>
        `;
        container.appendChild(instructionDiv);

        Object.keys(window.curriculum).forEach(unitName => {
            const unitSection = document.createElement('div');
            unitSection.className = 'unit-section';

            const unitHeader = document.createElement('div');
            unitHeader.className = 'unit-header';
            unitHeader.textContent = unitName;
            unitSection.appendChild(unitHeader);

            const chaptersGrid = document.createElement('div');
            chaptersGrid.className = 'chapters-grid';

            window.curriculum[unitName].forEach(chapter => {
                const card = createSimulationChapterCard(chapter);
                chaptersGrid.appendChild(card);
            });

            unitSection.appendChild(chaptersGrid);
            container.appendChild(unitSection);
        });

        updateStartSimulationButton();
    }

    // Create selectable chapter card for simulation
    function createSimulationChapterCard(chapter) {
        const card = document.createElement('div');
        card.className = 'chapter-card simulation-chapter-card';

        const isSelected = simulationChapters.includes(chapter.id);
        if (isSelected) card.classList.add('selected');

        card.innerHTML = `
            <div class="chapter-number">Chapter ${chapter.id}</div>
            <div class="chapter-title">${chapter.title}</div>
            <div class="selection-indicator">${isSelected ? '✓ Selected' : 'Click to select'}</div>
        `;

        card.onclick = () => toggleChapterSelection(chapter.id, card);

        return card;
    }

    // Toggle chapter selection
    function toggleChapterSelection(chapterId, cardElement) {
        const index = simulationChapters.indexOf(chapterId);
        if (index > -1) {
            simulationChapters.splice(index, 1);
            cardElement.classList.remove('selected');
        } else {
            simulationChapters.push(chapterId);
            cardElement.classList.add('selected');
        }
        updateStartSimulationButton();
        renderSimulationChapters();
    }

    // Update start simulation button
    function updateStartSimulationButton() {
        const btn = document.getElementById('startSimulationBtn');
        if (simulationChapters.length > 0) {
            btn.disabled = false;
            btn.textContent = `Start Test (${simulationChapters.length} chapter${simulationChapters.length > 1 ? 's' : ''} selected)`;
        } else {
            btn.disabled = true;
            btn.textContent = 'Select at least one chapter';
        }
    }

    // Start the simulation
    function startSimulation() {
        if (simulationChapters.length === 0) {
            alert('Please select at least one chapter!');
            return;
        }

        // Collect questions from selected chapters
        simulationQuestions = [];
        simulationChapters.forEach(chapterId => {
            if (window.questionBank[chapterId]) {
                // Get all questions from this chapter and shuffle them
                const chapterQuestions = [...window.questionBank[chapterId]];
                simulationQuestions.push(...chapterQuestions);
            }
        });

        // Shuffle all questions
        simulationQuestions.sort(() => Math.random() - 0.5);

        // Limit to a reasonable number of questions (max 20)
        if (simulationQuestions.length > 20) {
            simulationQuestions = simulationQuestions.slice(0, 20);
        }

        // Initialize simulation state
        window.AppState.setCurrentQuestionIndex(0);
        window.AppState.setCurrentQuestions(simulationQuestions);
        simulationStartTime = Date.now();
        simulationResults = { correct: 0, total: 0, timeSpent: 0 };

        // Show simulation screen
        document.getElementById('simulationMenu').style.display = 'none';
        document.getElementById('simulationScreen').style.display = 'block';

        showSimulationQuestion();
    }

    // Show current simulation question
    function showSimulationQuestion() {
        if (window.AppState.currentQuestionIndex >= window.AppState.currentQuestions.length) {
            finishSimulation();
            return;
        }

        const question = window.AppState.currentQuestions[window.AppState.currentQuestionIndex];
        const timeElapsed = Math.floor((Date.now() - simulationStartTime) / 1000);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;

        document.getElementById('simulationProgress').textContent =
            `Question ${window.AppState.currentQuestionIndex + 1} of ${window.AppState.currentQuestions.length}`;
        document.getElementById('simulationTimer').textContent =
            `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('simulationQuestionText').textContent = question.question;

        const answerArea = document.getElementById('simulationAnswerArea');
        answerArea.innerHTML = '';

        if (question.type === 'multiple') {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            question.options.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option;
                btn.onclick = () => selectSimulationOption(index);
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
                btn.onclick = () => selectSimulationOption(index === 0);
                optionsContainer.appendChild(btn);
            });
            answerArea.appendChild(optionsContainer);
        } else if (question.type === 'fillin') {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'input-answer';
            input.id = 'simulationFillInAnswer';
            input.placeholder = 'Type your answer here...';
            answerArea.appendChild(input);
        }

        document.getElementById('simulationFeedback').style.display = 'none';
        document.getElementById('simulationSubmitBtn').style.display = 'inline-block';
        document.getElementById('simulationNextBtn').style.display = 'none';

        // Update timer every second
        setTimeout(() => {
            if (document.getElementById('simulationScreen').style.display === 'block') {
                showSimulationQuestion();
            }
        }, 1000);
    }

    // Select option in simulation
    function selectSimulationOption(index) {
        window.AppState.setSelectedAnswer(index);
        document.querySelectorAll('#simulationAnswerArea .option-btn').forEach((btn, i) => {
            btn.classList.remove('selected');
            if (i === index) btn.classList.add('selected');
        });
    }

    // Submit simulation answer
    function submitSimulationAnswer() {
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
            userAnswer = document.getElementById('simulationFillInAnswer').value.trim().toLowerCase();
            if (!userAnswer) {
                alert('Please enter an answer!');
                return;
            }
            isCorrect = userAnswer === question.correct.toLowerCase();
        }

        simulationResults.total++;
        if (isCorrect) simulationResults.correct++;

        const feedback = document.getElementById('simulationFeedback');
        feedback.style.display = 'block';
        feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

        if (isCorrect) {
            feedback.textContent = '✓ Correct!';
        } else {
            if (question.type === 'multiple') {
                feedback.textContent = `✗ Incorrect. The correct answer is: ${question.options[question.correct]}`;
            } else if (question.type === 'truefalse') {
                feedback.textContent = `✗ Incorrect. The correct answer is: ${question.correct ? 'True' : 'False'}`;
            } else {
                feedback.textContent = `✗ Incorrect. The correct answer is: ${question.correct}`;
            }
        }

        // Visual feedback on options
        if (question.type === 'multiple' || question.type === 'truefalse') {
            document.querySelectorAll('#simulationAnswerArea .option-btn').forEach((btn, i) => {
                btn.onclick = null;
                if (i === question.correct) {
                    btn.classList.add('correct');
                } else if (i === window.AppState.selectedAnswer && !isCorrect) {
                    btn.classList.add('incorrect');
                }
            });
        }

        document.getElementById('simulationSubmitBtn').style.display = 'none';
        document.getElementById('simulationNextBtn').style.display = 'inline-block';
        window.AppState.setSelectedAnswer(null);
    }

    // Next simulation question
    function nextSimulationQuestion() {
        window.AppState.incrementQuestionIndex();
        showSimulationQuestion();
    }

    // Finish simulation and show results
    function finishSimulation() {
        simulationResults.timeSpent = Math.floor((Date.now() - simulationStartTime) / 1000);

        document.getElementById('simulationScreen').style.display = 'none';
        document.getElementById('simulationResults').style.display = 'block';

        const accuracy = Math.round((simulationResults.correct / simulationResults.total) * 100);
        const minutes = Math.floor(simulationResults.timeSpent / 60);
        const seconds = simulationResults.timeSpent % 60;

        // Get chapter names
        const selectedChapterNames = simulationChapters.map(id => {
            let name = '';
            Object.values(window.curriculum).forEach(unit => {
                const chapter = unit.find(ch => ch.id === id);
                if (chapter) name = `Ch ${id}: ${chapter.title}`;
            });
            return name;
        }).join(', ');

        document.getElementById('simulationResultsContent').innerHTML = `
            <div class="results-header">
                <h2>🎯 Test Simulation Complete!</h2>
            </div>

            <div class="results-summary">
                <div class="result-stat">
                    <div class="result-value">${simulationResults.correct}/${simulationResults.total}</div>
                    <div class="result-label">Correct Answers</div>
                </div>
                <div class="result-stat">
                    <div class="result-value ${accuracy >= 80 ? 'success' : accuracy >= 60 ? 'warning' : 'error'}">${accuracy}%</div>
                    <div class="result-label">Accuracy</div>
                </div>
                <div class="result-stat">
                    <div class="result-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                    <div class="result-label">Time Taken</div>
                </div>
            </div>

            <div class="results-details">
                <h3>Test Details</h3>
                <p><strong>Chapters tested:</strong> ${selectedChapterNames}</p>
                <p><strong>Total questions:</strong> ${simulationResults.total}</p>
                <p><strong>Performance:</strong> ${
                    accuracy >= 90 ? '🌟 Excellent! You\'re well prepared!' :
                    accuracy >= 80 ? '👍 Good job! Keep practicing!' :
                    accuracy >= 70 ? '📚 Fair - Review the material and try again' :
                    '📖 Keep studying - You can do better!'
                }</p>
            </div>
        `;
    }

    // Exit simulation
    function exitSimulation() {
        document.getElementById('simulationScreen').style.display = 'none';
        document.getElementById('simulationMenu').style.display = 'none';
        document.getElementById('simulationResults').style.display = 'none';
        document.getElementById('mainMenu').style.display = 'block';

        // Reset simulation state
        simulationChapters = [];
        simulationQuestions = [];
        simulationStartTime = null;
        simulationResults = { correct: 0, total: 0, timeSpent: 0 };
    }

    // Make functions available globally
    window.SimulationManager = {
        showSimulationMenu,
        startSimulation,
        submitSimulationAnswer,
        nextSimulationQuestion,
        exitSimulation
    };
})();
