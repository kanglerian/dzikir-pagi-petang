(function () {
  const THEME_KEY = 'dzikir-theme';
  const FONT_KEY  = 'dzikir-font';

  function applyTheme(t) {
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
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
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
      this.syncThemeBtn();
    },
    setFont(size) {
      applyFont(size);
      this.syncFontBtns();
    },
    isDark() { return document.documentElement.classList.contains('dark'); },
    getFont() { return document.documentElement.getAttribute('data-font') || 'md'; },
    syncThemeBtn() {
      const btn = document.getElementById('theme-btn');
      if (!btn) return;
      btn.innerHTML = this.isDark()
        ? `<svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <circle cx="12" cy="12" r="5"/><path stroke-linecap="round"
             d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
           </svg>`
        : `<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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

  // --- TRACKER MANAGER (Target Amalan Harian & Auto-Reset Per Hari) ---
  window.TrackerManager = {
    KEY: 'dzikir_daily_tracker',
    getTodayStr() {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    },
    getData() {
      const today = this.getTodayStr();
      try {
        const raw = localStorage.getItem(this.KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.date === today) {
            return parsed;
          }
        }
      } catch (e) {}
      
      const initial = { date: today, pagi: false, sore: false, bada_shalat: false, ruqyah: false };
      this.saveData(initial);
      return initial;
    },
    saveData(data) {
      try {
        localStorage.setItem(this.KEY, JSON.stringify(data));
      } catch (e) {}
    },
    markComplete(type) {
      const data = this.getData();
      if (data[type] !== undefined) {
        data[type] = true;
        this.saveData(data);
      }
    },
    toggle(type) {
      const data = this.getData();
      if (data[type] !== undefined) {
        data[type] = !data[type];
        this.saveData(data);
      }
      return data[type];
    }
  };

  // --- USER MANAGER (Penyimpanan Nama & Sapaan Personal) ---
  window.UserManager = {
    KEY: 'dzikir_user_name',
    getName() {
      try {
        return (localStorage.getItem(this.KEY) || '').trim();
      } catch (e) {
        return '';
      }
    },
    setName(name) {
      try {
        const trimmed = (name || '').trim();
        if (trimmed) {
          localStorage.setItem(this.KEY, trimmed);
        } else {
          localStorage.removeItem(this.KEY);
        }
      } catch (e) {}
    },
    getDisplayName() {
      return this.getName() || 'Sahabat Dzikir';
    },
    hasCustomName() {
      return Boolean(this.getName());
    }
  };

  // --- UI HELPER (Toast Notification & Custom Modal Completion) ---
  window.UIHelper = {
    showToast(message, icon = '✨', duration = 3500) {
      let toast = document.getElementById('global-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'global-toast';
        toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] bg-slate-900/95 dark:bg-emerald-950/95 backdrop-blur-md text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 transition-all duration-300 transform -translate-y-8 opacity-0 pointer-events-none border border-emerald-500/30';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<span class="text-base">${icon}</span> <span>${message}</span>`;
      toast.classList.remove('-translate-y-8', 'opacity-0', 'pointer-events-none');
      toast.classList.add('translate-y-0', 'opacity-100');

      if (window._toastTimeout) clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-8', 'opacity-0', 'pointer-events-none');
      }, duration);
    },

    showCompletionModal(title, message, emoji = '🎉', onConfirm) {
      let modal = document.getElementById('completion-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'completion-modal';
        modal.className = 'fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none';
        modal.innerHTML = `
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-xs w-full text-center shadow-2xl transform scale-95 transition-transform duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 border border-emerald-200 dark:border-emerald-800 shadow-inner">
              <span id="comp-modal-emoji">🎉</span>
            </div>
            <h3 id="comp-modal-title" class="text-lg font-bold text-slate-900 dark:text-slate-100">Alhamdulillah!</h3>
            <p id="comp-modal-msg" class="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-medium"></p>
            <button id="comp-modal-btn" class="mt-5 w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
              <span>Alhamdulillah & Lanjutkan</span> <span>✨</span>
            </button>
          </div>
        `;
        document.body.appendChild(modal);
      }

      document.getElementById('comp-modal-emoji').innerText = emoji;
      document.getElementById('comp-modal-title').innerText = title;
      document.getElementById('comp-modal-msg').innerHTML = message;
      
      const btn = document.getElementById('comp-modal-btn');
      btn.onclick = function() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        const box = modal.querySelector('div');
        if (box) box.classList.add('scale-95');
        if (typeof onConfirm === 'function') onConfirm();
      };

      modal.classList.remove('opacity-0', 'pointer-events-none');
      const box = modal.querySelector('div');
      if (box) box.classList.remove('scale-95');
    }
  };

  // --- SOUND MANAGER (Web Audio Synthesis Feedback) ---
  window.SoundManager = {
    SOUND_KEY: 'dzikir_sound_enabled',
    audioCtx: null,

    isSoundEnabled() {
      try {
        const val = localStorage.getItem(this.SOUND_KEY);
        return val === null ? true : val === 'true';
      } catch (e) {
        return true;
      }
    },
    setSoundEnabled(enabled) {
      try {
        localStorage.setItem(this.SOUND_KEY, String(enabled));
      } catch (e) {}
    },

    getAudioContext() {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.audioCtx = new AudioCtx();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
      return this.audioCtx;
    },

    playClickSound() {
      if (!this.isSoundEnabled()) return;
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.045);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.045);
      } catch (e) {}
    },

    playCompletionSound() {
      if (!this.isSoundEnabled()) return;
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});

        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, index) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.value = freq;

          gain.gain.setValueAtTime(0, now + index * 0.08);
          gain.gain.linearRampToValueAtTime(0.2, now + index * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.35);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + index * 0.08);
          osc.stop(now + index * 0.08 + 0.35);
        });
      } catch (e) {}
    }
  };

  // Unlock AudioContext on first user interaction anywhere on page
  function unlockAudio() {
    if (window.SoundManager) {
      window.SoundManager.getAudioContext();
    }
  }
  ['click', 'touchstart', 'pointerdown'].forEach(evt => {
    window.addEventListener(evt, unlockAudio, { passive: true });
  });

  document.addEventListener('DOMContentLoaded', function () {
    ThemeManager.syncThemeBtn();
    ThemeManager.syncFontBtns();
  });
})();
