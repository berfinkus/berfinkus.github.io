/* TEMA DEGISTIRME */
const themes = [
  {
    bg: "linear-gradient(120deg, #0f172a, #020617)",
    accent: "#f97316"
  },
  {
    bg: "linear-gradient(120deg, #1e293b, #0f172a)",
    accent: "#2563eb"
  }
];

let currentTheme = 0;

function changeTheme() {
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.style.background = themes[currentTheme].bg;
  document.documentElement.style.setProperty("--accent", themes[currentTheme].accent);
}

/* PROFIL FOTO DONME */
const images = document.querySelectorAll(".profile-img");
let currentImage = 0;

setInterval(() => {
  images[currentImage].classList.remove("active");
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add("active");
}, 3000);
