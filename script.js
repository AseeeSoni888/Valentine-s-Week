// Days configuration
const days = [
  {
    name: "Rose Day",
    content: `
      🌹 A rose for the girl who made my world softer.
      <br><br>
      Click the rose below… it has something to say.
    `,
    rose: true
  },
  {
    name: "Propose Day",
    content: `
      💍 If I had to choose again,
      I’d still choose you — every lifetime.
    `
  },
  {
    name: "Chocolate Day",
    content: `
      🍫 Sweet like chocolates,
      but still not sweeter than you.
    `
  },
  {
    name: "Teddy Day",
    content: `
      🧸 If you were a teddy,
      I’d never let you go.
    `
  },
  {
    name: "Promise Day",
    content: `
      🤞 I promise to choose you,
      even on the hardest days.
    `
  },
  {
    name: "Hug Day",
    content: `
      🤍 Close your eyes.
      This page is a hug from me to you.
    `
  },
  {
    name: "Kiss Day",
    content: `
      💋 If this screen could kiss,
      it would linger.
    `
  },
  {
    name: "Valentine’s Day",
    content: `
      ❤️ This website ends here.
      <br><br>
      But my love for you doesn’t.
    `
  }
];

let currentDay = 0;

// Elements
const contentDiv = document.getElementById("content");
const daysDiv = document.querySelectorAll(".day");
const roseContainer = document.getElementById("rose-container");
const roseSvg = document.querySelector(".rose-svg");
const roseText = document.getElementById("rose-text");
const secretText = document.querySelector(".secret");

// Initial load
loadDay(0);

// Attach click listeners
daysDiv.forEach((day, index) => {
  day.addEventListener("click", () => {
    if (day.classList.contains("active") || day.classList.contains("unlocked")) {
      loadDay(index);
    }
  });
});

function loadDay(index) {
  currentDay = index;

  // Update content
  contentDiv.innerHTML = days[index].content;

  // Update timeline
  daysDiv.forEach((d, i) => {
    d.classList.remove("active");
    if (i < index) d.classList.add("unlocked");
    if (i === index) d.classList.add("active");
  });

  // Rose logic
  if (days[index].rose) {
    roseContainer.classList.remove("hidden");
  } else {
    roseContainer.classList.add("hidden");
  }
}

// Rose click animation
roseSvg.addEventListener("click", () => {
  roseSvg.classList.add("bloom");
  roseText.classList.add("show");
  secretText.classList.add("show");
});

// Floating petals
const petalsContainer = document.getElementById("petals");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal-float");
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  petal.style.fontSize = 16 + Math.random() * 20 + "px";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 400);
