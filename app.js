// ==========================================
// FOREXSTART APP
// ==========================================

const lessons = [
  {
    title: "What is Forex?",
    description: "Understand the foreign exchange market.",
    content: `
      <h1>What is Forex?</h1>

      <p>
        Forex, short for foreign exchange, is the global marketplace
        where currencies are bought and sold.
      </p>

      <h2>Example</h2>

      <p>
        When you trade EUR/USD, you are comparing the value of the
        euro against the US dollar.
      </p>

      <h2>Currency pairs</h2>

      <p>
        Forex is normally quoted in pairs. The first currency is the
        base currency and the second is the quote currency.
      </p>

      <div class="tip">
        <strong>💡 Beginner Tip</strong>
        <p>
          Don't rush into trading real money. Learn how the market works first.
        </p>
      </div>
    `
  },

  {
    title: "Currency Pairs",
    description: "Learn majors, minors and exotic pairs.",
    content: `
      <h1>Currency Pairs</h1>

      <p>
        Forex currencies are traded in pairs.
      </p>

      <h2>Major pairs</h2>

      <p>
        Major pairs include currencies such as USD, EUR, GBP and JPY.
      </p>

      <h2>Examples</h2>

      <ul>
        <li>EUR/USD</li>
        <li>GBP/USD</li>
        <li>USD/JPY</li>
        <li>USD/CHF</li>
      </ul>

      <div class="tip">
        <strong>💡 Remember</strong>
        <p>
          The first currency is the base currency.
        </p>
      </div>
    `
  },

  {
    title: "What is a Pip?",
    description: "Learn how traders measure price movement.",
    content: `
      <h1>What is a Pip?</h1>

      <p>
        A pip is a commonly used unit for measuring movement in a currency pair.
      </p>

      <h2>Example</h2>

      <p>
        If EUR/USD moves from 1.1000 to 1.1010,
        that is a movement of 10 pips.
      </p>

      <div class="tip">
        <strong>💡 Practice</strong>
        <p>
          Use the Pip Calculator in ForexStart to practice.
        </p>
      </div>
    `
  },

  {
    title: "Buy and Sell",
    description: "Understand long and short positions.",
    content: `
      <h1>Buy & Sell</h1>

      <h2>Buying</h2>

      <p>
        A trader may buy a currency pair when they expect the pair
        to rise in value.
      </p>

      <h2>Selling</h2>

      <p>
        A trader may sell a currency pair when they expect the pair
        to fall in value.
      </p>

      <div class="tip">
        <strong>⚠️ Important</strong>
        <p>
          Being correct about direction does not guarantee a profitable trade.
          Risk management is essential.
        </p>
      </div>
    `
  },

  {
    title: "Risk Management",
    description: "Learn why protecting your account matters.",
    content: `
      <h1>Risk Management</h1>

      <p>
        Risk management is one of the most important parts of trading.
      </p>

      <h2>Important concepts</h2>

      <ul>
        <li>Stop loss</li>
        <li>Position size</li>
        <li>Risk per trade</li>
        <li>Trading discipline</li>
      </ul>

      <div class="tip">
        <strong>🛡️ Golden Rule</strong>
        <p>
          Never risk money you cannot afford to lose.
        </p>
      </div>
    `
  },

  {
    title: "Leverage",
    description: "Understand leverage and why it increases risk.",
    content: `
      <h1>Leverage</h1>

      <p>
        Leverage allows traders to control a larger position with
        a smaller amount of capital.
      </p>

      <h2>Why it matters</h2>

      <p>
        Leverage can increase potential gains, but it can also
        increase losses.
      </p>

      <div class="tip">
        <strong>⚠️ Be Careful</strong>
        <p>
          Higher leverage does not mean easier profits.
        </p>
      </div>
    `
  }
];


// ==========================================
// STORAGE
// ==========================================

let completedLessons =
  JSON.parse(localStorage.getItem("forexCompletedLessons")) || [];


// ==========================================
// SCREEN NAVIGATION
// ==========================================

