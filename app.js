/* =========================================
   FOREXSTART V1
   Complete Application JavaScript
========================================= */


/* ---------- DATA ---------- */

const lessons = [

  {
    title: "What is Forex?",
    description: "Understand the foreign exchange market.",
    content:
      "Forex, short for foreign exchange, is the global market where currencies are bought and sold. Traders exchange one currency for another, such as EUR/USD.",
    example:
      "If EUR/USD is 1.0850, one euro is worth approximately 1.0850 US dollars.",
    tip:
      "Start by understanding how currency pairs work before learning advanced strategies."
  },

  {
    title: "Currency Pairs",
    description: "Learn how currencies are quoted.",
    content:
      "Forex is traded in pairs. The first currency is called the base currency and the second is called the quote currency.",
    example:
      "In GBP/USD, GBP is the base currency and USD is the quote currency.",
    tip:
      "Major pairs such as EUR/USD and GBP/USD are commonly used when learning forex."
  },

  {
    title: "What is a Pip?",
    description: "Learn the basic forex price measurement.",
    content:
      "A pip is a standard unit used to measure a small change in the price of a currency pair.",
    example:
      "For many currency pairs, a movement from 1.0850 to 1.0860 is 10 pips.",
    tip:
      "Remember that JPY pairs commonly use a different pip decimal position."
  },

  {
    title: "Buy & Sell",
    description: "Understand long and short positions.",
    content:
      "When traders expect a currency pair to rise, they may buy it. When they expect it to fall, they may sell it.",
    example:
      "If you buy EUR/USD at 1.0850 and later close at 1.0900, the position moved in your expected direction.",
    tip:
      "Never enter a trade simply because the price is moving quickly."
  },

  {
    title: "Bid & Ask",
    description: "Understand the two prices shown by brokers.",
    content:
      "The bid is the price at which the market can buy from you, while the ask is the price at which you can buy from the market.",
    example:
      "A quote might show EUR/USD at 1.0849 / 1.0850.",
    tip:
      "The difference between bid and ask is important when calculating trading costs."
  },

  {
    title: "Spread",
    description: "Learn one of the basic costs of trading.",
    content:
      "The spread is the difference between the bid and ask price.",
    example:
      "If the bid is 1.0849 and ask is 1.0850, the spread is 1 pip.",
    tip:
      "Lower spreads can reduce trading costs, but other fees may also apply."
  },

  {
    title: "Leverage",
    description: "Understand leverage and why it matters.",
    content:
      "Leverage allows traders to control a larger position using a smaller amount of capital. It can increase both potential gains and potential losses.",
    example:
      "With leverage, a relatively small account may control a larger position than its cash balance.",
    tip:
      "Higher leverage increases risk. Beginners should understand the risks before using it."
  },

  {
    title: "Stop Loss",
    description: "Learn how traders can limit potential losses.",
    content:
      "A stop loss is an order designed to close a position when the market reaches a specified price.",
    example:
      "A trader buying EUR/USD could set a stop loss below their entry price.",
    tip:
      "A stop loss does not guarantee an exact exit price during extreme market conditions."
  },

  {
    title: "Risk Management",
    description: "Learn why protecting your account matters.",
    content:
      "Risk management involves controlling how much of your account you expose to each trade.",
    example:
      "A trader may decide to risk only a small percentage of their account on a single trade.",
    tip:
      "Protecting your trading capital is more important than trying to win every trade."
  },

  {
    title: "Trading Psychology",
    description: "Understand emotions and discipline.",
    content:
      "Trading psychology is about managing emotions such as fear, greed and impatience.",
    example:
      "After a losing trade, chasing another trade immediately can lead to emotional decisions.",
    tip:
      "Create rules before trading and follow them consistently."
  }

];


const questions = [

  {
    question: "What does Forex stand for?",
    answers: [
      "Foreign Exchange",
      "Foreign Export",
      "Financial Exchange",
      "Foreign Expense"
    ],
    correct: 0
  },

  {
    question: "Which currency is the base currency in EUR/USD?",
    answers: [
      "USD",
      "EUR",
      "Both",
      "Neither"
    ],
    correct: 1
  },

  {
    question: "What is a pip?",
    answers: [
      "A trading account",
      "A type of broker",
      "A unit used to measure price movement",
      "A currency"
    ],
    correct: 2
  },

  {
    question: "What is the spread?",
    answers: [
      "The difference between bid and ask",
      "Your account balance",
      "Your leverage",
      "Your stop loss"
    ],
    correct: 0
  },

  {
    question: "Why is risk management important?",
    answers: [
      "To guarantee profits",
      "To avoid learning",
      "To help control potential losses",
      "To increase every trade"
    ],
    correct: 2
  },

  {
    question: "Which emotion can negatively affect trading decisions?",
    answers: [
      "Patience",
      "Discipline",
      "Greed",
      "Planning"
    ],
    correct: 2
  }

];


