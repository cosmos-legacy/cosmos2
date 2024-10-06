const questions = [
    {
        question: "What is an example of an exoplanet?",
        options: ["Mercury", "Sun", "Earth", "Kepler"],
        answer: 3 // Kepler
    },
    {
        question: "What is the total number of confirmed exoplanets as of August 24, 2023?",
        options: ["5,000", "5,502", "6,000", "4,500"],
        answer: 1 // 5,502
    },
    {
        question: "In what year were the first exoplanets confirmed?",
        options: ["1990", "1992", "1995", "2000"],
        answer: 1 // 1992
    },
    {
        question: "How many new exoplanets were announced on August 24, 2023?",
        options: ["5", "4", "6", "10"],
        answer: 2 // 6
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const feedbackElement = document.getElementById("feedback");
const gameOverElement = document.getElementById("game-over");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        feedbackElement.textContent = "Correct!";
        correctAnswers++;
    } else {
        feedbackElement.textContent = "Wrong!";
    }

    // Move to next question after a short delay
    setTimeout(() => {
        feedbackElement.textContent = "";
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

function endGame() {
    questionElement.textContent = "";
    optionButtons.forEach(button => button.style.display = "none");
    gameOverElement.textContent = `Game Over! You got ${correctAnswers} out of ${questions.length} correct.`;
}

// Start the quiz
loadQuestion();
