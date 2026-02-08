const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const roseContainer = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const rose = document.getElementById("rose");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Make all days clickable
days.forEach(day => {
  const d = +day.dataset.day;

  day.addEventListener("click", () => loadDay(d));
  day.addEventListener("touchstart", () => loadDay(d), { passive: true });
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

// Rose bloom
rose.addEventListener("click", () => {
  rose.classList.add("bloom");
});

// 🎉 CONFETTI FUNCTION
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      ["#ff4d79", "#ffd6e0", "#fff", "#ff99ac"][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// ❤️ HEART OVERLAY
function showLove() {
  const overlay = document.createElement("div");
  overlay.id = "love-overlay";
  overlay.innerHTML = `❤️<p>You chose us ❤️</p>`;
  document.body.appendChild(overlay);

  launchConfetti();

  setTimeout(() => overlay.remove(), 3500);
}

// Proposal buttons
document.getElementById("yes-btn").onclick = showLove;
document.getElementById("always-btn").onclick = showLove;

// Music (user gesture safe)
musicBtn.onclick = () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
};

// Load Rose Day initially
loadDay(1);
