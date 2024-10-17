const coords = {x: 0, y: 0};
const dots = document.querySelectorAll(".dot");

dots.forEach(function(dot) {
    dot.x = 0;
    dot.y = 0;
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX + window.scrollX; // Adjust for horizontal scroll
    coords.y = e.clientY + window.scrollY; // Adjust for vertical scroll
});

function animatedot() {
    let x = coords.x;
    let y = coords.y;

    dots.forEach(function(dot, index) {
        dot.style.left = x - 12 + "px";
        dot.style.top = y - 12 + "px";

        dot.style.scale = (10 - index) / 10;

        dot.x = x;
        dot.y = y;

        const nextdot = dots[index + 1] || dots[0];
        x += (nextdot.x - x) * 0.6;
        y += (nextdot.y - y) * 0.6;
    });

    requestAnimationFrame(animatedot);
}

animatedot();
