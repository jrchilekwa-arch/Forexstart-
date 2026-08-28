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
    description: "Understand the bid-ask spread and trading costs.",
    content: `
      <h3>What is the spread?</h3>

      <p>
        The <strong>spread</strong> is the difference between the
        <strong>bid price</strong> and the <strong>ask price</strong>
        of a currency pair.
      </p>

      <p>
        When you look at a forex quote, you will normally see two prices.
        The bid is the price at which you can sell, while the ask is the
        price at which you can buy.
      </p>

      <h3>Simple example</h3>

      <p>
        Imagine EUR/USD is quoted as:
        <strong>1.1000 / 1.1002</strong>
      </p>

      <p>
        The difference is <strong>0.0002</strong>, which is the spread
        expressed in price terms.
      </p>

      <h3>Why does the spread matter?</h3>

      <ul>
        <li>A wider spread can increase the cost of entering a trade.</li>
        <li>A narrower spread generally means a smaller spread cost.</li>
        <li>Spreads can change depending on market conditions.</li>
      </ul>

      <h3>Beginner takeaway</h3>

      <p>
        Always understand the spread before entering a trade.
        A trade does not become profitable simply because the price
        moves slightly in your expected direction.
      </p>

      <p>
        <strong>Remember:</strong> ForexStart is educational and does not
        guarantee trading profits.
      </p>
    `
  },

  {
    title: "Leverage",
    description: "Understand leverage and why it increases risk.",
    content: `
      <h3>What is leverage?</h3>

      <p>
        <strong>Leverage</strong> allows a trader to control a larger
        position with a smaller amount of their own capital.
      </p>

      <p>
        For example, leverage may allow a trader to open a position
        larger than the cash they have deposited with a broker.
      </p>

      <h3>Why is leverage dangerous?</h3>

      <p>
        Leverage can magnify the effect of price movements on your
        account. This means losses can grow quickly when a trade moves
        against you.
      </p>

      <ul>
        <li>Higher leverage can mean greater exposure.</li>
        <li>Losses can increase quickly.</li>
        <li>Margin requirements and broker rules matter.</li>
        <li>Leverage does not create a guaranteed advantage.</li>
      </ul>

      <h3>Beginner rule</h3>

      <p>
        Never use high leverage simply because it is available.
        Understand your position size, potential loss and margin
        requirements first.
      </p>

      <p>
        <strong>Key lesson:</strong> More leverage does not mean
        more guaranteed profit. It means greater exposure.
      </p>
    `
  },

  {
    title: "Risk Management",
    description: "Learn how to plan and control trading risk.",
    content: `
      <h3>Why risk management matters</h3>

      <p>
        <strong>Risk management</strong> is the process of deciding how
        much you are willing to lose before entering a trade and how
        you will control that risk.
      </p>

      <h3>Important concepts</h3>

      <ul>
        <li>
          <strong>Position size:</strong> How large your trade is.
        </li>

        <li>
          <strong>Stop-loss:</strong> An order that can help limit a
          loss if the market moves against you.
        </li>

        <li>
          <strong>Risk-to-reward:</strong> A way of comparing potential
          loss with a planned potential gain.
        </li>

        <li>
          <strong>Risk per trade:</strong> The amount of your account
          you decide to put at risk on a trade.
        </li>
      </ul>

      <h3>Simple example</h3>

      <p>
        Suppose a practice account has a balance of
        <strong>$1,000</strong>.
      </p>

      <p>
        If a trader chooses to risk 1%, the planned risk amount would
        be <strong>$10</strong>.
      </p>

      <p>
        This does not mean the trader will automatically lose $10.
        It is simply a planned risk amount before the trade.
      </p>

      <h3>Beginner takeaway</h3>

      <p>
        Good trading is not only about finding winning trades.
        It is also about controlling losses and protecting your
        trading capital.
      </p>

      <p>
        <strong>Important:</strong> Risk management reduces risk;
        it cannot eliminate the possibility of losing money.
      </p>
    `
  },

  {
    title: "Demo Trading",
    description: "Practice your skills with virtual money.",
    content: `
      <h3>What is demo trading?</h3>

      <p>
        <strong>Demo trading</strong> allows you to practice trading
        using virtual money instead of your own cash.
      </p>

      <p>
        It can help beginners become familiar with trading platforms,
        currency pairs, orders, position sizes and risk management.
      </p>

      <h3>What should you practice?</h3>

      <ul>
        <li>Reading currency-pair prices.</li>
        <li>Understanding buy and sell orders.</li>
        <li>Calculating potential risk.</li>
        <li>Using sensible position sizes.</li>
        <li>Recording your trading decisions.</li>
      </ul>

      <h3>Build good habits</h3>

      <p>
        Treat demo trading seriously. Instead of randomly pressing
        BUY or SELL, write down why you would take a trade and what
        could make the idea wrong.
      </p>

      <h3>Final lesson</h3>

      <p>
        Demo trading is practice, not proof that you will make money
        in a live account. Real markets involve risk, costs,
        execution differences and emotional pressure.
      </p>

      <p>
        <strong>ForexStart rule:</strong> Learn first, practice with
        virtual money, understand the risks, and never trade money
        you cannot afford to lose.
      </p>
    `
  }

];

const quizQuestions = [
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
function showUpgradeMessage() {

  alert(
    "👑 ForexStart PRO is coming soon!\n\n" +
    "This demo shows where the paid upgrade will appear."
  );
}
