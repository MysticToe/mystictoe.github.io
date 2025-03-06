document.addEventListener("mousemove", (e) => createMagicDust(e.clientX, e.clientY));
document.addEventListener("touchmove", (e) => {
    let touch = e.touches[0];
    createMagicDust(touch.clientX, touch.clientY);
});

function createMagicDust(x, y) {
    for (let i = 0; i < 6; i++) { 
        const dust = document.createElement("div");
        dust.classList.add("magic-dust");

        const size = Math.random() * 4 + 2; 
        dust.style.width = `${size}px`;
        dust.style.height = `${size}px`;
        dust.style.left = `${x + randomOffset()}px`;
        dust.style.top = `${y + randomOffset()}px`;
        dust.style.backgroundColor = getRandomColor(); 

        document.body.appendChild(dust);

        setTimeout(() => dust.remove(), 200);
    }
}

function getRandomColor() {
    const colors = ["#ff1493", "#00ffcc", "#ffcc00", "#ff4500", "#8a2be2", "#00ff00"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomOffset() {
    return (Math.random() - 0.5) * 14; 
}

document.addEventListener("DOMContentLoaded", function () {
  const firefliesContainer = document.querySelector(".fireflies-container");
  const numFireflies = 40; // More fireflies

  for (let i = 0; i < numFireflies; i++) {
      let firefly = document.createElement("div");
      firefly.classList.add("firefly");
      firefliesContainer.appendChild(firefly);

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      firefly.style.left = `${x}px`;
      firefly.style.top = `${y}px`;

      animateFirefly(firefly);
  }

  function animateFirefly(firefly) {
      let duration = Math.random() * 10 + 8; // Slower movement (8 to 18 seconds)
      let xMovement = (Math.random() - 0.5) * window.innerWidth * 0.5;
      let yMovement = (Math.random() - 0.5) * window.innerHeight * 0.5;

      firefly.animate([
          { transform: `translate(0, 0)`, opacity: 0.7 },
          { transform: `translate(${xMovement}px, ${yMovement}px)`, opacity: 1 }
      ], {
          duration: duration * 1000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out"
      });
  }
});