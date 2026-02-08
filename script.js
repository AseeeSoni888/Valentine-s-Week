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

// Auto play music
music.volume = 0.4;
music.play().catch(()=>{}); // browser restrictions may block

// Resize confetti canvas
function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Confetti particle generator
function startConfetti() {
  confettiParticles = [];
  for(let i=0;i<150;i++){
    confettiParticles.push({
      x: Math.random()*confettiCanvas.width,
      y: Math.random()*confettiCanvas.height - confettiCanvas.height,
      r: Math.random()*6+4,
      d: Math.random()*0.05 + 1,
      color:`hsl(${Math.random()*360},70%,60%)`,
      tilt: Math.random()*10-10
    });
  }
  animateConfetti();
}

function animateConfetti(){
  ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  confettiParticles.forEach(p=>{
    p.y += p.d * 5;
    p.x += Math.sin(p.d)*2;
    if(p.y > confettiCanvas.height) p.y = -10;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  requestAnimationFrame(animateConfetti);
}

// Timeline click
days.forEach(day=>{
  day.classList.add("unlocked"); // All days clickable
  day.addEventListener('click',()=>{
    loadDay(+day.dataset.day);
  });
});

// Load specific day
function loadDay(d){
  // Reset all sections
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  hug.classList.remove("show");
  envelope.classList.add("hidden");
  content.innerText = "";

  if(d===1){
    content.innerText="Tap the rose 🌹";
    rose.classList.remove("hidden");
  }
  if(d===2){
    content.innerText="I have something to ask you 💌";
    proposal.classList.remove("hidden");
  }
  if(d===3) content.innerText="Life tastes sweeter with you 🍫";
  if(d===4) content.innerText="Whenever life feels heavy, I hope you feel held 🧸";
  if(d===5) content.innerText="I promise effort, respect, and choosing you — every day 🤝";
  if(d===6) content.innerText="Some feelings don’t need words 😘";
  if(d===7) content.innerText="Every day with you feels like Valentine’s Day ❤️";
}

// YES / ALWAYS click
function handleLove(){
  hug.classList.add("show");
  envelope.classList.remove("hidden");
  startConfetti();
  setTimeout(()=>{
    hug.classList.remove("show");
    envelope.classList.add("hidden");
    confettiParticles=[];
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  },4000);
}

yesBtn.addEventListener('click',handleLove);
alwaysBtn.addEventListener('click',handleLove);

// ⚠️ Remove automatic loading of current day
content.innerText = "Click a day above to start the journey!";
