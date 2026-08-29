/* =====================================================
   FOREXSTART - COMPLETE APP JAVASCRIPT
   ===================================================== */

/* -----------------------------
   APP DATA
----------------------------- */

const lessons = [
  {
    title: "What is Forex?",
    description: "Learn what forex trading means.",
    content: `
      <p>
        Forex means foreign exchange. It is the global market
        where currencies are bought and sold.
      </p>

      <div class="example-box">
        <h3>Example</h3>
        <p>
          When you trade EUR/USD, you are comparing the euro
          with the US dollar.
        </p>
      </div>

      <div class="tip-box">
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
    description: "Understand how currency pairs work.",
    content: `
      <p>
        Forex currencies are normally traded in pairs.
        The first currency is called the base currency and
        the second is called the quote currency.
      </p>

      <div class="example-box">
        <h3>Example</h3>
        <p>
          In EUR/USD, EUR is the base currency and USD is
          the quote currency.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Always look at both currencies in a pair.
          The price tells you how much of the quote currency
          is needed for one unit of the base currency.
        </p>
      </div>
    `
  },

  {
    title: "What is a Pip?",
    description: "Learn how traders measure price movement.",
    content: `
      <p>
        A pip is a common unit used to measure small price
        movements in forex.
      </p>

      <div class="example-box">
        <h3>Example</h3>
        <p>
          If EUR/USD moves from 1.1000 to 1.1001,
          that is commonly a 1-pip movement.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Pips measure price movement. They do not
          automatically tell you how much money you gained
          or lost.
        </p>
      </div>
    `
  },

  {
    title: "Buy & Sell",
    description: "Understand basic buy and sell positions.",
    content: `
      <p>
        Forex traders can potentially benefit from prices
        moving in either direction.
      </p>

      <div class="example-box">
        <h3>Buy</h3>
        <p>
          A trader buys when they expect the price to rise.
        </p>

        <h3>Sell</h3>
        <p>
          A trader sells when they expect the price to fall.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Never enter a trade simply because you think
          the price will move. Learn risk management first.
        </p>
      </div>
    `
  },

  {
    title: "Bid & Ask",
    description: "Learn the difference between bid and ask prices.",
    content: `
      <p>
        Forex prices normally contain a bid price and an ask
        price.
      </p>

      <div class="example-box">
        <h3>Bid</h3>
        <p>
          The price at which the market is willing to buy.
        </p>

        <h3>Ask</h3>
        <p>
          The price at which the market is willing to sell.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          The difference between the bid and ask is called
          the spread.
        </p>
      </div>
    `
  },

  {
    title: "Spread",
    description: "Understand one of the costs of trading.",
    content: `
      <p>
        The spread is the difference between the bid price
        and the ask price.
      </p>

      <div class="example-box">
        <h3>Example</h3>
        <p>
          If the bid is 1.1000 and the ask is 1.1002,
          the difference is 2 pips.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Trading costs can affect your results, so learn
          about spreads before trading real money.
        </p>
      </div>
    `
  },

  {
    title: "Leverage",
    description: "Learn why leverage can increase risk.",
    content: `
      <p>
        Leverage allows a trader to control a larger position
        using a smaller amount of capital.
      </p>

      <div class="example-box">
        <h3>Important</h3>
        <p>
          Leverage can increase potential gains, but it can
          also increase potential losses.
        </p>
      </div>

      <div class="tip-box">
        <strong>⚠️ Beginner Warning</strong>
        <p>
          Never use high leverage simply because it is available.
          Understand the risks first.
        </p>
      </div>
    `
  },

  {
    title: "Stop Loss",
    description: "Learn how traders can limit potential losses.",
    content: `
      <p>
        A stop-loss order is a trading instruction designed
        to close a position when price reaches a specified
        level.
      </p>

      <div class="example-box">
        <h3>Purpose</h3>
        <p>
          Traders may use stop losses to help control how much
          they are willing to risk on a trade.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Risk management is one of the most important skills
          a new trader can learn.
        </p>
      </div>
    `
  },

  {
    title: "Risk Management",
    description: "Learn how to think about trading risk.",
    content: `
      <p>
        Risk management means planning how much money you are
        willing to risk before entering a trade.
      </p>

      <div class="example-box">
        <h3>Example</h3>
        <p>
          A trader might decide to risk only a small percentage
          of their account on one trade.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Protecting your trading capital is more important
          than trying to make quick profits.
        </p>
      </div>
    `
  },

  {
    title: "Trading Psychology",
    description: "Understand the importance of discipline.",
    content: `
      <p>
        Trading psychology involves emotions, discipline,
        patience and decision-making.
      </p>

      <div class="example-box">
        <h3>Common emotions</h3>
        <p>
          Fear, greed, excitement and frustration can all
          influence trading decisions.
        </p>
      </div>

      <div class="tip-box">
        <strong>💡 Beginner Tip</strong>
        <p>
          Build your knowledge and practice with a demo account
          before considering real-money trading.
        </p>
      </div>
    `
  }
];


/* -----------------------------
   QUIZ DATA
----------------------------- */

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
    question: "What does EUR/USD represent?",
    answers: [
      "Two stocks",
      "A currency pair",
      "A cryptocurrency",
      "A bank account"
    ],
    correct: 1
  },

  {
    question: "What is a pip commonly used to measure?",
    answers: [
      "Account age",
      "Price movement",
      "Trading hours",
      "Broker fees"
    ],
    correct: 1
  },

  {
    question: "What is the spread?",
    answers: [
      "The difference between bid and ask",
      "Your account balance",
      "Your trading password",
      "A type of currency"
    ],
    correct: 0
  },

  {
    question: "What can leverage do?",
    answers: [
      "Remove all trading risk",
      "Increase buying power and risk",
      "Guarantee profit",
      "Prevent losses"
    ],
    correct: 1
  },

  {
    question: "What is risk management?",
    answers: [
      "Trying to make money quickly",
      "Planning and controlling potential losses",
      "Using maximum leverage",
      "Trading without a plan"
    ],
    correct: 1
  }
];


/* -----------------------------
   APP STATE
----------------------------- */

let currentLesson = 0;
let completedLessons =
  JSON.parse(localStorage.getItem("forexCompletedLessons")) || [];

let xp =
  Number(localStorage.getItem("forexXP")) || 100;

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;


/* -----------------------------
   SCREEN NAVIGATION
----------------------------- */

function showScreen(screenName) {

  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.add("hidden");
  });

  const target = document.getElementById(screenName);

  if (target) {
    target.classList.remove("hidden");
  }

  updateNavigation(screenName);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (screenName === "lessons") {
    renderLessons();
  }

  if (screenName === "quiz") {
    startQuiz();
  }

  updateStats();
}


/* -----------------------------
   NAVIGATION ACTIVE STATE
----------------------------- */

function updateNavigation(screenName) {

  document.querySelectorAll(".bottom-nav button")
    .forEach(button => {
      button.classList.remove("active");
    });

  if (screenName === "home") {
    document.getElementById("nav-home").classList.add("active");
  }

  if (screenName === "lessons" ||
      screenName === "lessonDetail") {
    document.getElementById("nav-lessons").classList.add("active");
  }

  if (screenName === "quiz") {
    document.getElementById("nav-quiz").classList.add("active");
  }

  if (screenName === "calculator") {
    document.getElementById("nav-calculator").classList.add("active");
  }
}


/* -----------------------------
   MENU
----------------------------- */

function toggleMenu() {

  const menu = document.getElementById("menu");

  menu.classList.toggle("show");
}


/* -----------------------------
   LESSON LIST
----------------------------- */

function renderLessons() {

  const list = document.getElementById("lessonList");

  list.innerHTML = "";

  lessons.forEach((lesson, index) => {

    const completed =
      completedLessons.includes(index);

    const card = document.createElement("div");

    card.className = "lesson-card";

    card.onclick = () => openLesson(index);

    card.innerHTML = `
      <div class="lesson-number">
        LESSON ${index + 1} OF ${lessons.length}
      </div>

      <h3>
        ${lesson.title}
        ${completed ? " ✓" : ""}
      </h3>

      <p>${lesson.description}</p>
    `;

    list.appendChild(card);
  });
}


/* -----------------------------
   OPEN LESSON
----------------------------- */

function openLesson(index) {

  currentLesson = index;

  const lesson = lessons[index];

  const container =
    document.getElementById("lessonContent");

  container.innerHTML = `

    <div class="eyebrow">
      LESSON ${index + 1} OF ${lessons.length}
    </div>

    <div class="lesson-box">

      <h2>${lesson.title}</h2>

      ${lesson.content}

      <button
        class="complete-btn"
        onclick="completeLesson(${index})"
      >
        ${
          completedLessons.includes(index)
          ? "✓ Lesson Completed"
          : "Complete Lesson +100 XP"
        }
      </button>

    </div>
  `;

  showScreen("lessonDetail");
}


/* -----------------------------
   COMPLETE LESSON
----------------------------- */

function completeLesson(index) {

  if (!completedLessons.includes(index)) {

    completedLessons.push(index);

    xp += 100;

    localStorage.setItem(
      "forexCompletedLessons",
      JSON.stringify(completedLessons)
    );

    localStorage.setItem(
      "forexXP",
      xp
    );
  }

  updateStats();

  openLesson(index);
}


/* -----------------------------
   UPDATE STATS
----------------------------- */

function updateStats() {

  const xpHome =
    document.getElementById("xpHome");

  const xpProgress =
    document.getElementById("xpProgress");

  const progressPercent =
    document.getElementById("progressPercent");

  const xpBar =
    document.getElementById("xpBar");

  const streakHome =
    document.getElementById("streakHome");

  if (xpHome) {
    xpHome.textContent = xp;
  }

  if (xpProgress) {
    xpProgress.textContent = xp;
  }

  const progress =
    Math.min(
      100,
      Math.round(
        (completedLessons.length / lessons.length) * 100
      )
    );

  if (progressPercent) {
    progressPercent.textContent =
      progress + "%";
  }

  if (xpBar) {

    const xpPercent =
      Math.min(100, (xp / 1000) * 100);

    xpBar.style.width =
      xpPercent + "%";
  }

  if (streakHome) {
    streakHome.textContent = 0;
  }
}


/* -----------------------------
   QUIZ
----------------------------- */

function startQuiz() {

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  renderQuestion();
}


/* -----------------------------
   RENDER QUESTION
----------------------------- */

function renderQuestion() {

  const container =
    document.getElementById("quizContent");

  if (quizIndex >= questions.length) {

    showQuizResult();

    return;
  }

  const q = questions[quizIndex];

  quizAnswered = false;

  let html = `

    <div class="question-count">
      QUESTION ${quizIndex + 1} OF ${questions.length}
    </div>

    <div class="question">
      ${quizIndex + 1}. ${q.question}
    </div>
  `;

  q.answers.forEach((answer, index) => {

    html += `
      <button
        class="answer-btn"
        onclick="selectAnswer(${index})"
      >
        ${answer}
      </button>
    `;
  });

  html += `
    <button
      id="nextQuestionBtn"
      class="next-btn"
      onclick="nextQuestion()"
      style="display:none"
    >
      Next Question →
    </button>
  `;

  container.innerHTML = html;
}


/* -----------------------------
   SELECT ANSWER
----------------------------- */

function selectAnswer(index) {

  if (quizAnswered) return;

  quizAnswered = true;

  const question =
    questions[quizIndex];

  const buttons =
    document.querySelectorAll(".answer-btn");

  buttons.forEach((button, i) => {

    button.disabled = true;

    if (i === question.correct) {
      button.classList.add("correct");
    }

    if (
      i === index &&
      i !== question.correct
    ) {
      button.classList.add("wrong");
    }
  });

  if (index === question.correct) {
    quizScore++;
  }

  const nextButton =
    document.getElementById("nextQuestionBtn");

  if (nextButton) {
    nextButton.style.display = "block";
  }
}


/* -----------------------------
   NEXT QUESTION
----------------------------- */

function nextQuestion() {

  quizIndex++;

  renderQuestion();
}


/* -----------------------------
   QUIZ RESULT
----------------------------- */

function showQuizResult() {

  const container =
    document.getElementById("quizContent");

  const percentage =
    Math.round(
      (quizScore / questions.length) * 100
    );

  container.innerHTML = `

    <div class="quiz-result">

      <h2>Quiz Complete! 🎉</h2>

      <div class="quiz-score">
        ${quizScore}/${questions.length}
      </div>

      <p>
        You scored ${percentage}%.
      </p>

      <button
        class="next-btn"
        onclick="startQuiz()"
      >
        Try Again
      </button>

      <button
        class="next-btn"
        onclick="showScreen('lessons')"
      >
        Continue Learning →
      </button>

    </div>
  `;
}


/* -----------------------------
   RISK CALCULATOR
----------------------------- */

function calculateRisk() {

  const balance =
    Number(document.getElementById("balance").value);

  const risk =
    Number(document.getElementById("risk").value);

  const result =
    document.getElementById("riskResult");

  if (
    !balance ||
    balance <= 0 ||
    !risk ||
    risk <= 0
  ) {

    result.textContent =
      "Please enter valid numbers.";

    return;
  }

  if (risk > 100) {

    result.textContent =
      "Risk percentage cannot be above 100%.";

    return;
  }

  const riskAmount =
    balance * (risk / 100);

  result.innerHTML = `
    Maximum planned risk:
    <strong>$${riskAmount.toFixed(2)}</strong>
    <br><br>
    This is ${risk}% of your $${balance.toFixed(2)} account.
  `;
}


/* -----------------------------
   START APP
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  renderLessons();

  updateStats();

  showScreen("home");

});
