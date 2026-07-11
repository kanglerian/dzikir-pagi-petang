(function () {
  const THEME_KEY = 'dzikir-theme';
  const FONT_KEY  = 'dzikir-font';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(THEME_KEY, t);
  }
  function applyFont(s) {
    document.documentElement.setAttribute('data-font', s);
    localStorage.setItem(FONT_KEY, s);
  }

  // Run immediately — cegah FOUC
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  applyFont(localStorage.getItem(FONT_KEY)  || 'md');

  window.ThemeManager = {
    toggle() {
      const curr = document.documentElement.getAttribute('data-theme');
      applyTheme(curr === 'dark' ? 'light' : 'dark');
      this.syncThemeBtn();
    },
    setFont(size) {
      applyFont(size);
      this.syncFontBtns();
    },
    isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; },
    getFont() { return document.documentElement.getAttribute('data-font') || 'md'; },
    syncThemeBtn() {
      const btn = document.getElementById('theme-btn');
      if (!btn) return;
      btn.innerHTML = this.isDark()
        ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <circle cx="12" cy="12" r="5"/><path stroke-linecap="round"
             d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
           </svg>`
        : `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round"
             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
           </svg>`;
    },
    syncFontBtns() {
      const size = this.getFont();
      ['sm','md','lg'].forEach(s => {
        const b = document.getElementById('font-' + s);
        if (!b) return;
        b.classList.toggle('active-font', s === size);
      });
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    ThemeManager.syncThemeBtn();
    ThemeManager.syncFontBtns();
  });
})();
