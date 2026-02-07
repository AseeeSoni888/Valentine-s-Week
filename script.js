document.addEventListener("DOMContentLoaded", () => {

  const messages = {
    1: "Tap the rose 🌹",
    2: "I don’t know where life takes us, but I know who I want beside me 💌",
    3: "Life tastes sweeter with you 🍫",
    4: "Whenever life feels heavy, I hope you feel held 🧸",
    5: "I promise effort, respect, and choosing you — every day 🤝",
    6: "Some feelings don’t need words 😘",
    7: "Every day with you feels like Valentine’s Day ❤️"
  };

  const content = document.getElementById("content");
  const days = document.querySelectorAll(".day");
  const roseContainer = document.getElementById("rose-container");
  const rose = document.querySelector(".rose-svg");
  const roseText = document.getElementById("rose-text");
  const secret = document.getElementById("secret");
  const music = document.getElementById("bg-music");

  // Enable clicking for ALL days (for now)
  days.forEach((day) => {
    day.style.cursor = "pointer";

    day.addEventListener("click", () => {
      const d = parseInt(day.dataset.day);

      // Highlight
      days.forEach(el => el.classList.remove("active"));
      day.classList.add("active");

      // Content
      content.textContent = messages[d];

      // Rose only on Day 1
      if (d === 1) {
        roseContainer.classList.remove("hidden");
      } else {
        roseContainer.classList.add("hidden");
      }
    });
  });

  // Default load
  content.textContent = messages[1];
  roseContainer.classList.remove("hidden");

  // Rose click
  if (rose) {
    rose.addEventListener("click", () => {
      rose.classList.add("bloom");

      if (music) {
        music.volume = 0.4;
        music.play().catch(() => {});
      }

      startPetals();

      setTimeout(() => {
        roseText.textContent =
          "I don’t need a garden of roses. I just need one — and that’s you.";
        roseText.classList.add("show");

        setTimeout(() => {
          secret.classList.add("show");
        }, 600);
      }, 900);
    });
  }

  function startPetals() {
    const petalsContainer = document.getElementById("petals");

    for (let i = 0; i < 15; i++) {
      const petal = document.createElement("div");
      petal.className = "petal-float";
      petal.textContent = "🌸";

      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 5 + Math.random() * 5 + "s";
      petal.style.fontSize = 14 + Math.random() * 12 + "px";

      petalsContainer.appendChild(petal);
      setTimeout(() => petal.remove(), 10000);
    }
  }

});
