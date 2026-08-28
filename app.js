const lessons = [
  {
    title: "What is Forex?",
    description: "Understand the foreign exchange market.",
    content: `
      <p>Forex, short for foreign exchange, is the market where currencies are exchanged.</p>
      <p>When you trade forex, you are comparing the value of one currency against another.</p>
      <ul>
        <li>Forex means foreign exchange.</li>
        <li>Currencies are traded in pairs.</li>
        <li>The market operates around the world.</li>
      </ul>
    `
  },
  {
    title: "Currency Pairs",
    description: "Learn how currency pairs work.",
    content: `
      <p>Forex currencies are quoted in pairs, such as EUR/USD.</p>
      <p>The first currency is called the base currency. The second is the quote currency.</p>
      <ul>
        <li>EUR/USD</li>
        <li>GBP/USD</li>
        <li>USD/JPY</li>
      </ul>
    `
  },
  {
    title: "Pips",
    description: "Learn the basic unit of price movement.",
    content: `
      <p>A pip is a common unit used to describe a small movement in a forex price.</p>
      <p>Understanding pips helps traders measure potential gains and losses.</p>
    `
  },
  {
    title: "Lots",
    description: "Understand trade position sizes.",
    content: `
      <p>A lot describes the size of a forex position.</p>
      <p>Different lot sizes can create very different levels of risk, so beginners should understand position sizing before trading.</p>
    `
  },
  {
    title: "Spread",
    description: "Understand the difference between prices.",
    content: `
      <p>The spread is the difference between the buying price and selling price shown by a broker.</p>
      <p>It is one of the costs traders need to understand.</p>
    `
  },
  {
    title: "Leverage",
    description: "Learn why leverage can increase risk.",
    content: `
      <p>Leverage allows traders to control a larger position with a smaller amount of capital.</p>
      <p>It can increase both potential gains and potential losses.</p>
      <p>Beginners should treat leverage with caution.</p>
    `
  },
  {
    title: "Risk Management",
    description: "Learn how to protect your trading account.",
    content: `
      <p>Risk management is one of the most important parts of learning to trade.</p>
      <ul>
        <li>Use sensible position sizes.</li>
        <li>Understand stop losses.</li>
        <li>Never risk money you cannot afford to lose.</li>
      </ul>
    `
  },
  {
    title: "Demo Trading",
    description: "Practice trading without real money.",
    content: `
      <p>A demo account uses virtual money to simulate trading.</p>
      <p>It allows beginners to practice placing trades and managing risk without using real money.</p>
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
    question: "Which is an example of a currency pair?",
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
      "Both potential gains and losses"
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
let demoBalance = 10000;

let completedLessons =
  JSON.parse(localStorage.getItem("forexstartProgress")) || [];

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (screenId === "lessons") {
    renderLessons();
  }

  if (screenId === "quiz") {
    loadQuiz();
  }

  updateProgress();
}

function renderLessons() {
  const list = document.getElementById("lessonList");

  list.innerHTML = "";

  lessons.forEach((lesson, index) => {

    const completed = completedLessons.includes(index);

    const card = document.createElement("button");

    card.className =
      "lesson-card " + (completed ? "completed" : "");

    card.innerHTML = `
      <div class="lesson-icon">
        ${completed ? "✓" : "📖"}
      </div>

      <div>
        <h3>Lesson ${index + 1}: ${lesson.title}</h3>
        <p>${lesson.description}</p>
      </div>
    `;

    card.onclick = () => openLesson(index);

    list.appendChild(card);
  });
}

function openLesson(index) {
  currentLesson = index;

  const lesson = lessons[index];

  document.getElementById("lessonNumber").textContent =
    `LESSON ${index + 1} OF ${lessons.length}`;

  document.getElementById("lessonTitle").textContent =
    lesson.title;

  document.getElementById("lessonContent").innerHTML =
    lesson.content;

  const button =
    document.getElementById("completeLessonBtn");

  if (completedLessons.includes(index)) {
    button.textContent = "Lesson Completed ✓";
    button.disabled = true;
  } else {
    button.textContent = "Complete Lesson ✓";
    button.disabled = false;
  }

  button.onclick = completeLesson;

  showScreen("lessonDetail");
}

function completeLesson() {

  if (!completedLessons.includes(currentLesson)) {
    completedLessons.push(currentLesson);

    localStorage.setItem(
      "forexstartProgress",
      JSON.stringify(completedLessons)
    );
  }

  updateProgress();

  document.getElementById("completeLessonBtn").textContent =
    "Lesson Completed ✓";

  document.getElementById("completeLessonBtn").disabled = true;
}

function updateProgress() {

  const percent =
    Math.round(
      (completedLessons.length / lessons.length) * 100
    );

  document.getElementById("progressText").textContent =
    percent + "%";

  document.getElementById("progressBar").style.width =
    percent + "%";

  if (percent === 0) {
    document.getElementById("progressMessage").textContent =
      "Start your first lesson today.";
  } else if (percent < 100) {
    document.getElementById("progressMessage").textContent =
      `${completedLessons.length} of ${lessons.length} lessons completed.`;
  } else {
    document.getElementById("progressMessage").textContent =
      "🎉 Course completed! Great work.";
  }
}

function loadQuiz() {

  const q = quizQuestions[currentQuiz];

  document.getElementById("quizQuestion").innerHTML = `
    <div class="quiz-question">
      ${currentQuiz + 1}. ${q.question}
    </div>
  `;

  const answers =
    document.getElementById("quizAnswers");

  answers.innerHTML = "";

  document.getElementById("quizResult").textContent = "";

  document.getElementById("nextQuizBtn")
    .classList.add("hidden");

  q.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer-btn";

    button.textContent = answer;

    button.onclick = () => answerQuiz(index);

    answers.appendChild(button);
  });
}

function answerQuiz(index) {

  const q = quizQuestions[currentQuiz];

  const result =
    document.getElementById("quizResult");

  if (index === q.correct) {
    result.textContent = "✅ Correct!";
  } else {
    result.textContent =
      "❌ Not quite. Keep learning and try again.";
  }

  document.querySelectorAll(".answer-btn")
    .forEach(button => {
      button.disabled = true;
    });

  if (currentQuiz < quizQuestions.length - 1) {
    document.getElementById("nextQuizBtn")
      .classList.remove("hidden");
  } else {
    document.getElementById("nextQuizBtn").textContent =
      "Restart Quiz ↻";

    document.getElementById("nextQuizBtn")
      .classList.remove("hidden");
  }
}

document.getElementById("nextQuizBtn").onclick = () => {

  if (currentQuiz < quizQuestions.length - 1) {
    currentQuiz++;
  } else {
    currentQuiz = 0;
  }

  loadQuiz();
};

function calculateRisk() {

  const balance =
    Number(document.getElementById("balance").value);

  const risk =
    Number(document.getElementById("riskPercent").value);

  const result =
    document.getElementById("calculatorResult");

  if (!balance || !risk || balance <= 0 || risk <= 0) {
    result.textContent =
      "Enter a valid balance and risk percentage.";
    return;
  }

  const riskAmount =
    balance * (risk / 100);

  result.innerHTML =
    `Maximum planned risk: $${riskAmount.toFixed(2)}<br>
     <small>This is an educational calculation, not financial advice.</small>`;
}

function demoTrade(type) {

  const change =
    Math.floor(Math.random() * 101) - 50;

  demoBalance += change;

  document.getElementById("demoBalance").textContent =
    "$" + demoBalance.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    );

  document.getElementById("tradeMessage").textContent =
    `${type.toUpperCase()} demo trade simulated. Result: ${
      change >= 0 ? "+" : ""
    }$${change}.`;
}

function updateDemoPrice() {

  const price =
    1.1000 +
    (Math.random() * 0.01 - 0.005);

  document.getElementById("demoPrice").textContent =
    price.toFixed(4);
}

setInterval(updateDemoPrice, 3000);

renderLessons();
updateProgress();
