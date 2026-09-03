
/* =========================================================
   FOREXSTART V2.1
   Complete App JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     DATA
     ======================================================= */

  const lessons = [
    {
      title: "What is Forex?",
      description: "Learn what forex trading means.",
      content: `
        <h2>What is Forex?</h2>
        <p>Forex, short for foreign exchange, is the global market where currencies are bought and sold.</p>
        <p>When you trade forex, you are trading one currency against another, such as EUR/USD.</p>
        <div class="lesson-tip">
          <strong>Key idea:</strong> Forex is always traded in currency pairs.
        </div>
      `
    },
    {
      title: "Currency Pairs",
      description: "Understand how currency pairs work.",
      content: `
        <h2>Currency Pairs</h2>
        <p>A currency pair shows the value of one currency compared with another.</p>
        <p>For example, EUR/USD compares the euro with the US dollar.</p>
        <div class="lesson-tip">
          <strong>Example:</strong> If EUR/USD is 1.08500, one euro is worth about 1.085 US dollars.
        </div>
      `
    },
    {
      title: "What is a Pip?",
      description: "Learn the basic unit used to measure price movement.",
      content: `
        <h2>What is a Pip?</h2>
        <p>A pip is a standard unit used to measure movement in many forex currency pairs.</p>
        <p>For most major pairs, one pip is 0.0001.</p>
        <div class="lesson-tip">
          <strong>Example:</strong> 1.08500 → 1.08600 is a movement of 10 pips.
        </div>
      `
    },
    {
      title: "Buy & Sell",
      description: "Understand the basic idea behind BUY and SELL.",
      content: `
        <h2>Buy & Sell</h2>
        <p>You BUY when you expect the price to rise.</p>
        <p>You SELL when you expect the price to fall.</p>
        <div class="lesson-tip">
          <strong>Remember:</strong> A trade can move against you, so risk management matters.
        </div>
      `
    },
    {
      title: "Bid & Ask",
      description: "Learn the difference between bid and ask prices.",
      content: `
        <h2>Bid & Ask</h2>
        <p>The BID is the price at which you can sell.</p>
        <p>The ASK is the price at which you can buy.</p>
        <div class="lesson-tip">
          <strong>Key idea:</strong> The difference between bid and ask is part of the spread.
        </div>
      `
    },
    {
      title: "Spread",
      description: "Understand one of the basic costs of trading.",
      content: `
        <h2>Spread</h2>
        <p>The spread is the difference between the bid price and the ask price.</p>
        <p>It is one of the costs traders may encounter when opening a trade.</p>
        <div class="lesson-tip">
          <strong>Tip:</strong> Smaller spreads can reduce trading costs.
        </div>
      `
    },
    {
      title: "Leverage",
      description: "Learn what leverage means and why it is risky.",
      content: `
        <h2>Leverage</h2>
        <p>Leverage allows traders to control a larger position with a smaller amount of capital.</p>
        <p>However, leverage can increase both potential gains and potential losses.</p>
        <div class="lesson-tip">
          <strong>Warning:</strong> More leverage does not mean less risk.
        </div>
      `
    },
    {
      title: "Stop Loss",
      description: "Learn how a stop loss can help control risk.",
      content: `
        <h2>Stop Loss</h2>
        <p>A stop loss is an instruction designed to close a trade when price reaches a specified level.</p>
        <p>Traders commonly use stop losses to limit potential losses.</p>
        <div class="lesson-tip">
          <strong>Key idea:</strong> Decide your risk before entering a trade.
        </div>
      `
    },
    {
      title: "Risk Management",
      description: "Learn why protecting your trading account matters.",
      content: `
        <h2>Risk Management</h2>
        <p>Risk management is one of the most important parts of trading.</p>
        <p>It involves controlling position size, using appropriate stops and avoiding risking too much on one trade.</p>
        <div class="lesson-tip">
          <strong>Rule:</strong> Protecting your capital is more important than chasing quick profits.
        </div>
      `
    },
    {
      title: "Trading Psychology",
      description: "Understand the emotional side of trading.",
      content: `
        <h2>Trading Psychology</h2>
        <p>Trading can create emotions such as fear, excitement, frustration and greed.</p>
        <p>A good trading process focuses on discipline rather than emotional decisions.</p>
        <div class="lesson-tip">
          <strong>Remember:</strong> A losing trade does not automatically mean you made a bad decision.
        </div>
      `
    }
  ];

  const questions = [
    {
      question: "What does Forex stand for?",
      options: [
        "Foreign Exchange",
        "Foreign Export",
        "Financial Exchange",
        "Future Exchange"
      ],
      answer: 0
    },
    {
      question: "What does EUR/USD represent?",
      options: [
        "Two stocks",
        "A currency pair",
        "A cryptocurrency",
        "A commodity"
      ],
      answer: 1
    },
    {
      question: "For many major currency pairs, what is one pip?",
      options: [
        "0.1",
        "0.01",
        "0.0001",
        "1.0000"
      ],
      answer: 2
    },
    {
      question: "What does leverage do?",
      options: [
        "Removes all risk",
        "Allows control of a larger position with less capital",
        "Guarantees profit",
        "Stops the market moving"
      ],
      answer: 1
    },
    {
      question: "What is the spread?",
      options: [
        "The difference between bid and ask",
        "Your account balance",
        "Your trading profit",
        "The number of trades"
      ],
      answer: 0
    },
    {
      question: "Why is risk management important?",
      options: [
        "It guarantees winning trades",
        "It prevents markets from moving",
        "It helps protect your trading capital",
        "It guarantees profit"
      ],
      answer: 2
    }
  ];

  /* =======================================================
     STATE
     ======================================================= */

  const defaultState = {
    completedLessons: [],
    xp: 0,
    balance: 10000,
    trades: 0,
    bestQuiz: 0,
    journal: [],
    position: null,
    tradeHistory: []
  };

  let state = loadState();

  let selectedLesson = 0;
  let quizIndex = 0;
  let quizScore = 0;

  let demoPrice = 1.08500;
  let previousPrice = demoPrice;

  /* =======================================================
     STORAGE
     ======================================================= */

  function loadState() {
    try {
      const saved = localStorage.getItem("forexStartV2");

      if (saved) {
        return {
          ...defaultState,
          ...JSON.parse(saved)
        };
      }

      /* Migrate useful progress from V1 if it exists */
      const oldSaved = localStorage.getItem("forexStartV1");

      if (oldSaved) {
        const old = JSON.parse(oldSaved);

        const migrated = {
          ...defaultState,
          completedLessons: Array.isArray(old.completedLessons)
            ? old.completedLessons
            : [],
          xp: Number(old.xp) || 0,
          balance: Number(old.balance) || 10000,
          trades: Number(old.trades) || 0,
          bestQuiz: Number(old.bestQuiz) || 0,
          journal: Array.isArray(old.journal)
            ? old.journal
            : [],
          position: old.position || null,
          tradeHistory: []
        };

        localStorage.setItem(
          "forexStartV2",
          JSON.stringify(migrated)
        );

        return migrated;
      }

    } catch (error) {
      console.error("ForexStart storage error:", error);
    }

    return { ...defaultState };
  }

  function saveState() {
    try {
      localStorage.setItem(
        "forexStartV2",
        JSON.stringify(state)
      );
    } catch (error) {
      console.error("Could not save ForexStart state:", error);
    }
  }

  /* =======================================================
     HELPERS
     ======================================================= */

  function $(id) {
    return document.getElementById(id);
  }

  function money(value) {
    return Number(value || 0).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function number(value, decimals = 2) {
    return Number(value || 0).toFixed(decimals);
  }

  function showElement(id, show = true) {
    const element = $(id);
    if (!element) return;

    element.style.display = show ? "" : "none";
  }

  function setText(id, text) {
    const element = $(id);
    if (element) {
      element.textContent = text;
    }
  }

  function getLevel() {
    return Math.floor(state.xp / 100) + 1;
  }

  function getLessonProgress() {
    return Math.round(
      (state.completedLessons.length / lessons.length) * 100
    );
  }

  function addXP(amount) {
    state.xp += amount;
    saveState();
    updateAllStats();
  }

  /* =======================================================
     NAVIGATION
     ======================================================= */

  function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("active");
    });

    const target = $(screenId);

    if (target) {
      target.classList.add("active");
    }

    document.querySelectorAll("[data-screen]").forEach(button => {
      button.classList.remove("active");
    });

    document
      .querySelectorAll(`[data-screen="${screenId}"]`)
      .forEach(button => {
        button.classList.add("active");
      });

    const mobileMenu = $("mobileMenu");

    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (screenId === "home") {
      updateAllStats();
    }

    if (screenId === "learn") {
      renderLessons();
    }

    if (screenId === "journal") {
      renderJournal();
    }

    if (screenId === "trade") {
      updateTradingUI();
    }

    if (screenId === "profile") {
      updateProfile();
    }
  }

  document.querySelectorAll("[data-screen]").forEach(button => {
    button.addEventListener("click", () => {
      const screen = button.getAttribute("data-screen");

      if (screen) {
        showScreen(screen);
      }
    });
  });

  /* Bottom navigation */
  document.querySelectorAll(".bottom-nav [data-screen]").forEach(button => {
    button.addEventListener("click", () => {
      showScreen(button.dataset.screen);
    });
  });

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuBtn = $("menuBtn");
  const closeMenu = $("closeMenu");
  const mobileMenu = $("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  }

  /* =======================================================
     LESSONS
     ======================================================= */

  function renderLessons() {
    const container = $("lessonList");

    if (!container) return;

    container.innerHTML = "";

    lessons.forEach((lesson, index) => {
      const completed =
        state.completedLessons.includes(index);

      const card = document.createElement("button");

      card.type = "button";
      card.className = "lesson-card";

      card.innerHTML = `
        <div class="lesson-number">
          ${completed ? "✓" : index + 1}
        </div>

        <div class="lesson-info">
          <h3>${lesson.title}</h3>
          <p>${lesson.description}</p>
        </div>

        <div class="lesson-arrow">›</div>
      `;

      card.addEventListener("click", () => {
        openLesson(index);
      });

      container.appendChild(card);
    });
  }

  function openLesson(index) {
    selectedLesson = index;

    const lesson = lessons[index];

    if (!lesson) return;

    const content = $("lessonContent");

    if (content) {
      content.innerHTML = `
        <div class="lesson-detail-inner">
          ${lesson.content}

          <button
            id="completeLessonBtn"
            class="primary-btn">
            ${
              state.completedLessons.includes(index)
                ? "Lesson Completed ✓"
                : "Mark Lesson Complete"
            }
          </button>
        </div>
      `;

      const completeButton = $("completeLessonBtn");

      if (completeButton) {
        completeButton.addEventListener("click", () => {
          completeLesson(index);
        });
      }
    }

    showScreen("lesson");
  }

  function completeLesson(index) {
    if (!state.completedLessons.includes(index)) {
      state.completedLessons.push(index);
      state.xp += 20;

      saveState();

      updateAllStats();
      renderLessons();

      alert("Lesson completed! +20 XP");

      openLesson(index);
    } else {
      alert("You already completed this lesson.");
    }
  }

  /* =======================================================
     HOME STATS
     ======================================================= */

  function updateAllStats() {
    const completed = state.completedLessons.length;
    const progress = getLessonProgress();
    const level = getLevel();

    setText("homeXp", state.xp);
    setText("homeLevel", level);

    setText(
      "homeProgressText",
      `${completed} of ${lessons.length} lessons completed`
    );

    setText("homeProgressPercent", `${progress}%`);

    const homeProgressBar = $("homeProgressBar");

    if (homeProgressBar) {
      homeProgressBar.style.width = `${progress}%`;
    }

    setText("learnCompleted", completed);
    setText("learnXp", state.xp);

    updateProfile();
  }

  /* =======================================================
     PROFILE
     ======================================================= */

  function updateProfile() {
    const completed = state.completedLessons.length;
    const progress = getLessonProgress();

    setText("profileXp", state.xp);
    setText("profileLessons", completed);
    setText("profileQuiz", state.bestQuiz);
    setText("profileTrades", state.trades);
    setText("profilePercent", `${progress}%`);

    const profileBar = $("profileProgressBar");

    if (profileBar) {
      profileBar.style.width = `${progress}%`;
    }

    setText("levelTitle", `Level ${getLevel()}`);

    setText(
      "levelDescription",
      getLevelDescription()
    );
  }

  function getLevelDescription() {
    const level = getLevel();

    if (level >= 10) {
      return "ForexStart Master";
    }

    if (level >= 7) {
      return "Advanced Learner";
    }

    if (level >= 4) {
      return "Developing Trader";
    }

    if (level >= 2) {
      return "Forex Learner";
    }

    return "Forex Beginner";
  }

  /* =======================================================
     QUIZ
     ======================================================= */

  function startQuiz() {
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
    showScreen("quiz");
  }

  function renderQuizQuestion() {
    const container = $("quizContent");

    if (!container) return;

    if (quizIndex >= questions.length) {
      finishQuiz();
      return;
    }

    const question = questions[quizIndex];

    container.innerHTML = `
      <div class="quiz-question">
        <div class="small-label">
          QUESTION ${quizIndex + 1} OF ${questions.length}
        </div>

        <h2>${question.question}</h2>

        <div class="quiz-options">
          ${question.options
            .map(
              (option, index) => `
                <button
                  class="quiz-option"
                  data-answer="${index}">
                  ${option}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    container
      .querySelectorAll(".quiz-option")
      .forEach(button => {
        button.addEventListener("click", () => {
          answerQuestion(
            Number(button.dataset.answer)
          );
        });
      });
  }

  function answerQuestion(answer) {
    const question = questions[quizIndex];

    if (answer === question.answer) {
      quizScore++;
    }

    quizIndex++;

    renderQuizQuestion();
  }

  function finishQuiz() {
    const container = $("quizContent");

    const percentage = Math.round(
      (quizScore / questions.length) * 100
    );

    if (percentage > state.bestQuiz) {
      state.bestQuiz = percentage;
    }

    const earnedXP = quizScore * 10;

    state.xp += earnedXP;

    saveState();
    updateAllStats();

    if (container) {
      container.innerHTML = `
        <div class="quiz-result">
          <div class="small-label">QUIZ COMPLETE</div>

          <h2>${percentage}%</h2>

          <p>
            You scored
            <strong>${quizScore}</strong>
            out of
            <strong>${questions.length}</strong>.
          </p>

          <p>XP earned: <strong>+${earnedXP}</strong></p>

          <button
            id="retryQuiz"
            class="primary-btn">
            Try Again
          </button>
        </div>
      `;

      const retry = $("retryQuiz");

      if (retry) {
        retry.addEventListener("click", startQuiz);
      }
    }
  }

  /* Existing quiz/menu buttons */
  document.querySelectorAll('[data-screen="quiz"]').forEach(button => {
    button.addEventListener("click", () => {
      startQuiz();
    });
  });

  /* =======================================================
     DEMO TRADING
     ======================================================= */

  function updateTradingUI() {
    setText(
      "demoBalance",
      `$${money(state.balance)}`
    );

    setText(
      "tradeCount",
      state.trades
    );

    setText(
      "demoPrice",
      demoPrice.toFixed(5)
    );

    const movement = demoPrice - previousPrice;

    const movementText =
      movement >= 0
        ? `+${movement.toFixed(5)}`
        : movement.toFixed(5);

    setText(
      "priceMovement",
      movementText
    );

    renderPosition();
  }

  function openPosition(type) {
    if (state.position) {
      alert("You already have an open position. Close it first.");
      return;
    }

    state.position = {
      type,
      entry: demoPrice,
      size: 1,
      openedAt: new Date().toISOString()
    };

    saveState();
    updateTradingUI();

    alert(
      `${type.toUpperCase()} opened at ${demoPrice.toFixed(5)}`
    );
  }

  function closePosition() {
    if (!state.position) {
      alert("You do not have an open position.");
      return;
    }

    const position = state.position;

    const pipDifference =
      position.type === "buy"
        ? (demoPrice - position.entry) * 10000
        : (position.entry - demoPrice) * 10000;

    const profitLoss = pipDifference * position.size;

    state.balance += profitLoss;
    state.trades++;

    const trade = {
      type: position.type,
      entry: position.entry,
      exit: demoPrice,
      pips: pipDifference,
      profitLoss,
      date: new Date().toISOString()
    };

    state.tradeHistory.unshift(trade);
    state.position = null;

    saveState();
    updateTradingUI();

    const result =
      profitLoss >= 
