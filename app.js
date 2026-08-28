 // ================================
// ForexStart App
// ================================

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupTheme();
  setupCalculator();
  setupQuiz();
  updateProgress();
});


// ================================
// NAVIGATION
// ================================

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const screens = document.querySelectorAll(".screen");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.screen;

      if (!target) return;

      screens.forEach(screen => {
        screen.classList.remove("active");
      });

      const selectedScreen = document.querySelector(
        `.screen[data-screen="${target}"]`
      );

      if (selectedScreen) {
        selectedScreen.classList.add("active");
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      navButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
}


// ================================
// THEME BUTTON
// ================================

function setupTheme() {
  const themeBtn = document.getElementById("themeBtn");

  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
      document.body.classList.contains("light") ? "🌙" : "☀️";
  });
}


// ================================
// PIP CALCULATOR
// ================================

function setupCalculator() {
  const calculateButton = document.querySelector(
    'button[onclick*="calculate"]'
  );

  if (calculateButton) {
    calculateButton.addEventListener("click", calculatePips);
  }

  const entryInput = document.getElementById("entryPrice");
  const exitInput = document.getElementById("exitPrice");

  if (entryInput) {
    entryInput.addEventListener("keydown", event => {
      if (event.key === "Enter") calculatePips();
    });
  }

  if (exitInput) {
    exitInput.addEventListener("keydown", event => {
      if (event.key === "Enter") calculatePips();
    });
  }
}

function calculatePips() {
  const pairElement = document.getElementById("currencyPair");
  const entryElement = document.getElementById("entryPrice");
  const exitElement = document.getElementById("exitPrice");
  const resultElement = document.getElementById("pipResult");

  if (!entryElement || !exitElement || !resultElement) return;

  const entry = parseFloat(entryElement.value);
  const exit = parseFloat(exitElement.value);

  if (isNaN(entry) || isNaN(exit)) {
    resultElement.textContent = "Enter your prices above.";
    return;
  }

  const pair = pairElement ? pairElement.value : "EUR/USD";

  // JPY pairs normally use 0.01 as one pip.
  const pipSize = pair.includes("JPY") ? 0.01 : 0.0001;

  const pips = Math.abs(exit - entry) / pipSize;

  resultElement.textContent = `${pips.toFixed(1)} pips`;
}


// ================================
// QUIZ
// ================================

let currentQuestion = 0;
let quizScore = 0;

const questions = [
  {
    question: "What is forex?",
    answers: [
      "A type of stock",
      "The foreign exchange market",
      "A cryptocurrency",
      "A savings account"
    ],
    correct: 1
  },
  {
    question: "What is EUR/USD?",
    answers: [
      "A stock",
      "A currency pair",
      "A cryptocurrency",
      "An index"
    ],
    correct: 1
  },
  {
    question: "What is a pip?",
    answers: [
      "A type of broker",
      "A standard unit of price movement",
      "A currency",
      "A trading platform"
    ],
    correct: 1
  },
  {
    question: "What does the first currency in a pair represent?",
    answers: [
      "The quote currency",
      "The base currency",
      "The broker",
      "The spread"
    ],
    correct: 1
  },
  {
    question: "What should a beginner do before trading real money?",
    answers: [
      "Use maximum leverage",
      "Trade without a plan",
      "Practice and learn first",
      "Borrow money to trade"
    ],
    correct: 2
  }
];

function setupQuiz() {
  const options = document.querySelectorAll(".option");

  options.forEach(option => {
    option.addEventListener("click", () => {
      const answer = Number(option.dataset.answer);

      if (!isNaN(answer)) {
        answerQuestion(answer);
      }
    });
  });
}

function answerQuestion(answer) {
  if (currentQuestion >= questions.length) return;

  const question = questions[currentQuestion];

  const options = document.querySelectorAll(".option");

  options.forEach(option => {
    option.disabled = true;
  });

  if (answer === question.correct) {
    quizScore++;
  }

  currentQuestion++;

  setTimeout(() => {
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showQuizResult();
    }
  }, 500);
}

