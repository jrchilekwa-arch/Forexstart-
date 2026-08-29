/* =====================================================
   FOREXSTART - CLEAN APP.JS
   Matches the current index.html
===================================================== */

let completed = JSON.parse(
  localStorage.getItem("fxCompleted") || "[]"
);

let xp = Number(localStorage.getItem("fxXP") || 0);
let currentLesson = 0;
let currentQuestion = 0;
let quizScore = 0;

/* =====================================================
   LESSONS
===================================================== */

const lessons = [
  {
    title: "What is Forex?",
    desc: "Learn what forex trading means.",
    content: `
      <h1>What is Forex?</h1>
      <p>
        Forex means foreign exchange. It is the global market
        where currencies are bought and sold.
      </p>

      <h2>Example</h2>
      <p>
        When you trade EUR/USD, you are comparing the euro
        with the US dollar.
      </p>

      <div class="tip">
        <strong>💡 Beginner Tip</strong>
        <p>
          Start by learning how currencies and currency pairs
          work before thinking about real-money trading.
        </p>
      </div>
    `
  },

  {
    title: "Currency Pairs",
    desc: "Understand how currency pairs work.",
    content: `
      <h1>Currency Pairs</h1>

      <p>
        Forex currencies are traded in pairs.
      </p>

      <h2>Example: EUR/USD</h2>

      <p>
        EUR is the base currency and USD is the quote currency.
      </p>

      <p>
        If EUR/USD is 1.1000, it means approximately
        1 euro is worth 1.10 US dollars.
      </p>

      <div class="tip">
        <strong>💡 Remember</strong>
        <p>
          The first currency is the base currency.
          The second currency is the quote currency.
        </p>
      </div>
    `
  },

  {
    title: "What is a Pip?",
    desc: "Learn how traders measure price movement.",
    content: `
      <h1>What is a Pip?</h1>

      <p>
        A pip is a common unit used to measure small
        price movements in forex.
      </p>

      <h2>Example</h2>

      <p>
        If EUR/USD moves from 1.1000 to 1.1001,
        that is commonly a 1-pip movement.
      </p>

      <div class="tip">
        <strong>💡 Beginner Tip</strong>
        <p>
          Pips measure price movement. They do not automatically
          tell you how much money you gained or lost.
        </p>
      </div>
    `
  },

  {
    title: "Buy & Sell",
    desc: "Understand basic buy and sell positions.",
    content: `
      <h1>Buy & Sell</h1>

      <p>
        A BUY position generally means you expect the price
        to rise.
      </p>

      <p>
        A SELL position generally means you expect the price
        to fall.
      </p>

      <h2>Simple Example</h2>

      <p>
        If you buy EUR/USD at 1.1000 and the price rises,
        the position may gain before costs.
      </p>

      <div class="tip">
        <strong>⚠️ Important</strong>
        <p>
          Markets can move against you. There is no guaranteed
          profit in forex trading.
        </p>
      </div>
    `
  },

  {
    title: "Risk Management",
    desc: "Learn how to protect your trading account.",
    content: `
      <h1>Risk Management</h1>

      <p>
        Risk management is one of the most important skills
        for a beginner trader.
      </p>

      <h2>Why it matters</h2>

      <p>
        A trader should decide how much they are willing to risk
        before entering a trade.
      </p>

      <div class="tip">
        <strong>🛡️ Beginner Rule</strong>
        <p>
          Practice with virtual money while learning.
          Never risk money you cannot afford to lose.
        </p>
      </div>
    `
  },

  {
    title: "Stop Loss",
    desc: "Learn the purpose of a stop-loss order.",
    content: `
      <h1>Stop Loss</h1>

      <p>
        A stop loss is designed to close a position when
        price reaches a chosen level.
      </p>

      <p>
        Traders can use stop losses to help control
        potential losses.
      </p>

      <div class="tip">
        <strong>💡 Practice Tip</strong>
        <p>
          Decide where your trade idea is invalidated before
          entering a practice trade.
        </p>
      </div>
    `
  },

  {
    title: "Take Profit",
    desc: "Learn how traders plan a target.",
    content: `
      <h1>Take Profit</h1>

      <p>
        A take-profit order is intended to close a position
        at a chosen target.
      </p>

      <p>
        Planning an exit before entering can help keep
        your trading decisions disciplined.
      </p>
    `
  },

  {
    title: "Trading Psychology",
    desc: "Understand emotions and trading decisions.",
    content: `
      <h1>Trading Psychology</h1>

      <p>
        Trading decisions can be affected by emotions such as
        fear, greed, FOMO and frustration.
      </p>

      <h2>Good habits</h2>

      <p>
        Follow a written plan, accept that losses can happen,
        and avoid making decisions based only on emotion.
      </p>

      <div class="tip">
        <strong>🧠 Remember</strong>
        <p>
          Your goal while learning should be discipline and
          understanding, not quick profits.
        </p>
      </div>
    `
  },

  {
    title: "Demo Trading",
    desc: "Practice trading without real money.",
    content: `
      <h1>Demo Trading</h1>

      <p>
        A demo account lets you practice using virtual money
        instead of risking real funds.
      </p>

      <h2>Practice</h2>

      <p>
        Learn how to open and close positions, use stop losses,
        calculate risk and keep a trading journal.
      </p>

      <div class="tip">
        <strong>🎯 Goal</strong>
        <p>
          Focus on learning the platform and building good
          habits before considering real-money trading.
        </p>
      </div>
    `
  },

  {
    title: "Trading Checklist",
    desc: "Review the basics before a practice trade.",
    content: `
      <h1>Trading Checklist</h1>

      <p>Before a practice trade, ask yourself:</p>

      <ul>
        <li>Do I understand the setup?</li>
        <li>Where is my entry?</li>
        <li>Where is my stop loss?</li>
        <li>Where is my target?</li>
        <li>How much am I risking?</li>
        <li>Am I following my plan?</li>
      </ul>

      <div class="tip">
        <strong>✅ Final Tip</strong>
        <p>
          Slow, planned decisions are better than impulsive
          decisions while learning.
        </p>
      </div>
    `
  }
];

