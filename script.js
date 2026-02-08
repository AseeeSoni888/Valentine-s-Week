// Dates & Days
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
const propose = document.getElementById("propose");
const heart = document.getElementById("fullscreen-heart");
const heartMsg = document.getElementById("heart-msg");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const confettiCanvas = document.getElementById("confetti-canvas");

// Timeline Clicks
days.forEach(day => {
  const d = +day.dataset.day;
  if(d <= dayNumber){
    day.classList.add("unlocked");
    day.onclick = () => loadDay(d);
  }
  if(d === dayNumber) day.classList.add("active");
});

// Load Day
function loadDay(d){
  rose.classList.add("hidden");
  propose.classList.add("hidden");
  content.innerText = "";

  if(d === 1){
    content.innerText = "Tap the rose 🌹";
    rose.classList.remove("hidden");
  }

  if(d === 2){
    content.innerText = "I have something to ask you 💌";
    propose.classList.remove("hidden");
  }

  if(d === 7){
    content.innerText = "This day belongs to us ❤️";
  }
}

// Propose Day Buttons
document.querySelectorAll("#propose .choice-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    heartMsg.innerText = `You chose "${btn.dataset.answer}" 💖`;
    heart.classList.remove("hidden");
    startConfetti();
  });
});

// Music
musicBtn.onclick = ()=>{
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
};

// Confetti
function startConfetti(){
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confetti = [];
  const colors = ["#ff4d79","#ffb3c6","#fff"];

  for(let i=0;i<150;i++){
    confetti.push({
      x: Math.random()*confettiCanvas.width,
      y: Math.random()*confettiCanvas.height - confettiCanvas.height,
      r: Math.random()*6 + 4,
      d: Math.random()*150,
      color: colors[Math.floor(Math.random()*colors.length)],
      tilt: Math.random()*10 - 10,
      tiltAngleIncrement: Math.random()*0.07 + 0.05
    });
  }

  function draw(){
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    confetti.forEach((c,i)=>{
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r/2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r/2);
      ctx.stroke();

      c.tiltAngle += c.tiltAngleIncrement;
      c.y += (Math.cos(c.d) + 3 + c.r/2)/2;
      c.tilt = Math.sin(c.tiltAngle) * 12;

      if(c.y > confettiCanvas.height){
        c.y = -10;
        c.x = Math.random()*confettiCanvas.width;
      }
    });
    requestAnimationFrame(draw);
  }

  draw();
}

// Initial load
loadDay(dayNumber);
