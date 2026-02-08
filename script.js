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

// 🚫 Ensure heart is hidden on load
heart.classList.add("hidden");

// Unlock + click logic
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
  // Reset all sections
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

  if (d === 7) {
    content.innerText = "This day belongs to us ❤️";
    // ⚠️ DO NOT auto-open heart
  }
}

// 💌 Propose Day button click
function acceptLove() {
  heart.classList.remove("hidden");
}

// 🎵 Music (user-initiated, browser-safe)
musicBtn.onclick = () => {
  music.volume = 0.4;
  music.play();
  musicBtn.innerText = "🎶 Playing";
};

// Initial load (SAFE)
loadDay(dayNumber);