/* =====================================================
   QUIZ
===================================================== */

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
      "A currency pair",
      "A stock",
      "A cryptocurrency",
      "A bank account"
    ],
    correct: 0
  },

  {
    question: "What does a pip measure?",
    answers: [
      "Account balance",
      "Price movement",
      "Trading time",
      "Broker fees"
    ],
    correct: 1
  },

  {
    question: "What does BUY generally mean?",
    answers: [
      "You expect price to rise",
      "You expect price to fall",
      "You close the account",
      "You stop trading"
    ],
    correct: 0
  },

  {
    question: "Why use a demo account?",
    answers: [
      "To guarantee profits",
      "To practice without real money",
      "To avoid learning",
      "To borrow money"
    ],
    correct: 1
  }
];

/* =====================================================
   START APP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  setupTheme();

  renderLessons();

  renderQuiz();

  updateProgress();

  updateHomeProgress();

});

/* =====================================================
   NAVIGATION
===================================================== */

function showScreen(screenName) {

  const screens = document.querySelectorAll(".screen");

  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenName);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo(0, 0);

  if (screenName === "lessons") {
    renderLessons();
  }

  if (screenName === "quiz") {
    renderQuiz();
  }

  if (screenName === "home") {
    updateHomeProgress();
  }

}

/* =====================================================
   THEME
===================================================== */

function setupTheme() {

  const button = document.querySelector(".menu-btn");

  if (!button) return;

  button.addEventListener("click", function () {

    alert(
      "ForexStart\n\nUse the Lessons, Quiz, Tools and Demo Trade sections to practice."
    );

  });

}

/* =====================================================
   LESSONS
===================================================== */

