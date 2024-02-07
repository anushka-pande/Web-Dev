document.addEventListener('DOMContentLoaded', function() {
  const mybutton = document.getElementById('mybutton');
  const myrules = document.getElementById('myrules');
  const quizBox = document.querySelector('.quiz_box');

  mybutton.addEventListener('click', function(event) {
    event.preventDefault(); 
    myrules.style.display = 'none'; 
    quizBox.style.display = 'block';
    startQuiz();
  });
});

let currentQuestion = 0;
let score = 0;
let timer = 0;

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  let questionElement = document.querySelector(".quetions");
  let optionsElement = document.querySelector(".options_list");
  let currentQ = questions[currentQuestion];

  questionElement.innerHTML = `<p><span class="question-number">${currentQ.numb}.</span> ${currentQ.question}</p>`;
  optionsElement.innerHTML = "";

  for(let i = 0; i < currentQ.options.length; i++) {
    optionsElement.innerHTML += `<div class="option" onclick="checkAnswer(${i + 1})">${i + 1}. ${currentQ.options[i]}</div>`;
  }
} 

function startTimer() {
  let time = 20;
  let timerElement = document.querySelector(".time_left");

  timer = setInterval(() => {
    time--;
    timerElement.innerText = ` Time Left: ${time >= 0 ? time : 0}s`;

    if(time === 0) {
      clearInterval(timer);
      checkAnswer(-1);
    }
  }, 1000);
}

function checkAnswer(userAnswerIndex) {
  let correctAnswer = questions[currentQuestion].answer;
  let options = document.querySelectorAll(".option");

  clearInterval(timer);

  if(userAnswerIndex === -1) {
    showCorrectOption(correctAnswer);
  } else {
    let userAnswer = questions[currentQuestion].options[userAnswerIndex - 1];

    if(userAnswer === correctAnswer) {
      score++;
      options[userAnswerIndex - 1].classList.add("correct");
      options[userAnswerIndex - 1].innerHTML += `<i class="fas fa-check"></i>`;
    } else {
      options[userAnswerIndex - 1].classList.add("wrong");
      options[userAnswerIndex - 1].innerHTML += `<i class="fas fa-times"></i>`;
      showCorrectOption(correctAnswer);
    }
  }

  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

function showCorrectOption(correctAnswer) {
  let options = document.querySelectorAll(".option");

  options.forEach((option, index) => {
    if (questions[currentQuestion].options[index] === correctAnswer) {
      option.classList.add("correct");
      option.innerHTML += `<i class="fas fa-check"></i>`;
    }
  });
}

function nextQuestion() {
  currentQuestion++;

  if(currentQuestion < questions.length) {
    showQuestion();
    startTimer();
  } else {
    showResult();
  }
}


function showResult() {
  let totalQuestionsElement = document.querySelector(".total_que");
  let resultBox = document.querySelector(".result_box");
  let resultText = document.querySelector(".score_text");

  totalQuestionsElement.innerHTML = `<p>Your Score: ${score}/${questions.length}<p>`;
  resultText.innerText = `Your Score: ${score}/${questions.length}`;

  document.querySelector('.quiz_box').style.display = 'none';
  resultBox.style.display = 'block'; 

  if (score >= 8) {
    celebrate();
  }
}

document.querySelector(".restart").addEventListener("click", () => {
  document.querySelector(".result_box").style.display = "none";
  resetQuiz();
  showRules();
});

document.querySelector(".quit").addEventListener("click", () => {
  document.querySelector(".result_box").style.display = "none";
  // Add code to navigate to the home page (home.html)
  window.location.href = "home.html";
});

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  timer = 0;

  clearInterval(timer);

  document.querySelector(".total_que").innerHTML = "";

  showQuestion();
  startTimer();
}

function showRules() {
  const myrules = document.getElementById('myrules');
  myrules.style.display = 'block'; 
  const quizBox = document.querySelector('.quiz_box');
  quizBox.style.display = 'none';
}

//creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: " Which of the following is NOT a C loop construct?",
  answer: "repeat",
  options: [
    "for",
    "while",
    "do-while",
    "repeat"
  ]
},
  {
  numb: 2,
  question: " What is the correct syntax for an if statement in C?",
  answer: "if(x == 5) {}",
  options: [
    "if(x == 5) {}",
    "if x == 5 {}",
    "if x = 5 {}",
    "if x = 5 the {}"
  ]
},
  {
  numb: 3,
  question: "How do you print a float with 2 decimal places using printf in C?",
  answer: `printf("%.2f", float);`,
  options: [
    `printf("%2f", float);`,
    `printf("%d.2f", float);`,
    `printf("%.2f", float);`,
    `printf("%f", float);`
  ]
},
  {
  numb: 4,
  question: "How do you define an array in C?",
  answer: "int array[10];",
  options: [
    "int array[10];",
    "array int[10];",
    "int[10] array;",
    "#define array[10] int"
  ]
},
  {
  numb: 5,
  question: "What is the default value of a local variable in C?",
  answer: "undefined",
  options: [
    "0",
    "1",
    "NULL",
    "undefined"
  ]
},
{
  numb: 6,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  options: [
    "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
  ]
},
{
  numb: 7,
  question: "What is the fullform of HTML?",
  answer: "HyperText Markup Language",
  options: [
    "HyperText Preprocessor",
    "HyperText Markup Language",
    "HyperTool Multi Language",
    "HyperText Multiple Language"
  ]
},
{
  numb: 8,
  question: "What is the size of the char data type in Java?",
  answer: "16 bits",
  options: [
    "8 bits",
    "16 bits",
    "32 bits",
    "64 bits"
  ]
},
{
  numb: 9,
  question: "Which of the following is used to handle exception in Java",
  answer: "try-catch blocks",
  options: [
    "try-catch blocks",
    "do-while loops",
    "for loops",
    "switch-case statements"
  ]
},
{
  numb: 10,
  question: "What does the static keyword in Java indicate?",
  answer: "The member belongs to the class, rather than any instance of the class.",
  options: [
    "The member belogns to a specific instance of a class.",
    "The member belongs to the class, rather than any instance of the class.",
    "The member is a constant and cannot be changed.",
    "The member is protected from access by code defined oudside its class."
  ]
},
];

function celebrate() {
  const celebrationContainer = document.querySelector('.celebration-container');

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    const randomLeft = Math.random() * 100;
    const randomTop = Math.random() * 100;

    
    if (i % 2 === 0) {
      confetti.style.left = `${Math.random() < 0.5 ? -10 : 110}vw`;
      confetti.style.top = `${randomTop}vh`;
    } else {
      confetti.style.left = `${randomLeft}vw`;
      confetti.style.top = `${Math.random() < 0.5 ? -10 : 110}vh`;
    }

    confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
    celebrationContainer.appendChild(confetti);
  }

  setTimeout(() => {
    celebrationContainer.innerHTML = '';
  }, 3000);
}
