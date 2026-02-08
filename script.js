document.addEventListener("DOMContentLoaded", () => {

  const messages = {
    1: "Tap the rose 🌹",
    2: "I don’t know what the future holds… but I know I want you in it 💍",
    3: "Life tastes sweeter with you 🍫",
    4: "Whenever life feels heavy, I hope you feel held 🧸",
    5: "I promise effort, respect, and choosing you — every day 🤝",
    6: "Some feelings don’t need words 😘",
    7: "❤️"
  };

  const content = document.getElementById("content");
  const days = document.querySelectorAll(".day");
  const roseContainer = document.getElementById("rose-container");
  const rose = document.querySelector(".rose-svg");
  const roseText = document.getElementById("rose-text");
  const secret = document.getElementById("secret");
  const music = document.getElementById("bg-music");
  const proposalActions = document.getElementById("proposal-actions");
  const response = document.getElementById("proposal-response");
  const overlay = document.getElementById("valentine-overlay");

  loadDay(2); // Today = Propose Day

  days.forEach(day => {
    day.addEventListener("click", () => {
      loadDay(parseInt(day.dataset.day));
    });
  });

  function loadDay(d) {
    days.forEach(x => x.classList.remove("active"));
    document.querySelector(`.day[data-day="${d}"]`).classList.add("active");

    content.innerHTML = messages[d];

    roseContainer.classList.toggle("hidden", d !== 1);
    proposalActions.classList.toggle("hidden", d !== 2);
    overlay.classList.toggle("hidden", d !== 7);
  }

  rose?.addEventListener("click", () => {
    rose.classList.add("bloom");
    music.volume = 0.4;
    music.play().catch(()=>{});

    roseText.textContent =
      "I don’t need a garden of roses. I just need one — and that’s you.";
    roseText.classList.add("show");
    secret.classList.remove("hidden");
    secret.classList.add("show");

    startPetals();
  });

  document.getElementById("yes-btn").onclick = () => respond("She said YES ❤️");
  document.getElementById("always-btn").onclick = () => respond("Always. Forever. 💍");

  function respond(text) {
    response.textContent = text;
    response.classList.remove("hidden");
    response.classList.add("heart-pulse");
  }

  function startPetals() {
    const c = document.getElementById("petals");
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      p.className = "petal-float";
      p.textContent = "🌸";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 5 + Math.random() * 5 + "s";
      c.appendChild(p);
      setTimeout(() => p.remove(), 10000);
    }
  }

});
