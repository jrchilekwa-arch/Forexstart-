const lessons = [
  {
    title: "What Is Forex?",
    description: "Understand the foreign exchange market.",
    content: `
      <p><strong>Forex</strong> means foreign exchange.</p>
      <p>It is the global market where currencies are exchanged.</p>
      <h3>Key ideas</h3>
      <ul>
        <li>Forex means foreign exchange.</li>
        <li>Currencies are traded in pairs.</li>
        <li>ForexStart is for education and practice.</li>
      </ul>
    `
  },

  {
    title: "Currency Pairs",
    description: "Learn how currency pairs work.",
    content: `
      <p>Forex prices are normally shown as currency pairs such as <strong>EUR/USD</strong>.</p>
      <p>The first currency is the base currency. The second is the quote currency.</p>
      <ul>
        <li>EUR/USD</li>
        <li>GBP/USD</li>
        <li>USD/JPY</li>
      </ul>
    `
  },

  {
    title: "Pips",
    description: "Understand forex price movement.",
    content: `
      <p>A <strong>pip</strong> is a common unit used to describe a small movement in a forex exchange rate.</p>
      <p>Understanding pips helps beginners understand price movement.</p>
    `
  },

  {
    title: "Lots & Position Size",
    description: "Learn how trade size affects risk.",
    content: `
      <p>A <strong>lot</strong> describes the size of a forex position.</p>
      <p>Position size matters because larger positions can create larger potential gains and losses.</p>
    `
  },

  {
    title: "Spread",
    description: "Learn about a common trading cost.",
    content: `
      <p>The <strong>spread</strong> is the difference between the bid price and ask price.</p>
      <p>It is one of the costs traders need to understand.</p>
    `
  },

  {
    title: "Leverage",
    description: "Understand leverage and its risks.",
    content: `
      <p><strong>Leverage</strong> allows a trader to control a larger position using less capital.</p>
      <p>It can increase both potential gains and potential losses.</p>
    `
  },

  {
    title: "Risk Management",
    description: "Learn how traders manage risk.",
    content: `
      <p><strong>Risk management</strong> is one of the most important trading skills.</p>
      <ul>
        <li>Understand position sizing.</li>
        <li>Learn about stop losses.</li>
        <li>Understand risk-to-reward.</li>
        <li>Never risk money you cannot afford to lose.</li>
      </ul>
    `
  },

  {
    title: "Demo Trading",
    description: "Practice without using real money.",
    content: `
      <p>A <strong>demo account</strong> uses virtual money to simulate trading.</p>
      <p>It can help beginners practice without risking real money.</p>
    `
  }
];


const quizQuestions = [
  {
    question: "What does Forex mean?",
    answers: [
      "Foreign Exchange",
      "Future Exchange",
      "Financial Export"
    ],
    correct: 0
  },

  {
    question: "Which is a currency pair?",
    answers: [
      "EUR/USD",
      "FOREX/123",
      "BANK/MONEY"
    ],
    correct: 0
  },

  {
    question: "What can leverage increase?",
    answers: [
      "Only profits",
      "Only losses",
      "Potential gains and losses"
    ],
    correct: 2
  },

  {
    question: "What is a demo account?",
    answers: [
      "An account using virtual money",
      "A bank account",
      "A guaranteed-profit account"
    ],
    correct: 0
  }
];


let currentLesson = 0;
let currentQuiz = 0;
let quizScore = 0;
let demoBalance = 10000;

let completedLessons =
  JSON.parse(localStorage.getItem("forexstartProgress")) || [];

let xp =
  Number(localStorage.getItem("forexstartXP")) || 0;

let streak =
  Number(localStorage.getItem("forexstartStreak")) || 0;

let lastVisit =
  localStorage.getItem("forexstartLastVisit") || "";


/* =========================
   DAILY STREAK
========================= */

