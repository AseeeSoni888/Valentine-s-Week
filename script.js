const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let particles = [];

function launchCelebration() {
  particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 6 + 4,
      dx: (Math.random() - 0.5) * 12,
      dy: (Math.random() - 0.8) * 12,
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
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();

/* Navigation logic */
const home = document.getElementById("home");
const propose = document.getElementById("propose");
const choices = document.getElementById("choices");

document.getElementById("enterBtn").addEventListener("click", () => {
  home.classList.add("hidden");
  propose.classList.remove("hidden");
});

document.getElementById("proposeBtn").addEventListener("click", () => {
  choices.classList.remove("hidden");
});

document.getElementById("yesBtn").addEventListener("click", launchCelebration);
document.getElementById("alwaysBtn").addEventListener("click", launchCelebration);
