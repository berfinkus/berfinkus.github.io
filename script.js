/* TEMA */
const themes = [
  { bg: "linear-gradient(120deg,#0f172a,#020617)", accent: "#f97316" },
  { bg: "linear-gradient(120deg,#1e293b,#0f172a)", accent: "#2563eb" }
];

let t = 0;
function changeTheme() {
  t = (t + 1) % themes.length;
  document.body.style.background = themes[t].bg;
  document.documentElement.style.setProperty("--accent", themes[t].accent);
}

/* PROFIL SLIDER */
const imgs = document.querySelectorAll(".profile-img");
let i = 0;

setInterval(() => {
  imgs[i].classList.remove("active");
  i = (i + 1) % imgs.length;
  imgs[i].classList.add("active");
}, 3000);
