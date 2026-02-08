// ===============================
// DATE SETUP
// ===============================
const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0, 0, 0, 0);

const dayNumber = Math.min(
  Math.max(Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1, 1),
  7
);

// ===============================
// ELEMENTS
// ===============================
const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const heart = document.getElementById("fullscreen-heart");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// ===============================
// SAFETY: HIDE EVERYTHING ON LOAD
// ===============================
rose.classList.add("hidden");
proposal.classList.add("hidden");
heart.classList.add("hidden");

// ===============================
// UNLOCK ALL DAYS (BUILD MODE)
// ===============================
days.forEach(day => {
  const d = Number(day.dataset.day);

  day.classList.add("unlocked");
  day.onclick = () => loadDay(d);

  if (d === dayNumber) {
    day.classList.add("active");
  }
});

// ===============================
// LOAD DAY CONTENT
// ===============================
function loadDay(d) {
  // Reset UI
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  heart.classList.add("hidden");
  content.innerText = "";

  // Reset active state
  days.forEach(day => day.classList.remove("active"));
  document.querySelector(`.day[data-day="${d}"]`).classList.add("active");

  // DAY 1 – ROSE
  if (d === 1) {
    content.innerText = "Tap the rose 🌹";
    rose.classList.remove("hidden");
  }

  // DAY 2 – PROPOSE
  if (d === 2) {
    content.innerText = "I have something important to ask you 💌";
    proposal.classList.remove("hidden");
  }

  // DAY 7 – VALENTINE
  if (d === 7) {
    content.innerText = "This day belongs to us ❤️";
  }
}

// ===============================
// PROPOSE DAY ACTION
// ===============================
function acceptLove() {
  heart.classList.remove("hidden");
  launchConfetti();
}

// ===============================
// CONFETTI (PURE JS – NO LIBRARY)
// ===============================
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "💖";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = Math.random() * 20 + 15 + "px";
    confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear`;
    confetti.style.zIndex = "1000";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// ===============================
// MUSIC (USER INITIATED)
// ===============================
musicBtn.onclick = () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
};

// ===============================
// INITIAL LOAD
// ===============================
loadDay(dayNumber);