/* ---------- STATE ---------- */

const defaultState = {
  completedLessons: [],
  xp: 0,
  balance: 10000,
  trades: 0,
  bestQuiz: 0,
  journal: [],
  position: null
};


let state = loadState();

let currentLesson = 0;

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let demoPrice = 1.08500;
let previousPrice = demoPrice;


/* ---------- STORAGE ---------- */

function loadState() {

  try {

    const saved =
      localStorage.getItem("forexStartV1");

    if (!saved) {
      return {...defaultState};
    }

    return {
      ...defaultState,
      ...JSON.parse(saved)
    };

  } catch (error) {

    return {...defaultState};

  }

}


function saveState() {

  localStorage.setItem(
    "forexStartV1",
    JSON.stringify(state)
  );

}


/* ---------- TOAST ---------- */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2200);

}


/* ---------- NAVIGATION ---------- */

function showScreen(screenName) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  const target =
    document.getElementById(screenName);

  if (target) {
    target.classList.add("active");
  }


  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.screen === screenName
      );

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  closeMenu();


  if (screenName === "learn") {
    renderLessons();
  }

  if (screenName === "journal") {
    renderJournal();
  }

  if (screenName === "profile") {
    updateProfile();
  }

  if (screenName === "trade") {
    updateTradeUI();
  }

}


/* ---------- NAV BUTTONS ---------- */

document
  .querySelectorAll("[data-screen]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        showScreen(
          button.dataset.screen
        );

      }
    );

  });


/* ---------- MENU ---------- */

const menuBtn =
  document.getElementById("menuBtn");

const closeMenuBtn =
  document.getElementById("closeMenu");

const mobileMenu =
  document.getElementById("mobileMenu");


menuBtn.addEventListener(
  "click",
  () => {

    mobileMenu.classList.add("open");

  }
);


closeMenuBtn.addEventListener(
  "click",
  closeMenu
);


function closeMenu() {

  mobileMenu.classList.remove("open");

}


/* ---------- LESSONS ---------- */

function renderLessons() {

  const list =
    document.getElementById("lessonList");

  list.innerHTML = "";


  lessons.forEach((lesson, index) => {

    const completed =
      state.completedLessons.includes(index);


    const card =
      document.createElement("button");

    card.className =
      "lesson-card" +
      (completed ? " completed" : "");


    card.innerHTML = `

      <div class="lesson-number">
        ${completed ? "✓" : index + 1}
      </div>

      <div>

        <div class="lesson-title">
          ${lesson.title}
        </div>

        <div class="lesson-description">
          ${lesson.description}
        </div>

      </div>

      <div class="lesson-arrow">
        ›
      </div>

    `;


    card.addEventListener(
      "click",
      () => openLesson(index)
    );


    list.appendChild(card);

  });


  updateLearnStats();

}


function updateLearnStats() {

  const completed =
    state.completedLessons.length;


  document.getElementById(
    "learnCompleted"
  ).textContent = completed;


  document.getElementById(
    "learnXp"
  ).textContent = state.xp;

}


/* ---------- OPEN LESSON ---------- */

function openLesson(index) {

  currentLesson = index;

  const lesson =
    lessons[index];

  const completed =
    state.completedLessons.includes(index);


  const content =
    document.getElementById("lessonContent");


  content.innerHTML = `

    <div class="lesson-detail-card">

      <div class="lesson-detail-number">
        ${index + 1}
      </div>

      <span class="eyebrow">
        LESSON ${index + 1} OF ${lessons.length}
      </span>

      <h1>
        ${lesson.title}
      </h1>

      <p>
        ${lesson.content}
      </p>


      <div class="example-box">

        <strong>💡 Example</strong>

        <p>
          ${lesson.example}
        </p>

      </div>


      <div class="tip-box">

        <strong>✓ Key Tip</strong>

        <p>
          ${lesson.tip}
        </p>

      </div>


      <button
        id="completeLessonBtn"
        class="primary-btn"
        style="margin-top:20px">

        ${
          completed
          ? "✓ Lesson Completed"
          : "Complete Lesson +25 XP"
        }

      </button>


      <div class="lesson-navigation">

        <button
          id="previousLesson"
          class="secondary-btn"
          ${index === 0 ? "disabled" : ""}>

          ← Previous

        </button>


        <button
          id="nextLesson"
          class="secondary-btn"
          ${index === lessons.length - 1 ? "disabled" : ""}>

          Next →

        </button>

      </div>

    </div>

  `;


  document
    .getElementById("completeLessonBtn")
    .addEventListener(
      "click",
      completeCurrentLesson
    );


  document
    .getElementById("previousLesson")
    .addEventListener(
      "click",
      () => {

        if (currentLesson > 0) {
          openLesson(currentLesson - 1);
        }

      }
    );


  document
    .getElementById("nextLesson")
    .addEventListener(
      "click",
      () => {

        if (currentLesson < lessons.length - 1) {
          openLesson(currentLesson + 1);
        }

      }
    );


  showScreen("lessonDetail");

}


