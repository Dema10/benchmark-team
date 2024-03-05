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

  let rispostaGiusta = [];
  for (let i = 0; i < questions.length; i++) {
    rispostaGiusta.push(questions[i].correct_answer)
    
  }
  console.log(rispostaGiusta);
  
  //PINO
  
  // let button = document.createElement(input);
  // button.type = "radio";
  // button.name = "answer";
  // button.value = "answer";
  // button.id = "input1";
   let div = document.querySelector(".risposte")
   let h1 = document.querySelector(".h1Domande");
   let currentQuestionIndex = 0;
   let score = 0;


  
  document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < questions.length; i++) {
      h1.innerText = questions[i].question
      if (questions.correct_answer == "True" || questions.correct_answer == "False") {
        let button1 = document.createElement(input);
         button1.type = "radio";
         button1.name = "answer";
         button1.value = "answer";
         button1.id = "input1";
         let button2 = document.createElement(input);
         button2.type = "radio";
         button2.name = "answer";
         button2.value = "answer";
         button2.id = "input2";
      } else {
        let button1 = document.createElement(input);
         button1.type = "radio";
         button1.name = "answer";
         button1.value = "answer";
         button1.id = "input1";
         let button2 = document.createElement(input);
         button2.type = "radio";
         button2.name = "answer";
         button2.value = "answer";
         button2.id = "input2";
         let button3 = document.createElement(input);
         button3.type = "radio";
         button3.name = "answer";
         button3.value = "answer";
         button3.id = "input3";
         let button4 = document.createElement(input);
         button4.type = "radio";
         button4.name = "answer";
         button4.value = "answer";
         button4.id = "input4";
      }
    }
});

  // function loadQuestion() {
  //   const currentQuestion = questions[currentQuestionIndex];

  //   const questionContainer = document.createElement('div');
  //   questionContainer.innerHTML = 
  //     h1= `${currentQuestion.question}`
  //     <form id="quizForm">
  //       ${currentQuestion.incorrect_answers.map((answer, index) => 
  //         <label>
  //           <input type="radio" name="answer" value="${answer}">
  //           ${answer}
  //         </label>
  //       ).join('')}
  //       <label>
  //         <input type="radio" name="answer" value="${currentQuestion.correct_answer}">
  //         ${currentQuestion.correct_answer}
  //       </label>
  //       <br>
  //       <input type="button" value="Next" onclick="checkAnswer()">
  //     </form>
  //   ;

  //   document.body.innerHTML = '';
  //   document.body.appendChild(questionContainer);
  // }

  // function checkAnswer() {
  //   const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  //   if (selectedAnswer) {
  //     if (selectedAnswer.value === questions[currentQuestionIndex].correct_answer) {
  //       score++;
  //     }

  //     currentQuestionIndex++;

  //     if (currentQuestionIndex < questions.length) {
  //       loadQuestion();
  //     } else {
  //       console.log(Punteggio totale: ${score}/${questions.length});
  //     }
  //   }
  // }

  // // Inizia il quiz caricando la prima domanda
  // loadQuestion();


  //ILARIA

  // const questionNumber = questions.length;
// const punteggio = 0;

// let currentQuestion = 0;

// let h1 = document.querySelector('.h1Domande');
// let container = document.getElementById('risposte')

// function aggiungiDomanda() {
//     if (currentQuestion < questions.length){
//         // Prendi la domanda corrente
//         let currentQuestionData = questions[currentQuestion];
    
//         // Imposta il testo della domanda nell'elemento h1
//         h1.innerHTML = currentQuestionData.question;
    
//         // Pulisci il contenitore delle risposte
//         container.innerHTML = '';
//       for (i= 0; i< questions[i].incorrect_answers.length; i++) {
//         newButton = document.createElement ('button');
//         container.appendChild(newButton);
//         newButton[i].innerHTML= incorrect_answers.value;
//         buttonCorretto = document.createElement ('button');
//         buttonCorretto.innerHTML = correct_answer.value; 
//       }
//     }
// }

// console.log(questions[0].incorrect_answers.length)