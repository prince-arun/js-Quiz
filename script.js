let quizData = [
  {
    question: "What is the capital city of France?",
    a: "Paris",
    b: "London",
    c: "Madrid",
    d: "Rome",
    correct: "a",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Mars",
    b: "Jupiter",
    c: "Venus",
    d: "Mercury",
    correct: "a",
  },
  {
    question: "Which country is famous for its tulip fields?",
    a: "Netherlands",
    b: "Italy",
    c: "Germany",
    d: "France",
    correct: "a",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Leonardo da Vinci",
    b: "Pablo Picasso",
    c: "Vincent van Gogh",
    d: "Michelangelo",
    correct: "a",
  },
  {
    question:
      "Which famous scientist developed the theory of general relativity?",
    a: "Albert Einstein",
    b: "Isaac Newton",
    c: "Stephen Hawking",
    d: "Nikola Tesla",
    correct: "a",
  },
  {
    question: "Which of the following is a client-side language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b",
  },
];
let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length;

let questionBox = document.getElementById("question");
let allInputs = document.querySelectorAll("input[type='radio']");
let loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function () {
  let data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
});

let getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

let reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

let quizEnd = () => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = `
                <div class="col">
                    <h3 class="w-100"> Hi, you've scored ${correct} / ${total} </h3>
                </div>
            `;
};

loadQuestion(index);