function updateStreak() {

  const today =
    new Date().toISOString().split("T")[0];

  if (!lastVisit) {

    streak = 1;

  } else if (lastVisit !== today) {

    const previous =
      new Date(lastVisit);

    const current =
      new Date(today);

    const difference =
      Math.round(
        (current - previous) /
        (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {
      streak++;
    } else if (difference > 1) {
      streak = 1;
    }
  }

  lastVisit = today;

  localStorage.setItem(
    "forexstartStreak",
    streak
  );

  localStorage.setItem(
    "forexstartLastVisit",
    lastVisit
  );
}


/* =========================
   XP SYSTEM
========================= */

function addXP(amount) {

  xp += amount;

  localStorage.setItem(
    "forexstartXP",
    xp
  );

  updateXPDisplay();
}


function getLevel() {

  if (xp >= 2000) {
    return {
      number: 5,
      name: "Forex Master",
      min: 2000,
      max: 3000
    };
  }

  if (xp >= 1200) {
    return {
      number: 4,
      name: "Advanced",
      min: 1200,
      max: 2000
    };
  }

  if (xp >= 700) {
    return {
      number: 3,
      name: "Trader",
      min: 700,
      max: 1200
    };
  }

  if (xp >= 300) {
    return {
      number: 2,
      name: "Learner",
      min: 300,
      max: 700
    };
  }

  return {
    number: 1,
    name: "Beginner",
    min: 0,
    max: 300
  };
}


function updateXPDisplay() {

  const level =
    getLevel();

  const levelNumber =
    document.getElementById("levelNumber");

  const levelName =
    document.getElementById("levelName");

  const xpNumber =
    document.getElementById("xpNumber");

  const streakNumber =
    document.getElementById("streakNumber");

  const levelProgress =
    document.getElementById("levelProgress");

  const levelBar =
    document.getElementById("levelBar");

  if (levelNumber) {
    levelNumber.textContent =
      level.number;
  }

  if (levelName) {
    levelName.textContent =
      level.name;
  }

  if (xpNumber) {
    xpNumber.textContent =
      xp;
  }

  if (streakNumber) {
    streakNumber.textContent =
      streak;
  }

  if (levelProgress) {

    if (level.number === 5) {

      levelProgress.textContent =
        `${xp} XP — MAX LEVEL`;

    } else {

      levelProgress.textContent =
        `${xp - level.min} / ${level.max - level.min} XP`;
    }
  }

  if (levelBar) {

    let percentage;

    if (level.number === 5) {

      percentage = 100;

    } else {

      percentage =
        ((xp - level.min) /
        (level.max - level.min)) * 100;
    }

    levelBar.style.width =
      Math.min(100, percentage) + "%";
  }
}


/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(screenId) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  const screen =
    document.getElementById(screenId);

  if (screen) {
    screen.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (screenId === "lessons") {
    renderLessons();
  }

  if (screenId === "quiz") {
    currentQuiz = 0;
    quizScore = 0;
    loadQuiz();
  }

  updateProgress();
  updateXPDisplay();
}


/* =========================
   LESSONS
========================= */
function renderLessons() {

  const list =
    document.getElementById("lessonList");

  if (!list) return;

  list.innerHTML = "";

  lessons.forEach((lesson, index) => {

    const completed =
      completedLessons.includes(index);

    const isPro =
      index >= 4;

    const freeUnlocked =
      !isPro &&
      (
        index === 0 ||
        completedLessons.includes(index - 1)
      );

    const card =
      document.createElement("button");

    card.className =
      "lesson-card " +
      (completed ? "completed " : "") +
      (isPro ? "pro-lesson" : "") +
      (!freeUnlocked && !isPro ? "locked" : "");

    card.innerHTML = `
      <div class="lesson-icon">
        ${
          completed
            ? "✓"
            : isPro
              ? "👑"
              : freeUnlocked
                ? "📖"
                : "🔒"
        }
      </div>

      <div class="lesson-info">

        <h3>
          Lesson ${index + 1}: ${lesson.title}
        </h3>

        <p>
          ${
            isPro
              ? "👑 PRO — Unlock this lesson"
              : freeUnlocked
                ? lesson.description
                : "Complete the previous lesson to unlock."
          }
        </p>

      </div>

      ${
        isPro
          ? `<span class="pro-badge">PRO</span>`
          : ""
      }
    `;

    card.onclick = () => {

      if (isPro) {

        showScreen("upgrade");

        return;
      }

      if (!freeUnlocked) {

        alert(
          "🔒 Complete the previous lesson first."
        );

        return;
      }

      openLesson(index);
    };

    list.appendChild(card);
  });
  }

/* =========================
   COURSE PROGRESS
========================= */

function updateProgress() {

  const progressText =
    document.getElementById(
      "progressText"
    );

  const progressBar =
    document.getElementById(
      "progressBar"
    );

  const progressMessage =
    document.getElementById(
      "progressMessage"
    );

  if (!progressText) return;

  const percent =
    Math.round(
      (completedLessons.length /
      lessons.length) * 100
    );

  progressText.textContent =
    percent + "%";

  progressBar.style.width =
    percent + "%";

  if (percent === 0) {

    progressMessage.textContent =
      "Start your first lesson today.";

  } else if (percent < 100) {

    progressMessage.textContent =
      `${completedLessons.length} of ${lessons.length} lessons completed.`;

  } else {

    progressMessage.textContent =
      "🎉 Course completed! Great work.";
  }
}


/* =========================
   QUIZ
========================= */

function loadQuiz() {

  const q =
    quizQuestions[currentQuiz];

  const question =
    document.getElementById(
      "quizQuestion"
    );

  const answers =
    document.getElementById(
      "quizAnswers"
    );

  const result =
    document.getElementById(
      "quizResult"
    );

  const nextButton =
    document.getElementById(
      "nextQuizBtn"
    );

  question.innerHTML = `
    <div class="quiz-question">
      ${currentQuiz + 1}. ${q.question}
    </div>
  `;

  answers.innerHTML = "";

  result.textContent = "";

  nextButton.classList.add(
    "hidden"
  );

  q.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "answer-btn";

      button.textContent =
        answer;

      button.onclick =
        () => answerQuiz(index);

      answers.appendChild(button);
    }
  );
}


