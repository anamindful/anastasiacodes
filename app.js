/* ═══════════════════════════════════════
   RIFF — Shared App JS
   app.js
═══════════════════════════════════════ */

(function () {
  // ── Theme persistence ──
  const THEME_KEY = 'riff_theme';

  function applyTheme(isDay) {
    document.getElementById('root').classList.toggle('day', isDay);
    const icon = document.getElementById('modeIcon');
    if (icon) icon.className = isDay ? 'ti ti-sun' : 'ti ti-moon';
    localStorage.setItem(THEME_KEY, isDay ? 'day' : 'night');
  }

  window.toggleMode = function () {
    const isDay = !document.getElementById('root').classList.contains('day');
    applyTheme(isDay);
  };

  // Apply saved theme on load
  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'day') applyTheme(true);
  });
})();