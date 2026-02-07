// 🌹 Set Rose Day date here
const startDate = new Date("2026-02-07");
const today = new Date();
today.setHours(0,0,0,0);

const dayNumber = Math.min(
  Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1,
  7
);

const messages = {
  1: "",
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
const roseText = document.getElementById("rose-text");

// Unlock logic
days.forEach(day => {
  const d = parseInt(day.dataset.day);

  if (d < dayNumber) {
    day.classList.add("unlocked");
    day.onclick = () => content.innerText = messages[d];
  }

  if (d === dayNumber) {
    day.classList.add("active");

    if (d === 1) {
      roseContainer.classList.remove("hidden");
      content.innerText = "Tap the rose 🌹";
    } else {
      content.innerText = messages[d];
    }
  }
});

// 🌹 Bloom Rose
function bloomRose() {
  const music = document.getElementById("bg-music");
  music.volume = 0.4;
  music.play();

  const rose = document.querySelector(".rose-svg");
  rose.classList.add("bloom");

  startPetals();

  setTimeout(() => {
    roseText.innerText =
      "I don’t need a garden of roses. I just need one — and that’s you.";
    roseText.classList.add("show");
    showSecret();
  }, 900);
}

// 🌸 Floating Petals
function startPetals() {
  const petalsContainer = document.getElementById("petals");

  for (let i = 0; i < 15; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal-float");
    petal.innerText = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.fontSize = (14 + Math.random() * 10) + "px";

    petalsContainer.appendChild(petal);

    setTimeout(() => petal.remove(), 10000);
  }
}

// 🔐 Secret Message
function showSecret() {
  const secret = document.getElementById("secret");
  secret.classList.remove("hidden");

  setTimeout(() => {
    secret.classList.add("show");
  }, 500);
}
