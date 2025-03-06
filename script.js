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

        setTimeout(() => dust.remove(), 300);
    }
}

function getRandomColor() {
    const colors = ["#ff1493", "#00ffcc", "#ffcc00", "#ff4500", "#8a2be2", "#00ff00"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomOffset() {
    return (Math.random() - 0.5) * 14; 
}