function completeCurrentLesson() {

  if (
    !state.completedLessons.includes(
      currentLesson
    )
  ) {

    state.completedLessons.push(
      currentLesson
    );

    state.xp += 25;

    saveState();

    showToast(
      "Lesson completed! +25 XP 🎉"
    );

  } else {

    showToast(
      "You already completed this lesson."
    );

  }


  updateAllStats();

  openLesson(currentLesson);

}


/* ---------- HOME STATS ---------- */

function updateHome() {

  const completed =
    state.completedLessons.length;

  const percent =
    Math.round(
      (completed / lessons.length) * 100
    );


  document.getElementById(
    "homeXp"
  ).textContent = state.xp;


  document.getElementById(
    "homeProgressText"
  ).textContent =
    `${completed} of ${lessons.length} lessons completed`;


  document.getElementById(
    "homeProgressPercent"
  ).textContent =
    `${percent}%`;


  document.getElementById(
    "homeProgressBar"
  ).style.width =
    `${percent}%`;


  const level =
    Math.floor(state.xp / 100) + 1;


  document.getElementById(
    "homeLevel"
  ).textContent =
    level;

}


/* ---------- PROFILE ---------- */

function updateProfile() {

  const completed =
    state.completedLessons.length;

  const percent =
    Math.round(
      (completed / lessons.length) * 100
    );


  document.getElementById(
    "profileXp"
  ).textContent =
    state.xp;


  document.getElementById(
    "profileLessons"
  ).textContent =
    completed;


  document.getElementById(
    "profileQuiz"
  ).textContent =
    `${state.bestQuiz}%`;


  document.getElementById(
    "profileTrades"
  ).textContent =
    state.trades;


  document.getElementById(
    "profilePercent"
  ).textContent =
    `${percent}%`;


  document.getElementById(
    "profileProgressBar"
  ).style.width =
    `${percent}%`;


  let title =
    "Forex Beginner";


  let description =
    "Complete lessons to unlock higher levels.";


  if (state.xp >= 250) {

    title = "Forex Explorer";

    description =
      "You're building a strong foundation.";

  }


  if (state.xp >= 500) {

    title = "Forex Student";

    description =
      "You're making excellent progress.";

  }


  if (state.xp >= 750) {

    title = "Forex Apprentice";

    description =
      "Keep learning and practicing.";

  }


  document.getElementById(
    "levelTitle"
  ).textContent =
    title;


  document.getElementById(
    "levelDescription"
  ).textContent =
    description;

}


/* ---------- QUIZ ---------- */

function startQuiz() {

  quizIndex = 0;

  quizScore = 0;

  quizAnswered = false;

  renderQuestion();

}


function renderQuestion() {

  const container =
    document.getElementById("quizContent");


  if (quizIndex >= questions.length) {

    showQuizResult();

    return;

  }


  const question =
    questions[quizIndex];


  const progress =
    ((quizIndex) /
      questions.length) * 100;


  container.innerHTML = `

    <div class="quiz-card">

      <div class="quiz-progress">

        <div
          class="quiz-progress-fill"
          style="width:${progress}%">
        </div>

      </div>


      <div class="question-count">
        QUESTION ${quizIndex + 1}
        OF ${questions.length}
      </div>


      <div class="question">
        ${question.question}
      </div>


      <div class="answer-list">

        ${question.answers
          .map(
            (answer, index) => `
              <button
                class="answer-btn"
                data-answer="${index}">

                ${answer}

              </button>
            `
          )
          .join("")}

      </div>

    </div>

  `;


  document
    .querySelectorAll(".answer-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          answerQuestion(
            Number(button.dataset.answer),
            button
          );

        }
      );

    });

}


