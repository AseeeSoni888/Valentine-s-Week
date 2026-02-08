const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0,0,0,0);

const dayNumber = Math.min(
  Math.max(Math.floor((today - startDate)/(1000*60*60*24))+1, 1),
  7
);

const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const roseText = document.getElementById("rose-text");
const proposal = document.getElementById("proposal");
const heart = document.getElementById("fullscreen-heart");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

heart.classList.add("hidden");

// Unlock days
days.forEach(day => {
  const d = Number(day.dataset.day);
  if (d <= dayNumber) {
    day.classList.add("unlocked");
    day.addEventListener("click", () => loadDay(d));
  }
  if (d === dayNumber) {
    day.classList.add("active");
  }
});

function loadDay(d) {
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  content.innerText = "";

  if (d === 1) {
    content.innerText = "Tap the rose 🌹";
    rose.classList.remove("hidden");
  }

  if (d === 2) {
    content.innerText = "I have something to ask you 💌";
    proposal.classList.remove("hidden");
  }
}

// Rose click
const roseEmoji = document.getElementById("rose");
if (roseEmoji) {
  roseEmoji.addEventListener("click", () => {
    roseText.classList.remove("hidden");
  });
}

// Propose buttons (explicit binding)
document.getElementById("yesBtn").addEventListener("click", showHeart);
document.getElementById("alwaysBtn").addEventListener("click", showHeart);

function showHeart() {
  heart.classList.remove("hidden");
}

// Music
musicBtn.addEventListener("click", () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
});

loadDay(dayNumber);
