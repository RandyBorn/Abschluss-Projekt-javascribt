// readline Modul importiert um Benutzereingaben im terminal zu ermöglichen

import rl from "readline-sync";

// Quiz-Fragen in einem Objekt
const math = [
  {
    questionn: "Frage: was ist 1 + 1?",
    option: ["1", "2"],
    answerr: 1,
  },

  {
    questionn: "Frage: Was ist 2 + 2?",
    option: ["2", "4"],
    answerr: 1,
  },
  {
    questionn: "Frage: Was ist 3 - 1?",
    option: ["1", "2"],
    answerr: 1,
  },

  {
    questionn: "Frage: Was ist 5 + 5?",
    option: ["10", "11"],
    answerr: 0,
  },
  {
    questionn: "Frage: Was ist 10 + 10?",
    option: ["15", "20"],
    answerr: 1,
  },
  {
    questionn: "Frage: Was ist 7 + 2",
    option: ["4", "9"],
    answerr: 1,
  },
  {
    questionn: "Frage: Was ist 25 - 4?",
    option: ["23", "21"],
    answerr: 1,
  },
];

// Allgemeine WissensFragen
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
  let obbj = {};
  let scoRe = 0;

  let score = 0;

  console.log(
    "Herzlich Willkommen zu unserem heutigen Kinderquiz!😉 Viel Spaß und viel Erfolg! 😜 "
  );

  for (let i = 0; i < math.length; i++) {
    obbj = math[i];

    askQuestions(obbj, scoRe);
  }
  console.log(
    "Prima sehr gut gemacht ich bin Sehr Stolz auf dich! jetzt gehen wir zur Allgeimeine WissensFrage 😎"
  );

  // Ruft die nächste Frage auf
  for (let i = 0; i < questions.length; i++) {
    obj = questions[i];
    // Funktion, um das Quiz zu starten

    // Startet mit der ersten Frage und 0 Punkten
    askQuestion(obj, score);
  }
  console.log(`Du hast ${score} Punkte von ${questions.length}`);
}
startquizMenü();

function askQuestions(obbj, scoRe) {
  // Wenn Alle Fragen beantwortet sind
  if (scoRe < math.length) {
    const useranSwer = rl.question(
      `${obbj.questionn} (Optionen: ${obbj.option})\n`
    );

    // Überprüft, ob die Antwort richtig ist

    if (obbj.answerr === obbj.option.indexOf(useranSwer)) {
      console.log("Richtig!👌 Gut gemacht!");
      scoRe++;
    } else {
      console.log(obbj.option);
      console.log(
        `Falsche Antwort!😮‍💨 Die richtige Antwort ist: ${
          obbj.option[obbj.answerr]
        }`
      );

      return scoRe++;
    }
  }
}

// Funktion für quizz normal frage

// Funktion stellt eine Frage und überprüft die Antwort
function askQuestion(obj, score) {
  // Wenn Alle Fragen beantwortet sind
  if (score < questions.length) {
    const userAnswer = rl.question(
      `${obj.question} (Optionen: ${obj.options})\n `
    );

    // Überprüft, ob die Antwort richtig ist
    // Überprüft Quiz 2

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

      return score++;
    }
  } else {
    // Alle Fragen wurden beantwortet, die Punktzahl wird hier angezeigt
    console.log(
      `Das Quiz ist beendet!😎 Du hast ${score} von ${questions.length} Fragen richtig beantwortet.👐📅`
    );
    rl.close();
  }
}
