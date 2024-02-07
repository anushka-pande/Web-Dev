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
let timeline = 0;

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  let questionElement = document.querySelector(".quetions");
  let optionsElement = document.querySelector(".options_list");
  let currentQ = questions[currentQuestion];

  questionElement.innerHTML = `<p>${currentQ.question}<p>`;
  optionsElement.innerHTML = "";

  for(let i = 0; i < currentQ.options.length; i++) {
    optionsElement.innerHTML += `<div class="option">${i + 1}. ${currentQ.options[i]}</div>`;
  }

  addOptionClickEvent();
} 

function startTimer() {
  let time = 20;
  let timerElement = document.querySelector(".time_left");

  timer = setInterval(() => {
    time--;
    timerElement.innerText = ` Time Left: ${time >= 0 ? time : 0}s`;

    if(time === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);

  let timelineElement = document.querySelector(".time_line");
  let width = 100;
  timeline = setInterval(() => {
    if (time > 0) {
      width -= (5 / 20) * 100; 
      timelineElement.style.width = `${width}%`;
    }

    if (width === 0) {
      clearInterval(timeline);
    } 
  }, 1000);
}

function addOptionClickEvent() {
  let options = document.querySelectorAll(".option");

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      clearInterval(timer);
      clearInterval(timeline);
      checkAnswer(index + 1);
    });
  });
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
  answer: "int array[10]",
  options: [
    "int array[10]",
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
    "Hyper Text Preprocessor",
    "HyperText Markup Language",
    "Hyper Tool Multi Language",
    "Hyper Text Multiple Language"
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

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestion].answer;
  let options = document.querySelectorAll(".option");


  if(userAnswer === correctAnswer) {
    score++;

  options.forEach((option) => {
    option.removeEventListener("click", () => {
      clearInterval(timer);
      clearInterval(timeline);
      checkAnswer(option.innerText);
    });

    if (option.innerText === correctAnswer) {
      option.classList.add("correct");
      option.innerHTML += `<i class="fas fa-check"></i>`;
    }
  });
} else {
  options.forEach((option) => {
      option.removeEventListener("click", () => {
        clearInterval(timer);
        clearInterval(timeline);
        checkAnswer(option.innerText);
      });
      if (option.innerText === userAnswer) {
        option.classList.add("wrong");
        option.innerHTML += `<i class="fas fa-times"></i>`;
      }
      if (option.innerText === correctAnswer) {
        option.classList.add("correct");
        option.innerHTML += `<i class="fas fa-check"></i>`;
      }
    });
  }

  setTimeout(() => {
    nextQuestion();
  }, 1000);
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
  let totalQuestionsELement = document.querySelector(".total_que");
  let nextButton = document.querySelector(".next_btn");

  totalQuestionsELement.innerHTML = `<p>Your Score: ${score}/{questions.length}<p>`;
  nextButton.style.display = "none";
}

document.querySelector(".restart").addEventListener("click", () => {
  document.querySelector(".result_box").style.display = "none";
  resetQuiz();
});

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  timer = 0;
  timeline = 0;

  clearInterval(timer);
  clearInterval(timeline);

  document.querySelector(".total_que").innerHTML = "";

  showQuestion();
  startTimer();
}