function renderLessons() {

  const list = document.getElementById("lessonList");

  if (!list) return;

  list.innerHTML = "";

  lessons.forEach(function (lesson, index) {

    const card = document.createElement("div");

    card.className = "lesson-card";

    card.innerHTML = `
      <div>
        <small>LESSON ${index + 1}</small>
        <h3>${lesson.title}</h3>
        <p>${lesson.desc}</p>
      </div>

      <span>→</span>
    `;

    card.addEventListener("click", function () {

      openLesson(index);

    });

    list.appendChild(card);

  });

}

/* =====================================================
   OPEN LESSON
===================================================== */

function openLesson(index) {

  currentLesson = index;

  const lesson = lessons[index];

  const number = document.getElementById("lessonNumber");
  const title = document.getElementById("lessonTitle");
  const content = document.getElementById("lessonContent");
  const completeButton =
    document.getElementById("completeLessonBtn");

  if (!lesson || !title || !content) return;

  if (number) {
    number.textContent =
      "LESSON " + (index + 1) + " OF " + lessons.length;
  }

  title.textContent = lesson.title;

  content.innerHTML = lesson.content;

  if (completeButton) {

    completeButton.textContent =
      completed.includes(index)
        ? "✓ Lesson Completed"
        : "Complete Lesson +100 XP";

    completeButton.onclick = function () {
      completeLesson(index);
    };

  }

  showScreen("lessonDetail");

}

/* =====================================================
   COMPLETE LESSON
===================================================== */

function completeLesson(index) {

  if (!completed.includes(index)) {

    completed.push(index);

    xp += 100;

    localStorage.setItem(
      "fxCompleted",
      JSON.stringify(completed)
    );

    localStorage.setItem(
      "fxXP",
      xp
    );

  }

  updateProgress();

  updateHomeProgress();

  openLesson(index);

}

/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

  const percentage =
    Math.round(
      (completed.length / lessons.length) * 100
    );

  const progressText =
    document.getElementById("progressText");

  const progressBar =
    document.getElementById("progressBar");

  if (progressText) {
    progressText.textContent = percentage + "%";
  }

  if (progressBar) {
    progressBar.style.width = percentage + "%";
  }

  const xpNumber =
    document.getElementById("xpNumber");

  const levelNumber =
    document.getElementById("levelNumber");

  const levelProgress =
    document.getElementById("levelProgress");

  const levelBar =
    document.getElementById("levelBar");

  if (xpNumber) {
    xpNumber.textContent = xp;
  }

  const level =
    Math.floor(xp / 500) + 1;

  if (levelNumber) {
    levelNumber.textContent = level;
  }

  const currentXP = xp % 500;

  if (levelProgress) {
    levelProgress.textContent =
      currentXP + " / 500 XP";
  }

  if (levelBar) {
    levelBar.style.width =
      (currentXP / 500 * 100) + "%";
  }

}

/* =====================================================
   HOME PROGRESS
===================================================== */

function updateHomeProgress() {

  const percentage =
    Math.round(
      (completed.length / lessons.length) * 100
    );

  const progressText =
    document.getElementById("progressText");

  const progressMessage =
    document.getElementById("progressMessage");

  if (progressText) {
    progressText.textContent =
      percentage + "%";
  }

  if (progressMessage) {

    if (percentage === 0) {
      progressMessage.textContent =
        "Start your first lesson today.";
    }

    else if (percentage < 100) {
      progressMessage.textContent =
        "Keep going — you're making progress!";
    }

    else {
      progressMessage.textContent =
        "🎉 Course completed! Great work.";
    }

  }

}

/* =====================================================
   QUIZ
===================================================== */