function answerQuiz(index) {

  const q =
    quizQuestions[currentQuiz];

  const result =
    document.getElementById(
      "quizResult"
    );

  if (index === q.correct) {

    quizScore++;

    result.textContent =
      "✅ Correct!";

  } else {

    result.textContent =
      "❌ Not quite. Keep learning.";
  }

  document
    .querySelectorAll(".answer-btn")
    .forEach(button => {
      button.disabled = true;
    });

  const nextButton =
    document.getElementById(
      "nextQuizBtn"
    );

  nextButton.classList.remove(
    "hidden"
  );

  if (
    currentQuiz ===
    quizQuestions.length - 1
  ) {

    nextButton.textContent =
      `Finish Quiz — ${quizScore}/${quizQuestions.length}`;

  } else {

    nextButton.textContent =
      "Next Question →";
  }
}


document
  .getElementById("nextQuizBtn")
  .onclick = () => {

    if (
      currentQuiz <
      quizQuestions.length - 1
    ) {

      currentQuiz++;

      loadQuiz();

    } else {

      addXP(50);

      alert(
        `🧠 Quiz complete! You scored ${quizScore}/${quizQuestions.length}. +50 XP`
      );

      currentQuiz = 0;
      quizScore = 0;

      loadQuiz();
    }
  };


/* =========================
   RISK CALCULATOR
========================= */

function calculateRisk() {

  const balance =
    Number(
      document.getElementById(
        "balance"
      ).value
    );

  const risk =
    Number(
      document.getElementById(
        "riskPercent"
      ).value
    );

  const result =
    document.getElementById(
      "calculatorResult"
    );

  if (
    !balance ||
    !risk ||
    balance <= 0 ||
    risk <= 0
  ) {

    result.textContent =
      "Enter a valid balance and risk percentage.";

    return;
  }

  const riskAmount =
    balance * (risk / 100);

  result.innerHTML =
    `Maximum planned risk: $${riskAmount.toFixed(2)}
    <br>
    <small>
      Educational calculation only — not financial advice.
    </small>`;
}


/* =========================
   DEMO TRADING
========================= */

function demoTrade(type) {

  const change =
    Math.floor(
      Math.random() * 101
    ) - 50;

  demoBalance += change;

  document.getElementById(
    "demoBalance"
  ).textContent =
    "$" +
    demoBalance.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    );

  document.getElementById(
    "tradeMessage"
  ).textContent =
    `${type.toUpperCase()} demo trade simulated. Result: ${
      change >= 0 ? "+" : ""
    }$${change}.`;
}


function updateDemoPrice() {

  const price =
    1.1000 +
    (Math.random() * 0.01 - 0.005);

  const element =
    document.getElementById(
      "demoPrice"
    );

  if (element) {
    element.textContent =
      price.toFixed(4);
  }
}


/* =========================
   START APP
========================= */

updateStreak();
updateXPDisplay();
updateProgress();
renderLessons();

setInterval(
  updateDemoPrice,
  3000
);