function showScreen(screenName) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const selected = document.getElementById(screenName);

  if (selected) {
    selected.classList.add("active");
  }

  document.querySelectorAll(".bottom-nav button").forEach(button => {
    button.classList.remove("active");

    if (button.dataset.screen === screenName) {
      button.classList.add("active");
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (screenName === "learn") {
    renderLessons();
  }

  if (screenName === "progress") {
    updateProgress();
  }

  if (screenName === "quiz") {
    startQuiz();
  }
}


// ==========================================
// LESSONS
// ==========================================

function renderLessons() {

  const list = document.getElementById("lessonList");

  list.innerHTML = "";

  lessons.forEach((lesson, index) => {

    const completed = completedLessons.includes(index);

    const card = document.createElement("div");

    card.className = "lesson-card";

    card.innerHTML = `
      <button onclick="openLesson(${index})">

        <div class="lesson-top">

          <div>
            <div class="lesson-number">
              LESSON ${index + 1}
            </div>

            <h3>${lesson.title}</h3>

            <p>${lesson.description}</p>
          </div>

          <div class="completed">
            ${completed ? "✓" : "›"}
          </div>

        </div>

      </button>
    `;

    list.appendChild(card);
  });
}


function openLesson(index) {

  const content = document.getElementById("lessonContent");

  content.innerHTML = `
    <div class="lesson-content">

      ${lessons[index].content}

      <button
        class="primary-btn"
        onclick="completeLesson(${index})">
        ${completedLessons.includes(index)
          ? "Lesson Completed ✓"
          : "Mark Lesson Complete ✓"}
      </button>

    </div>
  `;

  showScreen("lesson");
}


function completeLesson(index) {

  if (!completedLessons.includes(index)) {

    completedLessons.push(index);

    localStorage.setItem(
      "forexCompletedLessons",
      JSON.stringify(completedLessons)
    );
  }

  updateProgress();

  alert("Lesson completed! 🎉");

  showScreen("learn");
}


// ==========================================
// PROGRESS
// ==========================================

function updateProgress() {

  const total = lessons.length;

  const percentage =
    Math.round((completedLessons.length / total) * 100);

  document.getElementById("progressPercent").textContent =
    percentage + "%";

  document.getElementById("progressNumber").textContent =
    percentage + "%";

  document.getElementById("bigProgressNumber").textContent =
    percentage + "%";
}


// ==========================================
// PIP CALCULATOR
// ==========================================

function calculatePips() {

  const entry =
    parseFloat(document.getElementById("entry").value);

  const exit =
    parseFloat(document.getElementById("exit").value);

  const pair =
    document.getElementById("pair").value;

  const result =
    document.getElementById("pipResult");

  if (isNaN(entry) || isNaN(exit)) {

    result.textContent =
      "Please enter both prices.";

    return;
  }

  let pipSize;

  if (pair === "jpy") {
    pipSize = 0.01;
  } else {
    pipSize = 0.0001;
  }

  const movement =
    Math.abs(exit - entry);

  const pips =
    movement / pipSize;

  result.innerHTML =
    `<strong>${pips.toFixed(1)} pips</strong>`;
}


// ==========================================
// QUIZ
// ==========================================

const questions = [
  {
    question: "What does Forex mean?",
    options: [
      "Foreign Exchange",
      "Foreign Export",
      "Financial Exchange",
      "Future Exchange"
    ],
    answer: 0
  },

  {
    question: "What is EUR/USD?",
    options: [
      "A stock",
      "A currency pair",
      "A cryptocurrency",
      "An index"
    ],
    answer: 1
  },

  {
    question: "What is a pip commonly used for?",
    options: [
      "Measuring price movement",
      "Opening a bank",
      "Creating a currency",
      "Paying taxes"
    ],
    answer: 0
  },

  {
    question: "What can leverage do?",
    options: [
      "Remove all risk",
      "Increase both potential gains and losses",
      "Guarantee profits",
      "Stop the market"
    ],
    answer: 1
  },

  {
    question: "What is an important part of trading?",
    options: [
      "Ignoring losses",
      "Risk management",
      "Using maximum leverage",
      "Trading every minute"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;


function startQuiz() {

  currentQuestion = 0;
  score = 0;

  showQuestion();
}


function showQuestion() {

  const box = document.getElementById("quizBox");

  if (currentQuestion >= questions.length) {

    const percentage =
      Math.round((score / questions.length) * 100);

    box.innerHTML = `
      <div class="quiz-result">

        <p class="small-label">QUIZ COMPLETE</p>

        <div class="quiz-score">
          ${percentage}%
        </div>

        <p>
          You scored ${score} out of ${questions.length}.
        </p>

        <button
          class="primary-btn"
          onclick="startQuiz()">
          Try Again
        </button>

      </div>
    `;

    return;
  }

  const q = questions[currentQuestion];

  box.innerHTML = `

    <p class="small-label">
      QUESTION ${currentQuestion + 1} OF ${questions.length}
    </p>

    <div class="quiz-question">
      ${q.question}
    </div>

    ${q.options.map((option, index) => `
      <button
        class="quiz-option"
        onclick="answerQuestion(${index})">
        ${option}
      </button>
    `).join("")}

  `;
}


function answerQuestion(answer) {

  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  showQuestion();
}


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeBtn =
  document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  themeBtn.textContent =
    light ? "🌙" : "☀️";

  localStorage.setItem(
    "forexTheme",
    light ? "light" : "dark"
  );
});


if (localStorage.getItem("forexTheme") === "light") {

  document.body.classList.add("light");

  themeBtn.textContent = "🌙";
}


// ==========================================
// INITIALIZE
// ==========================================

renderLessons();
updateProgress();

document
  .querySelector('[data-screen="home"]')
  .classList.add("active");
