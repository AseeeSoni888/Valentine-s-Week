// ===== Elements =====
const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const hug = document.getElementById("hug");
const heart = document.getElementById("fullscreen-heart");
const heartMsg = document.getElementById("heart-msg");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");
const yesBtn = document.getElementById("yes-btn");
const alwaysBtn = document.getElementById("always-btn");
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext('2d');

// ===== Auto-play music =====
music.volume = 0.4;
music.play().catch(()=>{}); // fallback in case browser blocks autoplay

// ===== Confetti =====
let confettiParticles = [];
function startConfetti() {
  confettiCanvas.classList.remove("hidden");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  confettiParticles = [];
  for(let i=0;i<150;i++){
    confettiParticles.push({
      x: Math.random()*window.innerWidth,
      y: Math.random()*window.innerHeight,
      r: Math.random()*6+2,
      d: Math.random()*30+10,
      color: `hsl(${Math.random()*360},70%,60%)`,
      tilt: Math.random()*10-10
    });
  }
  requestAnimationFrame(drawConfetti);
  setTimeout(()=>confettiCanvas.classList.add("hidden"),3000);
}

function drawConfetti(){
  ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach(p=>{
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(p.x + p.tilt, p.y);
    ctx.lineTo(p.x + p.tilt + 5, p.y + p.r);
    ctx.lineTo(p.x + p.tilt -5, p.y + p.r);
    ctx.closePath();
    ctx.fill();
    p.y += Math.sin(Math.PI/180)*2 +1;
    p.x += Math.sin(Math.PI/180)*1;
    if(p.y>window.innerHeight){p.y=-10; p.x=Math.random()*window.innerWidth;}
  });
  requestAnimationFrame(drawConfetti);
}

// ===== Day Handling =====
days.forEach(day=>{
  day.classList.add("unlocked");
  day.onclick = ()=>{
    const d = +day.dataset.day;
    loadDay(d);
  }
});

// ===== Load Day Function =====
function loadDay(d){
  // Hide all special elements
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  hug.classList.add("hidden");
  envelope.classList.add("hidden");
  heart.classList.add("hidden");
  heart.classList.remove("pulse-animation");
  content.innerText = "";

  if(d===1){
    content.innerText = "Tap the rose 🌹";
    rose.classList.remove("hidden");
    rose.onclick = ()=>{
      rose.classList.add("bloom");
      document.getElementById("rose-text").classList.add("show");
    }
  }
  if(d===2){
    content.innerText = "I have something to ask you 💌";
    proposal.classList.remove("hidden");
  }
  if(d===3) content.innerText = "Life tastes sweeter with you 🍫";
  if(d===4) content.innerText = "I love cuddles 🧸";
  if(d===5) content.innerText = "Promises are forever 🤝";
  if(d===6) content.innerText = "Some feelings don’t need words 😘";
  if(d===7) content.innerText = "Happy Valentine’s Day ❤️";
}

// ===== Propose Day Buttons =====
function handleLove(choice){
  heartMsg.innerText = "You're my forever 💖";
  heart.classList.remove("hidden");
  heart.classList.add("pulse-animation");
  hug.classList.remove("hidden");
  envelope.classList.remove("hidden");
  startConfetti();

  // Hide after 4 seconds
  setTimeout(()=>{
    heart.classList.add("hidden");
    heart.classList.remove("pulse-animation");
    hug.classList.add("hidden");
    envelope.classList.add("hidden");
  },4000);
}

yesBtn.onclick = ()=>handleLove("yes");
alwaysBtn.onclick = ()=>handleLove("always");

// ===== Initial Load =====
// Start at Day 1 always
loadDay(1);
