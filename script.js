const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0,0,0,0);

const dayNumber = Math.min(
  Math.max(Math.floor((today - startDate)/(1000*60*60*24))+1,1),
  7
);

const days = document.querySelectorAll(".day");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const content = document.getElementById("content");

// Unlock days
days.forEach(day => {
  const d = +day.dataset.day;

  if (d <= dayNumber) {
    day.classList.add("unlocked");
    day.onclick = () => loadDay(d);
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

// 💖 YES / ALWAYS
function acceptLove() {
  showHeart();
  launchConfetti();
}

function showHeart() {
  const overlay = document.createElement("div");
  overlay.id = "love-overlay";
  overlay.innerHTML = `<span>❤️</span><p>You chose us</p>`;
  document.body.appendChild(overlay);

  setTimeout(() => overlay.remove(), 3000);
}

function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random()*360},100%,70%)`;
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// Initial load
loadDay(dayNumber);
