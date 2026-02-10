document.querySelectorAll(".skill").forEach(skill => {
    const percent = skill.dataset.percent;
    const circle = skill.querySelector(".circle");
    circle.style.background =
        `conic-gradient(var(--accent) ${percent * 3.6}deg, #e5e7eb 0deg)`;
    circle.innerText = percent + "%";
});

function toggleTheme() {
    document.body.classList.toggle("dark");
}
