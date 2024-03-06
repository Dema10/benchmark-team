const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let paragrafo = document.getElementsByClassName("counter")[0]
let check = document.querySelector("#check")
let div = document.querySelector(".risposte");
let counter = document.getElementById("counter");
// punteggio delle domande
let score = 0;
// contatore domande
let index = 0;


function checkObj(numberObj) {
let h1 = document.querySelector(".h1Domande");
// abbiamo creato un array vuoto per le risposte sia giuste che sbagliate
let risposte = [];
// abbiamo creato for in che va a prendere le proprietà di question
for (let proprietà in questions[numberObj]) {
  // abbiamo creato un if che controlla che la proprietà sia question
    if (proprietà === 'question') {
      // abbiamo richiamato la variabile h1 per aggiungerci la domanda 
        h1.innerText = questions[numberObj][proprietà];
    }
    // abbiamo creato un if che controlla che la proprietà sia correct_answer
    if (proprietà === 'correct_answer') {
      // abbiamo creato una variabile che va a puntare al button che c'è in HTML
        let button = document.createElement("button");
        // dentro questa variabile abbiamo aggiunto le correct_answer
        button.innerText = questions[numberObj][proprietà];
        // abbiamo pushato questa variabile con le risposte giuste dentro a risposte
        risposte.push(button);
    }
    // abbiamo creato un if che controlla che la proprietà sia incorrect_answers
    if (proprietà === 'incorrect_answers') {
      // dato che le risposte sbagliate sono di più, abbiamo fatto un ciclo for che le va a prendere tutte
        for (let i = 0; i < questions[numberObj].incorrect_answers.length; i++) {
          // abbiamo creato un'altra variabile che va a puntare al button che c'è in HTML
            let newButton = document.createElement("button");
            // dentro questa variabile abbiamo aggiunto le incorrect_answers
            newButton.innerText = questions[numberObj].incorrect_answers[i]; 
            // abbiamo pushato questa variabile con le risposte sbagliate dentro a risposte
            risposte.push(newButton);
        }
    }
}

// abbiamo creato questo div per pulire il contenuto ogni volta che si aggiorna con le nuove risposte
div.innerHTML = "";

// tramite la funzione shuffleArray che abbiamo creato (vedi riga 225) Mescoliamo l'array delle risposte
risposte = shuffleArray(risposte);

// Aggiungiamo le risposte al div grazie al forEach. in base al numero di risposte che trova lui crea tot bottoni corrispondenti
risposte.forEach(button => {
    div.appendChild(button);
    // abbiamo aggiunto al bottone creato all'interno di forEach, un addEventListener che ci permette di:
    // al click aumenta l'index (per passare alla domanda successiva) 
    button.addEventListener('click', function() {
      // passiamo alla domanda successiva ad ogni click
      index++;
      // nella pagina si aggiornerà l'indice delle domande es Question 2/10
      counter.innerText = index + 1
      if (button.innerText === questions[numberObj].correct_answer) {
        score ++ 
         console.log(score);
      } 
      // verifica che le domande siano finite
      if (index < questions.length) {
        // visualizza la prossima domanda
        checkObj(index)
      } else if (index === questions.length) {
        h1.innerText = "Hai finito il test"
        div.innerHTML = ""
        paragrafo.innerText = "Risultato " + score;
      }
    })
});

}

function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

 checkObj(index);
