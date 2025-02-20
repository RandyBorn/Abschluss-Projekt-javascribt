import rl from "readline-sync";

// Mathe Quiz
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
    question: "Welche Farbe hat der Himmel?",
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

// Funktion für das Quiz-Menü
function startquizMenü() {
  console.log(
    "Herzlich Willkommen zu unserem heutigen Kinderquiz!😉 Viel Spaß und viel Erfolg! 😜"
  );

  // Auswahl Möglichkeiten zwischen (Mathematik-Quiz) und (Allgemeinwissen-Quiz)

  const choice = rl.keyInSelect(
    ["Mathematik-Quiz", "Allgemeinwissen-Quiz"],
    "Wähle dein Quiz"
  );

  if (choice === 0) {
    startMathQuiz(); // Mathe-Quiz starten
  } else if (choice === 1) {
    startAllgemeinQuiz(); // Allgemeinwissen-Quiz starten
  } else {
    console.log("Falsche Auswahl Spiel wird Abgebrochen!:(");
  }
}
startquizMenü(); // Start des Menüs

// Mathe-Quiz
function startMathQuiz() {
  let score = 0;
  console.log("\u001b[1;36m Du hast das Mathe-Quiz gewählt Viel spaẞ 💡");

  // Fragen im Mathe-Quiz durchgehen
  for (let i = 0; i < math.length; i++) {
    const mthe = math[i];
    score = askQuestionMath(mthe, score);
  }
  // End ergebniss und punkte
  console.log(
    `Super Du kannst sehr stolz auf dich sein! Du hast ${score} von ${math.length} Punkten erreicht! 🏅 🤓`
  );
}

// Allgemeinwissen-Quiz
function startAllgemeinQuiz() {
  let score = 0;

  console.log(
    "\u001b[1;35m Du hast das Allgemeinwissen-Quiz gewählt Viel Spaẞ 🤓"
  );
  // Alle Fragen von Allgemeinwissen-Quiz durchgehen
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    score = askQuestion(question, score);
  }

  // End ergebniss und punkte
  console.log(
    `Super Du kannst sehr stolz auf dich sein! du hast ${score} von ${questions.length} Punkten erreicht! 🏅 🤓`
  );
}

// Funktion die eine Frage stellt und Antwort überprüft und antwort Möglichkeiten anzeigt
function askQuestion(obj, score) {
  const userAnswer = rl.question(
    `${obj.question} (Optionen: ${obj.options})\n `
  );

  if (obj.answer === obj.options.indexOf(userAnswer)) {
    console.log("\u001b[1;32m Richtig!👌 Gut gemacht!");
    score++;
  } else {
    console.log(
      `\u001b[1;31m Falsche Antwort! Die richtige Antwort ist: ${
        obj.options[obj.answer]
      }`
    );
  }
  return score;
}

function askQuestionMath(obbj, score) {
  const userAnswer = rl.question(
    `${obbj.questionn} (Optionen: ${obbj.option})\n `
  );

  if (obbj.answer || obbj.option.indexOf(userAnswer)) {
    console.log("\u001b[1;32m Richtig!👌 Gut gemacht!");
    score++;
  } else {
    console.log(
      `\u001b[1;31m  Falsche Antwort! Die richtige Antwort ist: ${
        obbj.option[obbj.answerr]
      }  `
    );
  }
  return score;
}
