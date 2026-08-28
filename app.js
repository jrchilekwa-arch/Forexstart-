 // =====================================
// ForexStart - Main App
// =====================================

document.addEventListener("DOMContentLoaded", function () {

  // Start app
  setupNavigation();
  setupTheme();
   setupCalculator();
setupLearn();
setupQuiz();
updateProgress();

  // Show home screen
  showScreen("home");
});


// =====================================
// NAVIGATION
// =====================================

function showScreen(screenName) {

  const screens = document.querySelectorAll(".screen");

  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  const selectedScreen = document.querySelector(
    '.screen[data-screen="' + screenName + '"]'
  );

  if (selectedScreen) {
    selectedScreen.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const buttons = document.querySelectorAll(".bottom-nav button");

  buttons.forEach(function (button) {
    button.classList.remove("active");

    if (button.dataset.nav === screenName) {
      button.classList.add("active");
    }
  });
}


// Make navigation available to HTML onclick buttons
window.showScreen = showScreen;


// =====================================
// THEME
// =====================================

function setupTheme() {

  const themeButton = document.getElementById("themeBtn");

  if (!themeButton) return;

  themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeButton.textContent = "🌙";
    } else {
      themeButton.textContent = "☀️";
    }

  });
}


// =====================================
// PIP CALCULATOR
// =====================================

function setupCalculator() {

  const button = document.querySelector(
    'button[onclick*="calculatePips"]'
  );

  if (button) {
    button.addEventListener("click", calculatePips);
  }
}


function calculatePips() {

  const pair = document.getElementById("pair");
  const entry = document.getElementById("entry");
  const exit = document.getElementById("exit");
  const result = document.getElementById("pipResult");

  if (!entry || !exit || !result) return;

  const entryPrice = parseFloat(entry.value);
  const exitPrice = parseFloat(exit.value);

  if (isNaN(entryPrice) || isNaN(exitPrice)) {
    result.textContent = "Enter your prices above.";
    return;
  }

  let pipSize = 0.0001;

  if (pair && pair.value === "jpy") {
    pipSize = 0.01;
  }

  const pips = Math.abs(exitPrice - entryPrice) / pipSize;

  result.textContent = pips.toFixed(1) + " pips";
}

window.calculatePips = calculatePips;


// =====================================
// LEARN
// =====================================
 
 }function setupLearn() {
    const lessonList = document.getElementById("lessonList");

    if (!lessonList) return;

    const lessons = [
        {
            title: "What is Forex?",
            text: "Forex is the global market where currencies are bought and sold."
        },
        {
            title: "Currency Pairs",
            text: "Forex trading uses currency pairs such as EUR/USD and GBP/USD."
        },
        {
            title: "What is a Pip?",
            text: "A pip is a small unit used to measure price movement in a currency pair."
        },
        {
            title: "Buy & Sell",
            text: "Buy when you expect a currency pair to rise. Sell when you expect it to fall."
        },
        {
            title: "Risk Management",
            text: "Learn why protecting your trading account is important before risking real money."
        }
    ];

    lessonList.innerHTML = "";

    lessons.forEach(function(lesson, index) {

        const card = document.createElement("div");

        card.className = "quick-card";

        card.innerHTML =
            '<div class="quick-icon">📚</div>' +
            '<div>' +
            '<h3>' + (index + 1) + '. ' + lesson.title + '</h3>' +
            '<p>' + lesson.text + '</p>' +
            '</div>' +
            '<span class="arrow">›</span>';

        card.addEventListener("click", function() {
            alert(
                lesson.title +
                "\n\n" +
                lesson.text +
                "\n\nKeep learning and practicing!"
            );

            localStorage.setItem(
                "forexLessonComplete",
                "true"
            );

            updateProgress();
        });

        lessonList.appendChild(card);
    }}
 }                  


// =====================================
// QUIZ
// =====================================

const questions = [

  {
    question: "What is forex?",
    answers: [
      "A type of stock",
      "The foreign exchange market",
      "A savings account",
      "A cryptocurrency"
    ],
    correct: 1
  },

  {
    question: "What is EUR/USD?",
    answers: [
      "A currency pair",
      "A stock",
      "A cryptocurrency",
      "An index"
    ],
    correct: 0
  },

  {
    question: "What is a pip?",
    answers: [
      "A broker",
      "A currency",
      "A standard unit of price movement",
      "A bank"
    ],
    correct: 2
  },

  {
    question: "What is the first currency in a pair called?",
    answers: [
      "Quote currency",
      "Base currency",
      "Broker currency",
      "Spread"
    ],
    correct: 1
  },

  {
    question: "What should beginners do before risking real money?",
    answers: [
      "Use maximum leverage",
      "Borrow money",
      "Practice and learn first",
      "Trade without a plan"
    ],
    correct: 2
  }

];

let currentQuestion = 0;
let quizScore = 0;


function setupQuiz() {

  const quizCard = document.getElementById("quizCard");

  if (!quizCard) return;

  showQuestion();
}


function showQuestion() {

  const quizCard = document.getElementById("quizCard");

  if (!quizCard) return;

  if (currentQuestion >= questions.length) {
    showQuizResult();
    return;
  }

  const question = questions[currentQuestion];

  quizCard.innerHTML =
    '<h2>Question ' +
    (currentQuestion + 1) +
    ' of ' +
    questions.length +
    '</h2>' +

    '<h3>' +
    question.question +
    '</h3>';

  question.answers.forEach(function (answer, index) {

    const button = document.createElement("button");

    button.className = "option";
    button.textContent = answer;

    button.addEventListener("click", function () {

      if (index === question.correct) {
        quizScore++;
      }

      currentQuestion++;

      setTimeout(showQuestion, 300);

    });

    quizCard.appendChild(button);

  });
}


function showQuizResult() {

  const quizCard = document.getElementById("quizCard");

  if (!quizCard) return;

  const percentage = Math.round(
    (quizScore / questions.length) * 100
  );

  quizCard.innerHTML =
    '<h2>Quiz Complete 🎉</h2>' +
    '<h1>' +
    percentage +
    '%</h1>' +
    '<p>You scored ' +
    quizScore +
    ' out of ' +
    questions.length +
    '.</p>' +
    '<button class="primary" onclick="retryQuiz()">' +
    'Try Again' +
    '</button>';

  localStorage.setItem(
    "forexQuizScore",
    quizScore
  );

  updateProgress();
}


function retryQuiz() {

  currentQuestion = 0;
  quizScore = 0;

  showQuestion();
}

window.retryQuiz = retryQuiz;


// =====================================
// PROGRESS
// =====================================

function updateProgress() {

  const lessonComplete =
    localStorage.getItem("forexLessonComplete") === "true";

  const score =
    Number(localStorage.getItem("forexQuizScore") || 0);

  let progress = 0;

  if (lessonComplete) {
    progress += 50;
  }

  if (score > 0) {
    progress += Math.round(
      (score / questions.length) * 50
    );
  }

  const homeProgress =
    document.getElementById("homeProgress");

  const ringProgress =
    document.getElementById("ringProgress");

  const progressNumber =
    document.getElementById("progressNumber");

  if (homeProgress) {
    homeProgress.textContent = progress + "%";
  }

  if (ringProgress) {
    ringProgress.textContent = progress + "%";
  }

  if (progressNumber) {
    progressNumber.textContent = progress + "%";
  }
}
