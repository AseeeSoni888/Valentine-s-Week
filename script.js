const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const envelope = document.getElementById("envelope");
const yesBtn = document.getElementById("yes-btn");
const alwaysBtn = document.getElementById("always-btn");
const music = document.getElementById("bg-music");
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");

let confettiParticles = [];

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

music.volume = 0.4;
music.play().catch(()=>{});

days.forEach(day => {
  day.classList.add("unlocked");
  day.addEventListener("click", () => loadDay(day));
});

function resetAll() {
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  envelope.classList.add("hidden");
  content.innerText = "";
  days.forEach(d => d.classList.remove("active"));
}

function loadDay(dayEl) {
  resetAll();
  dayEl.classList.add("active");
  const d = +dayEl.dataset.day;

  switch (d) {
    case 1:
      content.innerText = "Tap the rose 🌹";
      rose.classList.remove("hidden");
      break;
    case 2:
      content.innerText = "I have something to ask you 💌";
      proposal.classList.remove("hidden");
      break;
    case 3:
      content.innerText = "Life tastes sweeter with you 🍫";
      break;
    case 4:
      content.innerText = "Whenever life feels heavy, I hope you feel held 🧸";
      break;
    case 5:
      content.innerText = "I promise effort, respect, and choosing you — every day 🤝";
      break;
    case 6:
      content.innerText = "Some feelings don’t need words 😘";
      break;
    case 7:
      content.innerText = "Every day with you feels like Valentine’s Day ❤️";
      break;
  }
}

function showEnvelope() {
  envelope.classList.remove("hidden");
  startConfetti();
  setTimeout(() => {
    envelope.classList.add("hidden");
    confettiParticles = [];
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  }, 4000);
}

yesBtn.addEventListener("click", showEnvelope);
alwaysBtn.addEventListener("click", showEnvelope);

/* Confetti */
function startConfetti() {
  confettiParticles = Array.from({length:150}, () => ({
    x: Math.random()*confettiCanvas.width,
    y: Math.random()*confettiCanvas.height - confettiCanvas.height,
    r: Math.random()*6+4,
    d: Math.random()*1+1,
    color: `hsl(${Math.random()*360},70%,60%)`
  }));
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  confettiParticles.forEach(p => {
    p.y += p.d*3;
    if (p.y > confettiCanvas.height) p.y = -10;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  if(confettiParticles.length) requestAnimationFrame(animateConfetti);
}
