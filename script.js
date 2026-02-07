// 🌹 Set Rose Day date here
const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0, 0, 0, 0);

// Calculate current day safely (1–7)
const dayNumber = Math.min(
  Math.max(
    Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1,
    1
  ),
  7
);

// Messages for each day
const messages = {
  1: "Tap the rose 🌹",
  2: "I don’t know where life takes us, but I know who I want beside me 💌",
  3: "Life tastes sweeter with you 🍫",
  4: "Whenever life feels heavy, I hope you feel held 🧸",
  5: "I promise effort, respect, and choosing you — every day 🤝",
  6: "Some feelings don’t need words 😘",
  7: "Every day with you feels like Valentine’s Day ❤️"
};

// Elements
const content = document.getElementById("content");
const days = document.querySelectorAll(".day");
const roseContainer = document.getElementById("rose-container");
const rose = document.querySelector(".rose-svg");
const roseText = document.getElementById("rose-text");
const secret = document.getElementById("secret");
const music = document.getElementById("bg-music");

// Unlock + click logic for timeline
days.forEach((day) => {
  const d = parseInt(day.dataset.day);

  if (d < dayNumber) {
    day.classList.add("unlocked");
    day.addEventListener("click", () => {
      content.textContent = messages[d];
      roseContainer.classList.add("hidden");
    });
  }

  if (d === dayNumber) {
    day.classList.add("active");
    content.textContent = messages[d];

    if (d === 1) {
      roseContainer.classList.remove("hidden");
    }
  }
});

// 🌹 Rose click animation
if (rose) {
  rose.addEventListener("click", () => {
    rose.classList.add("bloom");

    // Play music (user interaction required — browser rule)
    if (music) {
      music.volume = 0.4;
      music.play().catch(() => {});
    }

    // Floating petals
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

// 🌸 Floating petals
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
