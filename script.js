// 🌹 Start date (Rose Day)
const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0, 0, 0, 0);

// Calculate unlocked day (1–7)
const unlockedDay = Math.min(
  Math.max(Math.floor((today - startDate) / 86400000) + 1, 1),
  7
);

// Elements
const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const roseContainer = document.getElementById("rose-container");
const rose = document.querySelector(".rose-svg");
const roseText = document.getElementById("rose-text");
const secret = document.getElementById("secret");
const heart = document.getElementById("heart");
const hug = document.getElementById("hug");

// Reset all sections
function resetView() {
  content.innerHTML = "";
  roseContainer.classList.add("hidden");
  heart?.classList.add("hidden");
  hug?.classList.add("hidden");
}

// Enable & mark unlocked days
days.forEach(day => {
  const dayNum = parseInt(day.dataset.day);

  if (dayNum <= unlockedDay) {
    day.classList.add("active");
    day.style.cursor = "pointer";

    day.addEventListener("click", () => {
      resetView();
      showDay(dayNum);
    });
  }
});

// Show day content
function showDay(dayNum) {
  if (dayNum === 1) {
    roseContainer.classList.remove("hidden");
    content.textContent = "A rose for the one who makes my world softer 🌹";

    rose.onclick = () => {
      rose.classList.add("bloom");
      roseText.classList.add("show");
      secret.classList.add("show");
    };
  }

  if (dayNum === 2) {
    heart.classList.remove("hidden");
    content.innerHTML = `
      I don’t know where life takes us,<br>
      but I know who I want beside me 💌<br><br>
      <button id="hug-btn">🤗 Hug me</button>
    `;

    document.getElementById("hug-btn").onclick = () => {
      hug.classList.remove("hidden");
    };
  }
}

// Auto-open today’s day
showDay(unlockedDay);

// 🎵 Music
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");
let playing = false;

musicBtn.onclick = () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  playing = !playing;
};
