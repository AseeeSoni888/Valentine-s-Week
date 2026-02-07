// 🌹 Set Rose Day date here
const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0, 0, 0, 0);

// Calculate current day safely (1–7)
const dayNumber = Math.min(
  Math.max(
    Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1,
    1
  ),
  7
);

// Messages for each day
const messages = {
  1: "",
  2: "I don’t know where life takes us, but I know who I want beside me 💌",
  3: "Life tastes sweeter with you 🍫",
  4: "Whenever life feels heavy, I hope you feel held 🧸",
  5: "I promise effort, respect, and choosing you — every day 🤝",
  6: "Some feelings don’t need words 😘",
  7: "Every day with you feels like Valentine’s Day ❤️"
};

// Elements
const content = document.getElementById("content");
const days = document.querySelectorAll(".day");
const roseContainer = document.getElementById("rose-container");
const rose = document.querySelector(".rose-svg");
const roseText = document.getElementById("rose-text");

// Highlight current day
days.forEach((day) => {
  if (parseInt(day.dataset.day) === dayNumber) {
    day.classList.add("active");
  }
});

// Show message
if (messages[dayNumber] && content) {
  content.textContent = messages[dayNumber];
}

// Rose interaction
if (rose) {
  rose.addEventListener("click", () => {
    rose.classList.add("bloom");

    if (roseText) {
      roseText.classList.add("show");
    }
  });
}
