// IMPORTANT: Set Rose Day date here
const startDate = new Date("2026-02-07"); // Change year if needed

const today = new Date();
today.setHours(0,0,0,0);

const dayNumber = Math.min(
  Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1,
  7
);

const messages = {
  1: "I don’t need a garden of roses. I just need one — and that’s you 🌹",
  2: "I don’t know where life takes us, but I know who I want beside me 💌",
  3: "Life tastes sweeter with you 🍫",
  4: "Whenever life feels heavy, I hope you feel held 🧸",
  5: "I promise effort, respect, and choosing you — every day 🤝",
  6: "Some feelings don’t need words 😘",
  7: "Every day with you feels like Valentine’s Day ❤️"
};

const content = document.getElementById("content");
const days = document.querySelectorAll(".day");

days.forEach(day => {
  const d = parseInt(day.dataset.day);

  if (d < dayNumber) {
    day.classList.add("unlocked");
    day.onclick = () => content.innerText = messages[d];
  }

  if (d === dayNumber) {
    day.classList.add("active");
    day.onclick = () => content.innerText = messages[d];
    content.innerText = messages[d];
  }
});
