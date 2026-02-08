const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const roseContainer = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const rose = document.getElementById("rose");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// 🔓 MAKE EVERY DAY CLICKABLE (NO DATE LOCKING)
days.forEach(day => {
  day.addEventListener("click", () => {
    loadDay(+day.dataset.day);
  });

  day.addEventListener("touchstart", () => {
    loadDay(+day.dataset.day);
  }, { passive: true });
});

function reset() {
  content.innerText = "";
  roseContainer.classList.add("hidden");
  proposal.classList.add("hidden");

  days.forEach(d => d.classList.remove("active"));
}

function loadDay(day) {
  reset();
  document.querySelector(`.day[data-day="${day}"]`).classList.add("active");

  if (day === 1) {
    content.innerText = "Tap the rose 🌹";
    roseContainer.classList.remove("hidden");
  }

  if (day === 2) {
    content.innerText = "I have something important to ask you 💌";
    proposal.classList.remove("hidden");
  }

  if (day === 7) {
    content.innerText = "This day belongs to us ❤️";
  }
}

// 🌹 Rose click
rose.addEventListener("click", () => {
  rose.classList.add("bloom");
});

// 💌 Proposal buttons
document.getElementById("yes-btn").onclick =
document.getElementById("always-btn").onclick = () => {
  alert("You chose us ❤️");
};

// 🎵 Music (user interaction safe)
musicBtn.onclick = () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
};

// Load Rose Day by default
loadDay(1);
