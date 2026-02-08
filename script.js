const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);

/* Confetti + Hearts */
function launchCelebration() {
  particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: Math.random() * 8 + 4,
      speedX: (Math.random() - 0.5) * 10,
      speedY: (Math.random() - 0.8) * 10,
      life: 100,
      color: `hsl(${Math.random() * 360},100%,70%)`
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();

/* UI Logic */
document.getElementById("proposeBtn").addEventListener("click", () => {
  document.getElementById("choices").classList.remove("hidden");
});

document.getElementById("yesBtn").addEventListener("click", () => {
  launchCelebration();
});

document.getElementById("alwaysBtn").addEventListener("click", () => {
  launchCelebration();
});
