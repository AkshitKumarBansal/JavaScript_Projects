const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const questionText = document.getElementById('question');
const ansBtn = document.getElementById('answer-buttons');

const resultScreen = document.getElementById('result-screen');
const scoreText = document.getElementById('score');
const totalQuestionsText = document.getElementById('total-questions');

let currQuestionIndex = 0;
let score = 0;

const questions = [
  {
    questionText: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Preprocessor", isCorrect: false },
      { text: "Hyper Text Markup Language", isCorrect: true },
      { text: "Hyper Text Multiple Language", isCorrect: false },
      { text: "Hyper Tool Multi Language", isCorrect: false }
    ]
  },
  {
    questionText: "What does CSS stand for?",
    answers: [
      { text: "Common Style Sheet", isCorrect: false },
      { text: "Colorful Style Sheet", isCorrect: false },
      { text: "Computer Style Sheet", isCorrect: false },
      { text: "Cascading Style Sheet", isCorrect: true }
    ]
  },
  {
    questionText: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "React", isCorrect: true },
      { text: "Laravel", isCorrect: false },
      { text: "Django", isCorrect: false },
      { text: "Sass", isCorrect: false }
    ]
  }
];

function startQuiz() {
  currQuestionIndex = 0;
  score = 0;
  startScreen.classList.add('hide');
  resultScreen.classList.add('hide');
  quizScreen.classList.remove('hide');
  showQuestions();
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

function showQuestions() {
  resetState();
  let currQuestion = questions[currQuestionIndex];
  questionText.innerText = currQuestion.questionText;
  
  currQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.isCorrect) {
      button.dataset.correct = answer.isCorrect;
    }
    ansBtn.appendChild(button);
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextBtn.classList.add('hide');
  while(ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('wrong');
  }

  Array.from(ansBtn.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true; // Prevent multiple clicks
    button.style.cursor = "not-allowed"; // Update cursor for UX
  });

  nextBtn.classList.remove('hide');
}

function handleNextButton() {
  currQuestionIndex++;
  if (currQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showResult();
  }
}

nextBtn.addEventListener('click', handleNextButton);

function showResult() {
  quizScreen.classList.add('hide');
  resultScreen.classList.remove('hide');
  scoreText.innerText = score;
  totalQuestionsText.innerText = questions.length;
}