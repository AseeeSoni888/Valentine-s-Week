const days = document.querySelectorAll(".day");
const content = document.getElementById("content");
const rose = document.getElementById("rose-container");
const proposal = document.getElementById("proposal");
const envelope = document.getElementById("envelope");
const hug = document.getElementById("hug");
const heart = document.getElementById("fullscreen-heart");
const yesBtn = document.getElementById("yes-btn");
const alwaysBtn = document.getElementById("always-btn");
const music = document.getElementById("bg-music");

// Day logic
days.forEach(day => {
  day.onclick = () => loadDay(+day.dataset.day);
  if(+day.dataset.day <= 2) day.classList.add("unlocked");
});

function loadDay(d) {
  rose.classList.add("hidden");
  proposal.classList.add("hidden");
  envelope.classList.add("hidden");
  hug.classList.add("hidden");
  heart.classList.add("hidden");
  content.innerText = "";

  if(d===1) { content.innerText="Tap the rose 🌹"; rose.classList.remove("hidden"); }
  if(d===2) { content.innerText="I have something to ask you 💌"; proposal.classList.remove("hidden"); }
}

// Button click for YES / ALWAYS
function handleLove() {
  envelope.classList.remove("hidden");
  hug.classList.remove("hidden");
  heart.classList.remove("hidden");
  startConfetti();
  setTimeout(()=>{ envelope.classList.add("hidden"); hug.classList.add("hidden"); heart.classList.add("hidden"); }, 4000);
}

yesBtn.onclick = handleLove;
alwaysBtn.onclick = handleLove;

// Confetti
function startConfetti() {
  for(let i=0;i<100;i++){
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random()*100+"vw";
    confetti.style.background = `hsl(${Math.random()*360},100%,70%)`;
    document.body.appendChild(confetti);
    setTimeout(()=> confetti.remove(), 3000);
  }
}

// Auto play music
music.volume = 0.4;
music.play().catch(()=>console.log("Autoplay blocked"));
