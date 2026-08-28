const lessons = [
  {
    title: "What Is Forex?",
    description: "Understand the foreign exchange market.",
    content: `
      <p><strong>Forex</strong> means foreign exchange. It is the global market where currencies are exchanged.</p>
      <p>When you trade forex, you are comparing one currency against another.</p>
      <h3>Key idea</h3>
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
      <p>Forex prices are normally shown as currency pairs, such as <strong>EUR/USD</strong>.</p>
      <p>The first currency is the <strong>base currency</strong>. The second is the <strong>quote currency</strong>.</p>
      <h3>Examples</h3>
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
      <p>A <strong>pip</strong> is a standard unit commonly used to describe small changes in a forex exchange rate.</p>
      <p>Understanding pips helps beginners understand how much a currency pair has moved.</p>
      <h3>Remember</h3>
      <p>Always check the quotation convention for the currency pair you are studying.</p>
    `
  },

  {
    title: "Lots & Position Size",
    description: "Learn how trade size affects risk.",
    content: `
      <p>A <strong>lot</strong> describes the size of a forex position.</p>
      <p>Position size matters because larger positions can create larger potential gains and losses.</p>
      <h3>Beginner rule</h3>
      <p>Learn position sizing and risk management before using real money.</p>
    `
  },

  {
    title: "Spread",
    description: "Learn about one common trading cost.",
    content: `
      <p>The <strong>spread</strong> is the difference between the bid price and the ask price.</p>
      <p>It is one of the costs that can affect a forex trade.</p>
      <h3>Why it matters</h3>
      <p>A trader should understand spreads before placing trades.</p>
    `
  },

  {
    title: "Leverage",
    description: "Understand leverage and its risks.",
    content: `
      <p><strong>Leverage</strong> allows a trader to control a larger position using less capital.</p>
      <p>Leverage can increase the size of both potential gains and potential losses.</p>
      <h3>Important</h3>
      <p>High leverage can increase risk significantly. Beginners should learn how it works before using it.</p>
    `
  },

  {
    title: "Risk Management",
    description: "Learn how traders manage potential losses.",
    content: `
      <p><strong>Risk management</strong> is one of the most important skills in trading.</p>
      <h3>Things to learn</h3>
      <ul>
        <li>Position sizing</li>
        <li>Stop-loss orders</li>
        <li>Risk-to-reward concepts</li>
        <li>Keeping losses within a planned limit</li>
      </ul>
      <p>Never risk money you cannot afford to lose.</p>
    `
  },

  {
    title: "Demo Trading",
    description: "Practice without using real money.",
    content: `
      <p>A <strong>demo account</strong> uses virtual money to simulate trading.</p>
      <p>Demo trading can help beginners practice entering and managing trades without putting real money at risk.</p>
      <h3>Your next step</h3>
      <p>Use the ForexStart demo trading simulator to practice what you have learned.</p>
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
let demoBalance = 10000;

let completedLessons =
  JSON.parse(localStorage.getItem("forexstartProgress")) || [];


function showScreen(screenId) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const screen = document.getElementById(screenId);

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
    loadQuiz();
  }

  updateProgress();
}


function renderLessons() {

  const list = document.getElementById("lessonList");

  if (!list) return;

  list.innerHTML = "";

  lessons.forEach((lesson, index) => {

    const completed = completedLessons.includes(index);

    const unlocked =
      index === 0 ||
      completedLessons.includes(index - 1);

    const card = document.createElement("button");

    card.className =
      "lesson-card " +
      (completed ? "completed " : "") +
      (!unlocked ? "locked" : "");

    card.innerHTML = `
      <div class="lesson-icon">
        ${
          completed
            ? "✓"
            : unlocked
              ? "📖"
              : "🔒"
        }
      </div>

      <div>
        <h3>Lesson ${index + 1}: ${lesson.title}</h3>
        <p>
          ${
            unlocked
              ? lesson.description
              : "Complete the previous lesson to unlock."
          }
        </p>
      </div>
    `;

    if (unlocked) {
      card.onclick = () => openLesson(index);
    } else {
      card.onclick = () => {
        alert("🔒 Complete the previous lesson first.");
      };
    }

    list.appendChild(card);
  });
}


function openLesson(index) {

  const unlocked =
    index === 0 ||
    completedLessons.includes(index - 1);

  if (!unlocked) {
    alert("🔒 Complete the previous lesson first.");
    return;
  }

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

    button.textContent =
      "Lesson Completed ✓";

    button.disabled = true;

  } else {

    button.textContent =
      "Complete Lesson ✓";

    button.disabled = false;

  }

  button.onclick = completeLesson;

  showScreen("lessonDetail");
}


function completeLesson() {

  if (!completedLessons.includes(currentLesson)) {

    completedLessons.push(currentLesson);

    completedLessons.sort((a, b) => a - b);

    localStorage.setItem(
      "forexstartProgress",
      JSON.stringify(completedLessons)
    );
  }

  updateProgress();

  const button =
    document.getElementById("completeLessonBtn");

  button.textContent =
    "Lesson Completed ✓";

  button.disabled = true;
}


function updateProgress() {

  const progressText =
    document.getElementById("progressText");

  const progressBar =
    document.getElementById("progressBar");

  const progressMessage =
    document.getElementById("progressMessage");

  if (!progressText || !progressBar) return;

  const percent =
    Math.round(
      (completedLessons.length / lessons.length) * 100
    );

  progressText.textContent =
    percent + "%";

  progressBar.style.width =
    percent + "%";

  if (progressMessage) {

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
}


function loadQuiz() {

  const q =
    quizQuestions[currentQuiz];

  const question =
    document.getElementById("quizQuestion");

  const answers =
    document.getElementById("quizAnswers");

  const result =
    document.getElementById("quizResult");

  const nextButton =
    document.getElementById("nextQuizBtn");

  if (!q || !question || !answers) return;

  question.innerHTML = `
    <div class="quiz-question">
      ${currentQuiz + 1}. ${q.question}
    </div>
  `;

  answers.innerHTML = "";

  if (result) {
    result.textContent = "";
  }

  if (nextButton) {
    nextButton.classList.add("hidden");
    nextButton.textContent =
      "Next Question →";
  }

  q.answers.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.className =
      "answer-btn";

    button.textContent =
      answer;

    button.onclick =
      () => answerQuiz(index);

    answers.appendChild(button);
  });
}


function answerQuiz(index) {

  const q =
    quizQuestions[currentQuiz];

  const result =
    document.getElementById("quizResult");

  if (index === q.correct) {

    result.textContent =
      "✅ Correct! Great job.";

  } else {

    result.textContent =
      "❌ Not quite. Review the lesson and keep learning.";
  }

  document
    .querySelectorAll(".answer-btn")
    .forEach(button => {
      button.disabled = true;
    });

  const nextButton =
    document.getElementById("nextQuizBtn");

  if (nextButton) {

    nextButton.classList.remove("hidden");

    if (currentQuiz === quizQuestions.length - 1) {
      nextButton.textContent =
        "Restart Quiz ↻";
    }
  }
}


const nextQuizButton =
  document.getElementById("nextQuizBtn");

if (nextQuizButton) {

  nextQuizButton.onclick = () => {

    if (
      currentQuiz <
      quizQuestions.length - 1
    ) {

      currentQuiz++;

    } else {

      currentQuiz = 0;
    }

    loadQuiz();
  };
}


function calculateRisk() {

  const balance =
    Number(
      document.getElementById("balance").value
    );

  const risk =
    Number(
      document.getElementById("riskPercent").value
    );

  const result =
    document.getElementById("calculatorResult");

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


function demoTrade(type) {

  const change =
    Math.floor(
      Math.random() * 101
    ) - 50;

  demoBalance += change;

  document.getElementById("demoBalance").textContent =
    "$" +
    demoBalance.toLocaleString(
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

  const priceElement =
    document.getElementById("demoPrice");

  if (priceElement) {
    priceElement.textContent =
      price.toFixed(4);
  }
}


setInterval(updateDemoPrice, 3000);


renderLessons();
updateProgress();