function showQuestion() {
  const question = questions[currentQuestion];

  const questionText = document.getElementById("questionText");
  const questionNumber = document.getElementById("questionNumber");
  const options = document.querySelectorAll(".option");

  if (questionText) {
    questionText.textContent = question.question;
  }

  if (questionNumber) {
    questionNumber.textContent =
      `QUESTION ${currentQuestion + 1} OF ${questions.length}`;
  }

  options.forEach((option, index) => {
    option.disabled = false;
    option.classList.remove("correct", "wrong");

    if (question.answers[index]) {
      option.textContent = question.answers[index];
    }
  });
}

function showQuizResult() {
  const quizContainer = document.getElementById("quizContainer");
  const resultContainer = document.getElementById("quizResult");
  const scoreElement = document.getElementById("quizScore");

  const percentage =
    Math.round((quizScore / questions.length) * 100);

  if (quizContainer) {
    quizContainer.classList.add("hidden");
  }

  if (resultContainer) {
    resultContainer.classList.remove("hidden");
  }

  if (scoreElement) {
    scoreElement.textContent = `${percentage}%`;
  }

  localStorage.setItem("forexQuizScore", quizScore);

  updateProgress();
}


// ================================
// RETRY QUIZ
// ================================

function retryQuiz() {
  currentQuestion = 0;
  quizScore = 0;

  const quizContainer = document.getElementById("quizContainer");
  const resultContainer = document.getElementById("quizResult");

  if (quizContainer) {
    quizContainer.classList.remove("hidden");
  }

  if (resultContainer) {
    resultContainer.classList.add("hidden");
  }

  showQuestion();
}


// ================================
// LESSON COMPLETION
// ================================

function completeLesson() {
  localStorage.setItem("forexLessonComplete", "true");

  updateProgress();

  alert("Lesson completed! 🎉");
}


// ================================
// PROGRESS
// ================================

function updateProgress() {
  const lessonComplete =
    localStorage.getItem("forexLessonComplete") === "true";

  const savedScore =
    Number(localStorage.getItem("forexQuizScore") || 0);

  let progress = 0;

  if (lessonComplete) {
    progress += 50;
  }

  if (savedScore > 0) {
    progress += Math.round(
      (savedScore / questions.length) * 50
    );
  }

  const progressNumbers =
    document.querySelectorAll(".progress-number");

  progressNumbers.forEach(element => {
    element.textContent = `${progress}%`;
  });

  const rings =
    document.querySelectorAll(".progress-ring");

  rings.forEach(ring => {
    ring.textContent = `${progress}%`;
  });
}


// ================================
// MAKE FUNCTIONS AVAILABLE
// ================================

window.calculatePips = calculatePips;
window.completeLesson = completeLesson;
window.retryQuiz = retryQuiz;
window.answerQuestion = answerQuestion;
/* ===== BOTTOM NAVIGATION FIX ===== */

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 82px;
  background: #111b2e;
  border-top: 1px solid #23324b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  padding: 8px 4px;
}

.bottom-nav button,
.bottom-nav .nav-btn {
  background: transparent;
  border: none;
  color: #91a0b8;
  font-size: 13px;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-width: 58px;
  height: 66px;
  padding: 4px;
  border-radius: 12px;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.bottom-nav button:hover,
.bottom-nav .nav-btn:hover {
  background: #162238;
}

.bottom-nav button.active,
.bottom-nav .nav-btn.active {
  color: #28d17c;
}

.bottom-nav button span,
.bottom-nav .nav-btn span {
  font-size: 26px;
  line-height: 28px;
}

.bottom-nav button:first-child,
.bottom-nav .nav-btn:first-child {
  color: #91a0b8;
}




function showScreen(screenName) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const selectedScreen = document.querySelector(
    `.screen[data-screen="${screenName}"]`
  );

  if (selectedScreen) {
    selectedScreen.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const navButtons = document.querySelectorAll(".bottom-nav button");

  navButtons.forEach(button => {
    button.classList.remove("active");

    if (button.dataset.nav === screenName) {
      button.classList.add("active");
    }
  });
}
 
 
