document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");

    // Text Color Animation
    let colors = ["#ff0080", "#8000ff", "#00ffcc", "#ffcc00"];
    let i = 0;

    setInterval(() => {
        content.style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 1000);
});
