const productsData = [
  {
    name: "Buku Dzikir Pagi dan Petang Penulis Yazid bin Abdul Qadir Jawas - Pustaka Imam Syafi'i",
    category: "Buku",
    image: "./products/dzikir-pagi-dan-petang-yazid-bin-abdul-qadir-jawas.webp",
    description: "Buku dzikir pagi dan petang yang ditulis oleh Yazid bin Abdul Qadir Jawas dan diterbitkan oleh Pustaka Imam Syafi'i.",
    shopeeUrl: "https://s.shopee.co.id/2LWc0JAQY4"
  },
  {
    name: "Buku Doa dan Wirid Penulis Yazid bin Abdul Qadir Jawas - Pustaka Imam Syafi'i",
    category: "Buku",
    image: "./products/doa-dan-wirid.webp",
    description: "Buku doa dan wirid yang ditulis oleh Yazid bin Abdul Qadir Jawas dan diterbitkan oleh Pustaka Imam Syafi'i.",
    shopeeUrl: "https://s.shopee.co.id/9KgMMdVIES"
  },
  {
    name: "Sajadah Arizona Qubah Ukuran 60x110cm Busa Empuk Motif Minimalis Anti Slip",
    category: "Aksesoris",
    image: "./products/sajadah-arizona-qubah-ukuran-60x110cm-busa-empuk-motif-minimalis-anti-slip.webp",
    description: "SajadahArizona Qubah Ukuran 60x110cm Busa Empuk Motif Minimalis Anti Slip.",
    shopeeUrl: "https://s.shopee.co.id/20tlbu7Tad"
  },
  {
    name: "Nutrifarm Madu Hutan 500 ml / 736 gr",
    category: "Herbal",
    image: "./products/nutrifarm-madu-hutan-500-ml-736-gr.webp",
    description: "Nutrifarm Madu Hutan 500 ml / 736 gr.",
    shopeeUrl: "https://s.shopee.co.id/7KvHyUJY4l"
  },
  {
    name: "STAZBIYA - Mukena TSABINA Series (Mukena Dewasa Motif Floral Bahan Rayon 2 in 1 Set Sajadah)",
    category: "Aksesoris",
    image: "./products/stazbiya-mukena-tsabina-series.webp",
    description: "STAZBIYA - Mukena TSABINA Series (Mukena Dewasa Motif Floral Bahan Rayon 2 in 1 Set Sajadah).",
    shopeeUrl: "https://s.shopee.co.id/9KgMMSV3tU"
  },
  {
    name: "BACENO MUSLIM Peci Rajut Mercan Benang Poly Ukuran Dewasa",
    category: "Aksesoris",
    image: "./products/peci-rajut-mercan.webp",
    description: "BACENO MUSLIM Peci Rajut Mercan Benang Poly Ukuran Dewasa.",
    shopeeUrl: "https://s.shopee.co.id/111ERDlDvC"
  },
  {
    name: "Tasbih Digital LED GRATIS BOX AKRILIK/ CARD + MIKA",
    category: "Aksesoris",
    image: "./products/tasbih-digital-led.webp",
    description: "Tasbih Digital LED GRATIS BOX AKRILIK/ CARD + MIKA.",
    shopeeUrl: "https://s.shopee.co.id/4AyHlD75ba"
  },
  {
    name: "AL-FATIHA Jam Adzan Otomatis Digital FAJ-106 dengan Jadwal Sholat 5 Waktu",
    category: "Aksesoris",
    image: "./products/al-fatiha-jam-adzan-otomatis-digital-faj-106.webp",
    description: "AL-FATIHA Jam Adzan Otomatis Digital FAJ-106 dengan Jadwal Sholat 5 Waktu.",
    shopeeUrl: "https://s.shopee.co.id/5AqoxBlxyr"
  },
  {
    name: "Alat Dzikir Manual Stainless",
    category: "Aksesoris",
    image: "./products/alat-dzikir-manual-stainless.webp",
    description: "Alat Dzikir Manual Stainless.",
    shopeeUrl: "https://s.shopee.co.id/4qDyZ2yCtd"
  },
  {
    name: "Al Quran Zipper Terjemahan Tajwid Reeyana by Madinaquran Madeena",
    category: "Buku",
    image: "./products/al-quran-zipper-terjemahan-tajwid-reeyana-by-madinaquran-madeena.webp",
    description: "Al Quran Zipper Terjemahan Tajwid Reeyana by Madinaquran Madeena.",
    shopeeUrl: "https://s.shopee.co.id/2BDDOK7YiA"
  },
  {
    name: "NADISFA - SAFWA BUTTON PASTAN | PASHMINA INSTAN SYAR'I",
    category: "Aksesoris",
    image: "./products/nadisfa-safwa-button-pastan-pashmina-instan-syari.webp",
    description: "NADISFA - SAFWA BUTTON PASTAN | PASHMINA INSTAN SYAR'I.",
    shopeeUrl: "https://s.shopee.co.id/9zw4is2QSA"
  },
  {
    name: "Handsock Thumbhole Knit T Hole Manset Jempol Rib Premium Kaos Tangan Wanita Jari by IM Syar'i",
    category: "Aksesoris",
    image: "./products/handsock-thumbhole-knit-t-hole-manset-jempol-rib-premium-kaos-tangan-wanita-jari-by-im-syari.webp",
    description: "Handsock Thumbhole Knit T Hole Manset Jempol Rib Premium Kaos Tangan Wanita Jari by IM Syar'i.",
    shopeeUrl: "https://s.shopee.co.id/gOPbtA8jx"
  },
  {
    name: "THE MUDS - Kaos Kaki Jempol Fashion Muslimah Tapak Hitam",
    category: "Aksesoris",
    image: "./products/the-muds-kaos-kaki-jempol-fashion-muslimah-tapak-hitam.webp",
    description: "THE MUDS - Kaos Kaki Jempol Fashion Muslimah Tapak Hitam.",
    shopeeUrl: "https://s.shopee.co.id/60Pvxn08AB"
  },
  {
    name: "HOHODALINK 5 Pcs Pin Magnet Hijab Anti Slip Magnet Bros Jilbab Magnetik Hijab Peniti Magnetik",
    category: "Aksesoris",
    image: "./products/hohodalink-5-pcs-pin-magnet-hijab-anti-slip-magnet-bros-jilbab-magnetik-hijab-peniti-magnetik.webp",
    description: "HOHODALINK 5 Pcs Pin Magnet Hijab Anti Slip Magnet Bros Jilbab Magnetik Hijab Peniti Magnetik.",
    shopeeUrl: "https://s.shopee.co.id/4fuYNOi0Lm"
  },
  {
    name: "Prodigo Sajadah Travel Pindul hitam | Sejadah Traveling Pouch | Sajada Lipat Praktis",
    category: "Aksesoris",
    image: "./products/prodigo-sajadah-travel-pindul-hitam-sejadah-traveling-pouch-sajada-lipat-praktis.webp",
    description: "Prodigo Sajadah Travel Pindul hitam | Sejadah Traveling Pouch | Sajada Lipat Praktis.",
    shopeeUrl: "https://s.shopee.co.id/9zw4jHR71G"
  },
  {
    name: "TORCH Almazan Sajadah Lipat Saku Sejadah Travelling Souvenir - Travel Sajjada Prayer",
    category: "Aksesoris",
    image: "./products/torch-almazan-sajadah-lipat-saku-sejadah-travelling-souvenir---travel-sajjada-prayer.webp",
    description: "TORCH Almazan Sajadah Lipat Saku Sejadah Travelling Souvenir - Travel Sajjada Prayer.",
    shopeeUrl: "https://s.shopee.co.id/3ViazN5Ck8"
  },
  {
    name: "Sajadah Aesthetic Reeyana Sajadah Travel Lipat Premium",
    category: "Aksesoris",
    image: "./products/sajadah-aesthetic-reeyana-sajadah-travel-lipat-premium.webp",
    description: "Sajadah Aesthetic Reeyana Sajadah Travel Lipat Premium.",
    shopeeUrl: "https://s.shopee.co.id/1VxWbjChLa"
  },
  {
    name: "Raaya - Mukena traveling Eliza Dewasa | Pouch mini boneka lucu kado karakter Nyaman kecil hantaran",
    category: "Aksesoris",
    image: "./products/raaya-mukena-traveling-eliza-dewasa-pouch-mini-boneka-lucu-kado-karakter-nyaman-kecil-hantaran.webp",
    description: "Raaya - Mukena traveling Eliza Dewasa | Pouch mini boneka lucu kado karakter Nyaman kecil hantaran.",
    shopeeUrl: "https://s.shopee.co.id/7pra9WBDFY"
  },
  {
    name: "Mukena Calista Series | Mukena Travel Mini Parasut Premium Polos | Mukena Travel Pouch Model 2in1 Resleting Dagu",
    category: "Aksesoris",
    image: "./products/mukena-calista-series-mukena-travel-mini-parasut-premium-polos-mukena-travel-pouch-model-2in1-resleting-dagu.webp",
    description: "Mukena Calista Series | Mukena Travel Mini Parasut Premium Polos | Mukena Travel Pouch Model 2in1 Resleting Dagu.",
    shopeeUrl: "https://s.shopee.co.id/5fn5ZZWkJa"
  },
  {
    name: "DS Modest - Mukena Traveling Mini Pouch Premium 2 in 1 - Samara (Reseleting Leher)",
    category: "Aksesoris",
    image: "./products/ds-modest-mukena-traveling-mini-pouch-premium-2-in-1-samara-reseleting-leher.webp",
    description: "DS Modest - Mukena Traveling Mini Pouch Premium 2 in 1 - Samara (Reseleting Leher).",
    shopeeUrl: "https://s.shopee.co.id/7fY9xHS6aj"
  },
  {
    name: "Holy Peony Sahara Mukena Travel 2 in 1 Prayer Set Travel Premium Mini Pouch",
    category: "Aksesoris",
    image: "./products/holy-peony-sahara-mukena-travel-2-in-1-prayer-set-travel-premium-mini-pouch.webp",
    description: "Holy Peony Sahara Mukena Travel 2 in 1 Prayer Set Travel Premium Mini Pouch.",
    shopeeUrl: "https://s.shopee.co.id/AAFUvtqyAH"
  },
];