function answerQuestion(answer, clickedButton) {

  if (quizAnswered) {
    return;
  }


  quizAnswered = true;


  const question =
    questions[quizIndex];


  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );


  buttons.forEach((button, index) => {

    if (index === question.correct) {
      button.classList.add("correct");
    }

  });


  if (answer === question.correct) {

    quizScore++;

    clickedButton.classList.add(
      "correct"
    );

    showToast("Correct! 🎉");

  } else {

    clickedButton.classList.add(
      "wrong"
    );

    showToast("Not quite. Keep learning!");

  }


  setTimeout(() => {

    quizIndex++;

    quizAnswered = false;

    renderQuestion();

  }, 900);

}


function showQuizResult() {

  const percentage =
    Math.round(
      (quizScore / questions.length) * 100
    );


  if (
    percentage > state.bestQuiz
  ) {

    state.bestQuiz =
      percentage;

    state.xp += 25;

    saveState();

  }


  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="quiz-card quiz-result">

      <div class="eyebrow">
        QUIZ COMPLETE
      </div>

      <div class="quiz-result-score">
        ${percentage}%
      </div>

      <p>
        You answered
        ${quizScore}
        out of
        ${questions.length}
        correctly.
      </p>

      <button
        id="retryQuiz"
        class="primary-btn"
        style="margin-top:20px">

        Try Again

      </button>

      <button
        id="quizLearn"
        class="secondary-btn"
        style="margin-top:10px">

        Continue Learning

      </button>

    </div>

  `;


  document
    .getElementById("retryQuiz")
    .addEventListener(
      "click",
      startQuiz
    );


  document
    .getElementById("quizLearn")
    .addEventListener(
      "click",
      () => showScreen("learn")
    );


  updateAllStats();

}


/* ---------- DEMO TRADING ---------- */

function updateTradeUI() {

  document.getElementById(
    "demoBalance"
  ).textContent =
    formatMoney(state.balance);


  document.getElementById(
    "tradeCount"
  ).textContent =
    state.trades;


  document.getElementById(
    "demoPrice"
  ).textContent =
    demoPrice.toFixed(5);


  const movement =
    demoPrice - previousPrice;


  document.getElementById(
    "priceMovement"
  ).textContent =
    `${movement >= 0 ? "+" : ""}${movement.toFixed(5)}`;


  renderPosition();

}


function formatMoney(number) {

  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }
  ).format(number);

}


function openPosition(side) {

  if (state.position) {

    showToast(
      "Close your current position first."
    );

    return;

  }


  state.position = {

    side: side,

    entry: demoPrice,

    openedAt:
      new Date().toISOString()

  };


  saveState();

  renderPosition();

  showToast(
    `${side.toUpperCase()} position opened`
  );

}


function calculatePositionPips() {

  if (!state.position) {
    return 0;
  }


  const difference =
    demoPrice -
    state.position.entry;


  if (state.position.side === "buy") {

    return difference / 0.0001;

  }


  return -difference / 0.0001;

}


function closePosition() {

  if (!state.position) {
    return;
  }


  const pips =
    calculatePositionPips();


  const pnl =
    pips * 1;


  state.balance += pnl;

  state.trades++;


  state.journal.unshift({

    type: "trade",

    side: state.position.side,

    entry: state.position.entry,

    exit: demoPrice,

    pips: Number(
      pips.toFixed(1)
    ),

    pnl: Number(
      pnl.toFixed(2)
    ),

    date:
      new Date().toISOString()

  });


  state.position = null;


  saveState();

  updateTradeUI();

  renderJournal();

  showToast(
    `Trade closed: ${pips.toFixed(1)} pips`
  );


  updateAllStats();

}


function renderPosition() {

  const box =
    document.getElementById(
      "positionBox"
    );


  if (!state.position) {

    box.classList.add("hidden");

    return;

  }


  box.classList.remove("hidden");


  const pips =
    calculatePositionPips();


  const pnl =
    pips * 1;


  box.innerHTML = `

    <strong>
      ${state.position.side.toUpperCase()}
      EUR/USD
    </strong>

    <br>

    Entry:
    ${state.position.entry.toFixed(5)}

    <br>

    Current:
    ${demoPrice.toFixed(5)}

    <br>

    P/L:
    <span class="${pnl >= 0 ? "trade-profit" : "trade-loss"}">
      ${pnl >= 0 ? "+" : ""}
      $${pnl.toFixed(2)}
      (${pips.toFixed(1)} pips)
    </span>

    <button
      id="closePositionBtn"
      class="secondary-btn"
      st
