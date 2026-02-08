// START DATE (Rose Day)
const startDate = new Date("2026-02-06");
const today = new Date();
today.setHours(0,0,0,0);

// Calculate day number (1–7)
const dayNumber = Math.min(
  Math.max(Math.floor((today - startDate) / 86400000) + 1, 1),
  7
);

// Elements
const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const heart = document.getElementById("heart");
const roseContainer = document.getElementById("rose-container");
const rose = document.querySelector(".rose-svg");
const roseText = document.getElementById("rose-text");
const secret = document.getElementById("secret");
const hug = document.getElementById("hug");

// Highlight active day
days.forEach(d => {
  if (parseInt(d.dataset.day) === dayNumber) {
    d.classList.add("active");
  }
});

// Day-wise behavior
if (dayNumber === 1) {
  roseContainer.classList.remove("hidden");
  content.textContent = "A rose for the one who makes my world softer 🌹";

  rose.addEventListener("click", () => {
    rose.classList.add("bloom");
    roseText.classList.add("show");
    secret.classList.add("show");
  });
}

if (dayNumber === 2) {
  heart.classList.remove("hidden");
  content.innerHTML = `
    I don’t know where life takes us,  
    but I know who I want beside me 💌  
    <br><br>
    <button id="hug-btn">🤗 Come Here</button>
  `;

  document.getElementById("hug-btn").onclick = () => {
    hug.classList.remove("hidden");
  };
}

// Music
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  playing = !playing;
});
