// readline Modul importiert um Benutzereingaben im terminal zu ermöglichen

import rl from "readline-sync";

// Quiz-Fragen in einem Objekt

const questions = [
  {
    question: "Welche Farbe hat der himmel?",
    options: ["Blau", "Grün", "Rot", "Gelb"],
    answer: 0,
  },
  {
    question: "Wie viele Spieler hat eine Fußballmannschaft?",
    options: ["13", "15", "16", "11"],
    answer: 3,
  },

  {
    question: "Wie viele Kontinente gibt es ?",
    options: ["4", "7"],
    answer: 1,
  },
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    options: ["München", "Frankfurt", "Berlin", "Köln"],
    answer: 2,
  },
  {
    question: "Was ist das größte Tier der Welt?",
    options: ["Giraffe", "Elefant", "Blauwal", "Pottwal"],
    answer: 2,
  },
  {
    question: "Welches Tier ernährt sich überwiegend von Bambus?",
    options: ["Panda", "Gorilla", "Giraffe"],
    answer: 0,
  },
  {
    question: "Welches Tier hält Winterschlaf?",
    options: ["Murmeltiere", "Rehe", "Hasen", "Wildschweine"],
    answer: 0,
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    options: ["4", "6", "8", "10"],
    answer: 2,
  },
];

// Funktion, die das gesamte Quiz ausführt
function startquizMenü() {
  let obj = {};
  let score = 0;
  console.log(
    "Herzlich Willkommen zu unserem heutigen Kinderquiz!😉 Viel Spaß und viel Erfolg! 😜 "
  );

  // Ruft die nächste Frage auf
  for (let i = 0; i < questions.length; i++) {
    function startQuiz() {}

    // Funktion, um das Quiz zu starten
    startQuiz();

    // Startet mit der ersten Frage und 0 Punkten
    askQuestion(obj, score);
  }

  console.log(`Du hast ${score} Punkte von ${questions.length}`);
}
startquizMenü();

// Funktion stellt eine Frage und überprüft die Antwort
function askQuestion(obj, score) {
  // Wenn Alle Fragen beantwortet sind
  if (score < questions.length) {
    const userAnswer = rl.question(
      `${obj.question} (Optionen: ${obj.options})\n`
    );

    // Überprüft, ob die Antwort richtig ist

    if (obj.answer === obj.options.indexOf(userAnswer)) {
      console.log("Richtig!👌 Gut gemacht!");
      score++;
    } else {
      console.log(obj.options);

      console.log(
        `Falsche Antwort!😮‍💨 Die richtige Antwort ist: ${
          obj.options[obj.answer]
        }`
      );
    }
  } else {
    // Alle Fragen wurden beantwortet, die Punktzahl wird hier angezeigt
    console.log(
      `Das Quiz ist beendet!😎 Du hast ${score} von ${questions.length} Fragen richtig beantwortet.👐📅`
    );
    rl.close();
  }
}
