const themes = [
  {
    bg: "linear-gradient(120deg, #0f172a, #020617)",
    card: "#ffffff",
    accent: "#f97316" // turuncu
  },
  {
    bg: "linear-gradient(120deg, #1e293b, #0f172a)",
    card: "#ffffff",
    accent: "#2563eb" // lacivert
  }
];

let currentTheme = 0;

function changeTheme() {
  currentTheme = (currentTheme + 1) % themes.length;
  const theme = themes[currentTheme];

  document.body.style.background = theme.bg;
  document.documentElement.style.setProperty("--accent", theme.accent);
}
