/**
 * motivation.js
 * Daftar kalimat motivasi & pengingat keutamaan dzikir
 */

const MOTIVATION_QUOTES = [
  {
    quote: "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.",
    source: "QS. Ar-Ra'd: 28"
  },
  {
    quote: "Perumpamaan orang yang mengingat Rabbnya dan orang yang tidak mengingat Rabbnya seperti orang yang hidup dan orang yang mati.",
    source: "HR. Bukhari no. 6407"
  },
  {
    quote: "Maukah aku kabarkan amalan yang paling baik dan paling suci di sisi Rabbmu? Yaitu berdzikir kepada Allah.",
    source: "HR. Tirmidzi no. 3377"
  },
  {
    quote: "Basahilah lidahmu senantiasa dengan berdzikir kepada Allah Azza wa Jalla.",
    source: "HR. Tirmidzi & Ibn Majah"
  },
  {
    quote: "Dua kalimat yang ringan di lisan, berat di timbangan, dan dicintai Ar-Rahman: Subhanallahi wa bihamdihi, Subhanallahil 'Azhim.",
    source: "HR. Bukhari & Muslim"
  },
  {
    quote: "Barangsiapa membaca satu huruf dari Kitab Allah, maka ia akan mendapatkan satu kebaikan, dan satu kebaikan dilipatgandakan menjadi 10 kali lipat.",
    source: "HR. Tirmidzi"
  },
  {
    quote: "Sesungguhnya dalam berdzikir terdapat benteng yang paling kokoh dari godaan setan.",
    source: "Ibnul Qayyim Al-Jauziyyah"
  },
  {
    quote: "Dzikir adalah pelita bagi hati, penerang jiwa, dan jalan pembuka pintu keberkahan.",
    source: "Hisnul Muslim"
  }
];

function getRandomMotivation() {
  const index = Math.floor(Math.random() * MOTIVATION_QUOTES.length);
  return MOTIVATION_QUOTES[index];
}

function getDailyMotivation() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const index = dayOfYear % MOTIVATION_QUOTES.length;
  return MOTIVATION_QUOTES[index];
}
