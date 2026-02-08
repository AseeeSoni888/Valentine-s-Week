const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");
const hugBtn = document.getElementById("hug-btn");
const hug = document.getElementById("hug");

let playing = false;

// Music toggle
musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  playing = !playing;
});

// Hug animation
hugBtn.addEventListener("click", () => {
  hug.classList.remove("hidden");
});