function renderQuiz() {

  const questionBox =
    document.getElementById("quizQuestion");

  const answersBox =
    document.getElementById("quizAnswers");

  const resultBox =
    document.getElementById("quizResult");

  const nextButton =
    document.getElementById("nextQuizBtn");

  if (!questionBox || !answersBox) return;

  if (currentQuestion >= questions.length) {

    questionBox.innerHTML =
      "<h2>Quiz Complete! 🎉</h2>";

    answersBox.innerHTML =
      "<p>You scored " +
      quizScore +
      " out of " +
      questions.length +
      ".</p>";

    if (resultBox) {
      resultBox.textContent =
        "Great job! Keep learning.";
    }

    if (nextButton) {
      nextButton.classList.add("hidden");
    }

    return;
  }

  const q = questions[currentQuestion];

  questionBox.innerHTML =
    "<h3>" +
    (currentQuestion + 1) +
    ". " +
    q.question +
    "</h3>";

  answersBox.innerHTML = "";

  if (resultBox) {
    resultBox.textContent = "";
  }

  if (nextButton) {
    nextButton.classList.add("hidden");
  }

  q.answers.forEach(function (answer, index) {

    const button =
      document.createElement("button");

    button.className = "quiz-answer";

    button.textContent = answer;

    button.addEventListener("click", function () {

      checkAnswer(index);

    });

    answersBox.appendChild(button);

  });

}

/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(answerIndex) {

  const q = questions[currentQuestion];

  const resultBox =
    document.getElementById("quizResult");

  const nextButton =
    document.getElementById("nextQuizBtn");

  const answerButtons =
    document.querySelectorAll(".quiz-answer");

  answerButtons.forEach(function (button) {
    button.disabled = true;
  });

  if (answerIndex === q.correct) {

    quizScore++;

    if (resultBox) {
      resultBox.textContent =
        "✅ Correct!";
    }

  } else {

    if (resultBox) {
      resultBox.textContent =
        "❌ Not quite. Keep learning!";
    }

  }

  if (nextButton) {

    nextButton.classList.remove("hidden");

    nextButton.onclick = function () {

      currentQuestion++;

      renderQuiz();

    };

  }

}

/* =====================================================
   RISK CALCULATOR
===================================================== */

function calculateRisk() {

  const balance =
    parseFloat(
      document.getElementById("balance").value
    );

  const risk =
    parseFloat(
      document.getElementById("riskPercent").value
    );

  const result =
    document.getElementById("calculatorResult");

  if (!result) return;

  if (
    isNaN(balance) ||
    isNaN(risk) ||
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
    "<strong>Maximum planned risk: $" +
    riskAmount.toFixed(2) +
    "</strong><br><br>" +
    "Example: " +
    risk +
    "% of a $" +
    balance.toFixed(2) +
    " account is $" +
    riskAmount.toFixed(2) +
    ".";

}

/* =====================================================
   DEMO TRADING
===================================================== */

let demoBalance =
  Number(
    localStorage.getItem("demoBalance") ||
    10000
  );

function demoTrade(type) {

  const balanceElement =
    document.getElementById("demoBalance");

  const message =
    document.getElementById("tradeMessage");

  const priceElement =
    document.getElementById("demoPrice");

  if (!balanceElement || !message) return;

  const oldPrice =
    priceElement
      ? parseFloat(priceElement.textContent)
      : 1.1000;

  const movement =
    (Math.random() * 0.004 - 0.002);

  const newPrice =
    oldPrice + movement;

  const change =
    type === "buy"
      ? movement * 100000
      : -movement * 100000;

  demoBalance += change;

  if (demoBalance < 0) {
    demoBalance = 0;
  }

  localStorage.setItem(
    "demoBalance",
    demoBalance
  );

  balanceElement.textContent =
    "$" +
    demoBalance.toFixed(2);

  if (priceElement) {
    priceElement.textContent =
      newPrice.toFixed(4);
  }

  if (change >= 0) {

    message.textContent =
      "📈 Demo BUY completed. Virtual result: +$" +
      change.toFixed(2);

  } else {

    message.textContent =
      "📉 Demo " +
      type.toUpperCase() +
      " result: $" +
      change.toFixed(2);

  }

}

/* =====================================================
   PRO MESSAGE
===================================================== */

function showUpgradeMessage() {

  alert(
    "ForexStart PRO\n\n" +
    "Premium lessons are coming soon."
  );

   }
