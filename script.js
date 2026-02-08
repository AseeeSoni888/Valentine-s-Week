const days = document.querySelectorAll(".day");
const content = document.getElementById("content");

const roseContainer = document.getElementById("rose-container");
const rose = document.getElementById("rose");
const roseText = document.getElementById("rose-text");
const secret = document.getElementById("secret");

const proposal = document.getElementById("proposal");
const heart = document.getElementById("fullscreen-heart");

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Prevent auto hijack
heart.classList.add("hidden");

// Timeline click (ALL days clickable)
days.forEach(day => {
  day.addEventListener("click", () => loadDay(+day.dataset.day));
  day.addEventListener("touchstart", () => loadDay(+day.dataset.day), { passive: true });
});

function loadDay(day) {
  // Reset
  roseContainer.classList.add("hidden");
  proposal.classList.add("hidden");
  heart.classList.add("hidden");
  content.innerText = "";

  days.forEach(d => d.classList.remove("active"));
  document.querySelector(`[data-day="${day}"]`).classList.add("active");

  if (day === 1) {
    content.innerText = "Tap the rose 🌹";
    roseContainer.classList.remove("hidden");
  }

  if (day === 2) {
    content.innerText = "I have something important to ask you 💌";
    proposal.classList.remove("hidden");
  }
}

// Rose animation
rose.addEventListener("click", () => {
  rose.classList.add("bloom");
  roseText.classList.remove("hidden");
  secret.classList.remove("hidden");
});

// Proposal buttons
document.getElementById("yes-btn").onclick =
document.getElementById("always-btn").onclick = () => {
  heart.classList.remove("hidden");
  launchConfetti();
};

// Confetti
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerText = "🎉";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// Music (user gesture)
musicBtn.onclick = () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
};
