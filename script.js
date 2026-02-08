const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0,0,0,0);

const dayNumber = Math.min(
  Math.max(Math.floor((today - startDate)/(1000*60*60*24))+1,1),
  7
);

const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const heart = document.getElementById("fullscreen-heart");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

heart.classList.add("hidden");

confettiCanvas.width = innerWidth;
confettiCanvas.height = innerHeight;

days.forEach(day => {
  const d = +day.dataset.day;
  if (d <= dayNumber) {
    day.classList.add("unlocked");
    day.addEventListener("click", () => loadDay(d));
    day.addEventListener("touchstart", () => loadDay(d));
  }
  if (d === dayNumber) day.classList.add("active");
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

/* Music */
musicBtn.addEventListener("click", () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
});

/* Proposal buttons (mobile + desktop) */
document.querySelectorAll("[data-action='accept']").forEach(btn => {
  btn.addEventListener("click", acceptLove);
  btn.addEventListener("touchstart", acceptLove);
});

function acceptLove() {
  heart.classList.remove("hidden");
  startConfetti();

  setTimeout(() => {
    heart.classList.add("hidden");
    stopConfetti();
  }, 3000);
}

/* 🎉 Confetti */
let particles = [];
let confettiActive = false;

function startConfetti() {
  confettiActive = true;
  particles = Array.from({length: 120}, () => ({
    x: Math.random()*innerWidth,
    y: Math.random()*innerHeight - innerHeight,
    r: Math.random()*6 + 4,
    d: Math.random()*innerHeight,
    color: `hsl(${Math.random()*360},100%,70%)`,
    tilt: Math.random()*10
  }));
  requestAnimationFrame(drawConfetti);
}

function stopConfetti() {
  confettiActive = false;
  ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
}

function drawConfetti() {
  if (!confettiActive) return;
  ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
    p.y += 4;
    if (p.y > innerHeight) p.y = -10;
  });

  requestAnimationFrame(drawConfetti);
}

/* Initial load */
loadDay(dayNumber);
