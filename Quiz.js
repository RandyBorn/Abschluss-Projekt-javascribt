const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Quiz-Fragen

const questions = [
  {
    frage1: "Welche Farbe hat der himmel?",
    antworten: [`Blau , Grün , Rot , Gelb`],
    korrekt: 0,
  },
  {
    frage2: "Wie viele Spieler hat eine Fußballmannschaft?",
    antworten: ["13", "15", "16", "11"],
    korrekt: 3,
  },

  {
    frage3: "Wie viele Kontinente gibt es ?",
    antworten: ["4", "7"],
    korrekt: 1,
  },
  {
    frage4: "Was ist die Hauptstadt von Deutschland?",
    antworten: ["München", "Frankfurt", "Berlin", "Köln"],
    korrekt: 3,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

// Funktion um das Quiz zu starten

function startQuizapp() {
  let quizFragen = 0;
  let score = 0;
}

function appStarten() {
  console.log(
    "Herzlich Willkommen zu Unserem Heutigen Quiz! Freut uns sehr das du am Start bist , Drücke Enter zum Starten"
  );
}
