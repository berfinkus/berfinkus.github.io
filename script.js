/* TEMA DEĞİŞTİRME */
const themes = [
  { bg: "linear-gradient(120deg,#1f2933,#111827)", accent: "#c2410c" }, // Koyu Turuncu
  { bg: "linear-gradient(120deg,#0f172a,#020617)", accent: "#3b82f6" }  // Mavi
];

let t = 0;
function changeTheme() {
  t = (t + 1) % themes.length;
  document.body.style.background = themes[t].bg;
  document.documentElement.style.setProperty("--accent", themes[t].accent);
}

/* PROFİL FOTOĞRAFI GEÇİŞİ */
const imgs = document.querySelectorAll(".profile-img");
let i = 0;

setInterval(() => {
  imgs[i].classList.remove("active");
  i = (i + 1) % imgs.length;
  imgs[i].classList.add("active");
}, 3000);
