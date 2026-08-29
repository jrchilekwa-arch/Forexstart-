/* =====================================================
   FOREXSTART - COMPLETE APP.JS
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    setupNavigation();
    setupTheme();
    renderLessons();
    renderQuiz();
    updateProgress();
    updateHomeProgress();
});


/* =====================================================
   NAVIGATION
   ===================================================== */

function setupNavigation() {
    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.classList.remove("active");
    });

    const home = document.querySelector('.screen[data-screen="home"]');

    if (home) {
        home.classList.add("active");
    }

    document.querySelectorAll("[data-nav]").forEach(function (button) {
        button.classList.remove("active");
    });

    const homeButton = document.querySelector('[data-nav="home"]');

    if (homeButton) {
        homeButton.classList.add("active");
    }
}


function showScreen(screenName) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    const target = document.querySelector(
        '.screen[data-screen="' + screenName + '"]'
    );

    if (target) {
        target.classList.add("active");
    }

    document.querySelectorAll("[data-nav]").forEach(function (button) {
        button.classList.remove("active");
    });

    const navButton = document.querySelector(
        '[data-nav="' + screenName + '"]'
    );

    if (navButton) {
        navButton.classList.add("active");
    }

    window.scrollTo(0, 0);

    if (screenName === "learn") {
        renderLessons();
    }

    if (screenName === "quiz") {
        renderQuiz();
    }

    if (screenName === "progress") {
        updateProgress();
    }
}


/* =====================================================
   THEME
   ===================================================== */

function setupTheme() {

    const themeButton = document.getElementById("themeBtn");

    if (!themeButton) {
        return;
    }

    const savedTheme = localStorage.getItem("forexTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeButton.textContent = "🌙";
    }

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("forexTheme", "light");
            themeButton.textContent = "🌙";
        } else {
            localStorage.setItem("forexTheme", "dark");
            themeButton.textContent = "☀️";
        }

    });
}


/* =====================================================
   LESSON DATA
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
                    Start by learning how currencies and currency pairs work
                    before thinking about real-money trading.
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
                Traders can use stop losses to help control potential
                losses.
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
   LESSON PROGRESS
   ===================================================== */

let completed = JSON.parse(
    localStorage.getItem("fxCompleted") || "[]"
);


function saveProgress() {

    localStorage.setItem(
        "fxCompleted",
        JSON.stringify(completed)
    );
}


/* =====================================================
   RENDER LESSON
