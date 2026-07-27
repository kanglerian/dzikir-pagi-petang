# 📿 Dzikir - Buku Saku Digital (PWA)

[![Status: Live](https://img.shields.io/badge/Status-Live-emerald.svg)]()
[![PWA: Ready](https://img.shields.io/badge/PWA-Ready-orange.svg)]()

Aplikasi web **Dzikir** (Digital Pocket Book) yang modern, indah, ringan, dan responsif untuk membantu kaum muslimin melaksanakan amalan dzikir harian sesuai tuntunan Al-Qur'an dan As-Sunnah. Aplikasi ini dibangun menggunakan teknologi **Progressive Web App (PWA)** sehingga dapat dipasang secara langsung di smartphone Android maupun iOS tanpa melalui App Store/Play Store.

---

## 🌐 Live Demo
Buka aplikasi langsung melalui browser kamu:
👉 **[https://dzikir-pagi-petang.kodelabo.com/](https://dzikir-pagi-petang.kodelabo.com/)**

---

## 📖 Fitur & Menu Utama

### 1. 🏠 Beranda (Buku Saku Digital)
- **Sapaan Dinamis:** Ucapan salam dan sapaan yang menyesuaikan waktu secara *real-time* (Pagi, Siang, Sore, & Malam).
- **Pengingat & Motivasi Dzikir:** Fitur kutipan motivasi islami (`motivation.js`) dengan tombol acak kutipan secara interaktif.
- **3 Menu Utama Amalan:**
  1. ☀️ **Dzikir Pagi & Petang:** Panduan dzikir perlindungan pagi dan sore (Hisnul Muslim).
  2. 🕌 **Dzikir Ba'da Shalat:** Bacaan istighfar, tasbih, tahmid, takbir, dan doa setelah shalat fardhu.
  3. 🛡️ **Ruqyah Syari'yyah:** Ayat-ayat penawar Al-Qur'an & doa benteng diri dari penyakit, gangguan, serta 'ain.

### 2. 📿 Fitur Reader & Tasbih Digital
- **Ring Tasbih Progress:** Visualisasi hitungan dzikir berbentuk lingkaran interaktif dengan haptic feedback (vibrasi).
- **Akordion Terjemahan:** Tampilan teks terjemahan yang fleksibel dan rapi.
- **Pengatur Ukuran Teks Arab:** Pilihan ukuran font Arab (`A-`, `A`, `A+`) untuk kenyamanan membaca.
- **Dark Mode System:** Transisi warna tema (Light/Dark Mode) yang nyaman di mata untuk penggunaan subuh maupun petang.

### 3. 📲 Fitur PWA & Offline Access
- **Instalasi PWA:** Tombol cepat *Add to Home Screen*.
- **Mode Offline & Auto-Update:** Menggunakan Service Worker (`sw.js`) dengan strategi Network-First untuk meng-cache seluruh halaman sehingga aplikasi tetap berfungsi penuh meskipun tanpa jaringan internet.

---

## 🛠️ Arsitektur & Teknologi

- **Frontend:** HTML5, Tailwind CSS, JavaScript (Vanilla).
- **State & Theme Manager:** `theme.js` (Theme & Font Manager), `motivation.js` (Islamic Quotes Manager).
- **PWA Core:** Service Worker (`sw.js`) & Web App Manifest (`manifest.json`).
- **Sumber Data & API:**
  - **Dzikir Pagi & Petang:** JSON Lokal / [API Dzikir Pagi Petang](https://github.com/kanglerian/api-dzikir-pagi-petang) oleh @kanglerian.
  - **Ruqyah Syari'yyah:** [Ruqyah Syari'yyah API](https://ruqyah-syariyyah.api.kodelabo.com/) oleh @kanglerian.
  - **Dzikir Ba'da Shalat:** API Loader (`https://dzikir-bada-shalat.api.kodelabo.com/`) dengan data fallback lokal.

---

## 📂 Struktur Berkas Proyek

```
dzikir-pagi-petang/
├── index.html              # Dashboard Beranda Utama (Buku Saku Digital)
├── dzikir-pagi-petang.html # Reader Dzikir Pagi & Petang (Hisnul Muslim)
├── dzikir-bada-shalat.html # Reader Dzikir Ba'da Shalat Fardhu
├── ruqyah-syariyyah.html   # Reader Ruqyah Syari'yyah
├── shop.html               # Katalog Kebutuhan Muslim
├── products.js             # Data Produk Kebutuhan Muslim
├── motivation.js           # Pengelola Kutipan Motivasi Dzikir
├── theme.js                # Pengelola Tema Dark/Light & Ukuran Font
├── dzikr.json              # Data JSON Dzikir Pagi & Petang
├── manifest.json           # PWA Web App Manifest
├── sw.js                   # Service Worker Cache & Offline Controller
└── README.md               # Dokumentasi Proyek
```

---

## 📲 Cara Instalasi di HP

### Android (Chrome)
1. Buka link aplikasi di browser Chrome.
2. Klik tombol **"Pasang Aplikasi"** yang muncul di layar, atau klik ikon titik tiga di pojok kanan atas.
3. Pilih **"Add to Home Screen"** atau **"Instal Aplikasi"**.

### iOS / iPhone (Safari)
1. Buka link aplikasi di Safari.
2. Klik tombol **Share** (ikon kotak dengan panah ke atas).
3. Gulir ke bawah dan pilih **"Add to Home Screen"**.

---

## 📜 Lisensi & Penggunaan

Proyek ini bersifat **Open Source** dan bebas digunakan atau dikembangkan kembali (**FREE**).

> [!IMPORTANT]
> **Amal Jariyah:** Proyek ini ditujukan untuk mempermudah ibadah umat. Silakan gunakan, pelajari, atau bagikan. Tidak perlu izin khusus, namun doa dan atribusi sangat dihargai.

### 👤 Author
**Lerian** - Website: [kodelabo.com](http://kodelabo.com/)
- GitHub: [@kanglerian](https://github.com/kanglerian)