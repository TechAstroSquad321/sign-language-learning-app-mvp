// ===========================
// SignLearn JavaScript
// ===========================

console.log("SignLearn Loaded Successfully!");

// Welcome Message
window.onload = function () {
    alert("👋 Welcome to SignLearn!\nLet's start learning sign language.");
};

// Highlight Active Navigation Link
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#FFD93D";
        link.style.fontWeight = "700";
    }
});

// Button Animation
const buttons = document.querySelectorAll(".btn, .card a");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 15px 35px rgba(108,76,241,0.3)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    });
});

// Fake Progress Example
let progress = 25;

function updateProgress() {
    console.log("Current Progress: " + progress + "%");
}

updateProgress();

// Start Learning Button
const startBtn = document.querySelector(".btn");

if (startBtn) {
    startBtn.addEventListener("click", function () {
        alert("Opening Learning Module...");
    });
}

// Simple Quiz Score Storage
let quizScore = localStorage.getItem("quizScore");

if (!quizScore) {
    localStorage.setItem("quizScore", 0);
}

// Increase Score Function
function increaseScore() {
    let score = Number(localStorage.getItem("quizScore"));
    score++;
    localStorage.setItem("quizScore", score);
}

// Read Score
function showScore() {
    console.log("Quiz Score:", localStorage.getItem("quizScore"));
}

showScore();

// Dark Mode (Optional)
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Console Message
console.log("SignLearn Ready 🚀");