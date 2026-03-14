const THEME_KEY = "theme";

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function openModal(html) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;

  content.innerHTML = html;
  modal.hidden = false;
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector("[data-close-modal]");
  const closeX = modal.querySelector(".modal__close");
  closeX?.focus();

  function onKeyDown(e) {
    if (e.key === "Escape") close();
  }

  function close() {
    modal.hidden = true;
    content.innerHTML = "";
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeyDown);
    closeBtn?.removeEventListener("click", close);
  }

  document.addEventListener("keydown", onKeyDown);
  closeBtn?.addEventListener("click", close);
  modal.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", close));
}

function openImage(src) {
  openModal(`
    <h3>Preview</h3>
    <p>Click outside the panel or press Esc to close.</p>
    <div class="panel" style="padding: 10px">
      <img src="${src}" alt="Image preview" style="border-radius: 14px; border: 1px solid var(--border)" />
    </div>
  `);
}

function getProjectModal(id) {
  if (id === "swaply") {
    return `
      <h3>Swaply — Mobile Marketplace UI</h3>
      <p>
        Commercial mobile application UI concept for buying and selling both original and second-hand
        items. Focused on clarity, trust signals, and a scalable component approach.
      </p>
      <div class="two-col">
        <div class="panel">
          <strong>Highlights</strong>
          <ul>
            <li>Modern layout, readable hierarchy, and consistent spacing</li>
            <li>Reusable components aligned with a design-system mindset</li>
            <li>Optimized for product browsing and conversion moments</li>
          </ul>
        </div>
        <div class="panel">
          <strong>Link</strong>
          <p style="margin-top: 8px">
            <a class="link" target="_blank" rel="noreferrer"
              href="https://www.figma.com/design/1Swz3p8RuM3Ods0MxeCsL7/Untitled?node-id=686-301&m=dev&t=yVXOSMbgSxHkIJI4-1">Open the Figma file</a>
          </p>
          <p style="margin: 0; color: var(--muted); font-weight: 600;">
            Add your exported UI screenshots to <code>assets/</code> anytime and I can wire them into the gallery.
          </p>
        </div>
      </div>
    `;
  }

  return `
    <h3>Project</h3>
    <p>Details coming soon.</p>
  `;
}

// Init
document.getElementById("year").textContent = String(new Date().getFullYear());
setTheme(getPreferredTheme());

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

document.addEventListener("click", async (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;

  const openId = target.closest("[data-open-modal]")?.getAttribute("data-open-modal");
  if (openId) {
    openModal(getProjectModal(openId));
    return;
  }

  const imgSrc = target.closest("[data-open-image]")?.getAttribute("data-open-image");
  if (imgSrc) {
    openImage(imgSrc);
    return;
  }

  const copyBtn = target.closest("[data-copy]");
  if (copyBtn) {
    const value = copyBtn.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(value);
      const old = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = old), 900);
    } catch {
      openModal(`<h3>Copy</h3><p>Copy this value:</p><div class="panel"><code>${value}</code></div>`);
    }
  }
});

