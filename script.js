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

let image = document.getElementById("myimage");
let flag = false;
let a = document.getElementById("tasto");
let checkbox = document.getElementById("checkbox");
let h1 = document.querySelector(".h1Domande");
let numeroTimer = document.getElementById("timer");
let paragrafo = document.getElementsByClassName("counter")[0]
let check = document.querySelector("#check")
let div = document.querySelector(".risposte");
let counter = document.getElementById("counter");
// punteggio delle domande
let score = 0;
// contatore domande
let index = 0;


function checkObj(numberObj) {
startTimer();
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
      removeTimer();
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
      } else if (score >= 6 && score < 10 && index === questions.length) {
        setInterval(creareCoriandoli, 100);
        h1.innerText = "Congratulazioni, hai completato il test!"
        div.innerHTML = ""
        image.classList.add("mostra-img");
        image.src = "immagine-voto/IMG_5029.jpg";
        paragrafo.innerText = "Il tuo voto è " + score;
        numeroTimer.style.display = "none";
      } else if (score == 10 && index === questions.length) {
        setInterval(creareCoriandoli2, 100);
        h1.innerText = "Congratulazioni, hai completato il test! sei un top Player!"
        div.innerHTML = ""
        paragrafo.innerText = "Il tuo voto è " + score;
        numeroTimer.style.display = "none";
      } else {
        div.innerHTML = ""
        h1.innerText = "Mi dispiace, non hai passato il test."
        paragrafo.innerText = "Il tuo voto è " + score
        numeroTimer.style.display = "none";
        image.classList.remove("mostra-img");
      }
    })
});

}

// funzione che permette di mettere le domande nei bottoni in modo casuale
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

let timer 

function startTimer() {
  // Cancella il timer se esiste già uno attivo
  clearTimeout(timer);
  
  let secondsLeft = 30;
  const timerCircle = document.getElementById('timer-circle');
  // Aggiorna il timer ogni secondo
  timer = setInterval(() => {
      // Aggiorna il contenuto del timer
      document.getElementById('timer').innerText = secondsLeft;
      const formattaSecondi = secondsLeft < 10? `0${secondsLeft}` : secondsLeft; // i decimali avanti avranno uno 0
      console.log(formattaSecondi);
      // Riduci i secondi rimanenti
      secondsLeft--;
      
      // Controlla se il tempo è scaduto
      if (secondsLeft < 0) {
          clearInterval(timer); // Cancella il timer
          timerCircle.style.display = 'none';// Nasconde il cerchio
          // Passa automaticamente alla domanda successiva quando il tempo scade
          index++;
          counter.innerText = index + 1;
          timerCircle.style.display = 'block'; // Mostra il cerchio
          removeTimer();
          if (index < questions.length) {
              // visualizza la prossima domanda
              checkObj(index)
            } else if (score >= 6 && score < 10 && index === questions.length) {
              setInterval(creareCoriandoli, 100);
              h1.innerText = "Congratulazioni, hai completato il test!"
              div.innerHTML = ""
              paragrafo.innerText = "Il tuo voto è " + score;
              numeroTimer.style.display = "none";
            } else {
              div.innerHTML = ""
              h1.innerText = "Mi dispiace, non hai passato il test."
              paragrafo.innerText = "Il tuo voto è " + score
              numeroTimer.style.display = "none";
            }
      }

      // Imposta il colore dei numeri a bianco fino a quando il tempo rimanente è maggiore di 15 secondi
      if (secondsLeft > 15) {
        document.getElementById('timer').style.color = 'green';
      } else if (secondsLeft > 10) {
        // Imposta il colore dei numeri a arancione per i secondi compresi tra 15 e 10
        document.getElementById('timer').style.color = 'orange';
      } else if (secondsLeft >= 0) {
        // Imposta il colore dei numeri a rosso per gli ultimi 10 secondi
        document.getElementById('timer').style.color = 'red';
      }
  }, 1000); // Ogni secondo

  timerCircle.style.animation = `timerCircleAnimation ${secondsLeft + 2}s linear infinite`;
  timerCircle.style.display = 'block'; // Mostra il cerchio
  console.log(timerCircle);
}


checkObj(index);


// Rimuovi il timer se un pulsante viene premuto prima che scada il tempo
function removeTimer() {
  clearTimeout(timer);
  document.getElementById('timer-circle').style.display = 'none';
}




function creareCoriandoli() {
  const coriandoli = document.createElement("div");
  coriandoli.className = "coriandoli";
  let inizioX = Math.random() * window.innerWidth;
  let inizioY = Math.random() * window.innerHeight;
  let forma = Math.random() * 12 + 10;
  let colore = coloreCasuale();
  coriandoli.style.position = 'absolute';
  coriandoli.style.left = inizioX + 'px';
  coriandoli.style.top = inizioY + 'px';
  coriandoli.style.width = forma + 'px';
  coriandoli.style.height = forma + 'px';
  coriandoli.style.backgroundColor = colore;
  coriandoli.style.borderRadius = '50%';
  coriandoli.style.pointerEvents = 'none';
  coriandoli.style.opacity = 0.8;

  document.body.appendChild(coriandoli);

  document.addEventListener('animationend', function () {
  document.body.removeChild(coriandoli);
  });
}

function creareCoriandoli2() {
  const coriandoliContainer = document.createElement("div");
  coriandoliContainer.className = "coriandoli-container";

  const coriandoli2 = document.createElement("div");
  coriandoli2.className = "coriandoli2";

  let inizioX = Math.random() * window.innerWidth;
  let inizioY = Math.random() * window.innerHeight;
  let forma = Math.random() * 15 + 10;
  
  coriandoli2.style.width = forma + 'px';
  coriandoli2.style.height = forma + 'px';
  coriandoli2.style.pointerEvents = 'none';
  coriandoli2.style.opacity = 0.8;

  coriandoliContainer.style.position = 'absolute';
  coriandoliContainer.style.left = inizioX + 'px';
  coriandoliContainer.style.top = inizioY + 'px';

  coriandoliContainer.innerHTML = `<svg width="47" height="46" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z" fill="#00FFFF"/>
      </svg>`;

  coriandoliContainer.appendChild(coriandoli2);
  document.body.appendChild(coriandoliContainer);

  coriandoliContainer.addEventListener('animationend', function () {
      document.body.removeChild(coriandoliContainer);
  });
}


function coloreCasuale() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + " , " + g + " , " + b + " )";
}

