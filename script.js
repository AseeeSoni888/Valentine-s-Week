const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const hug = document.getElementById("hug");
const envelope = document.getElementById("envelope");
const yesBtn = document.getElementById("yes-btn");
const alwaysBtn = document.getElementById("always-btn");
const music = document.getElementById("bg-music");
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext('2d');
let confettiParticles = [];

// Auto play music (browser may require user interaction)
music.volume = 0.4;
music.play().catch(()=>{});

// Resize canvas
function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Timeline buttons: clickable and neutral start
days.forEach(day => {
  day.classList.add("unlocked");
  day.addEventListener('click', () => loadDay(+day.dataset.day));
});

// Load day content
function loadDay(d) {
  // Reset all sections
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  hug.classList.remove("show");
  envelope.classList.add("hidden");
  content.innerText = "";

  switch(d) {
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
    default:
      content.innerText = "";
  }
}

// Hug + envelope + confetti on choice
function showLove() {
  hug.classList.add("show");
  envelope.classList.remove("hidden");
  startConfetti();
  setTimeout(() => {
    hug.classList.remove("show");
    envelope.classList.add("hidden");
    confettiParticles = [];
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }, 4000);
}

yesBtn.addEventListener('click', showLove);
alwaysBtn.addEventListener('click', showLove);

// Confetti
function startConfetti() {
  confettiParticles = [];
  for (let i = 0; i < 150; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 0.05 + 1,
      color: `hsl(${Math.random()*360},70%,60%)`,
      tilt: Math.random() * 10 - 10
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach(p => {
    p.y += p.d * 5;
    p.x += Math.sin(p.d) * 2;
    if (p.y > confettiCanvas.height) p.y = -10;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  if (confettiParticles.length > 0) requestAnimationFrame(animateConfetti);
}
