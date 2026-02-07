body {
  margin: 0;
  padding: 20px;
  font-family: 'Georgia', serif;
  background: linear-gradient(to bottom, #ffe6eb, #ffffff);
  text-align: center;
}

h1 {
  color: #b3003b;
}

.subtitle {
  color: #555;
  margin-bottom: 30px;
}

/* Timeline */
.timeline {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.day {
  padding: 10px 15px;
  border-radius: 20px;
  background: #ddd;
  color: #777;
  cursor: not-allowed;
  font-size: 0.9em;
}

.day.active {
  background: #ff4d79;
  color: white;
  cursor: pointer;
}

.day.unlocked {
  background: #ffb3c6;
  color: #6b0022;
  cursor: pointer;
}

/* Content */
#content {
  font-size: 1.2em;
  color: #333;
  max-width: 600px;
  margin: auto;
  line-height: 1.6;
}

/* Rose Section */
#rose-container {
  margin-top: 30px;
}

.hidden {
  display: none;
}

/* SVG Rose */
.rose-svg {
  width: 120px;
  margin: auto;
  cursor: pointer;
  transition: transform 1.5s ease;
}

.rose-svg svg {
  width: 100%;
}

.petal {
  fill: #c9184a;
  transform-origin: center;
  transition: transform 1.5s ease;
}

.stem {
  fill: #2d6a4f;
}

.bloom .petal {
  transform: scale(1.3);
}

.bloom {
  transform: scale(1.2);
}

/* Rose Text */
#rose-text {
  margin-top: 20px;
  font-size: 1.1em;
  color: #b3003b;
  opacity: 0;
  transition: opacity 1.5s ease;
}

#rose-text.show {
  opacity: 1;
}

/* Secret Message */
.secret {
  margin-top: 25px;
  font-size: 1em;
  color: #6b0022;
  opacity: 0;
  transition: opacity 2s ease;
}

.secret.show {
  opacity: 1;
}

/* Floating Petals */
#petals {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
}

.petal-float {
  position: absolute;
  top: -50px;
  font-size: 20px;
  animation: fall linear infinite;
  opacity: 0.8;
}

@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
  }
}
