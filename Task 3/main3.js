const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O", "H2O", "CO2", "H2SO4"],
      answer: "H2O"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["J.K. Rowling", "Stephen King", "Ernest Hemingway","Harper Lee"],
      answer: "Harper Lee"
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "India", "South Korea"],
      answer: "Japan"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Pb", "Au", "Cu"],
      answer: "Au"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Michelangelo" ,"Leonardo da Vinci"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Elephant", "Giraffe", "Lion", "Tiger"],
      answer: "Lion"
    },
    {
      question: "What is the tallest animal?",
      options: ["Giraffe", "Elephant", "Hippo", "Rhino"],
      answer: "Giraffe"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const scoreElement = document.getElementById('score-value');
  const resultElement = document.getElementById('result');
  const nextButton = document.getElementById('next-btn');
  
  function displayQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";
    current.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', (event) => checkAnswer(option, event));
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption, event) { 
    const current = questions[currentQuestion];
    const correctAnswer = current.answer;
    if (selectedOption === correctAnswer) {
      score++;
      scoreElement.textContent = score;
      event.target.classList.add('correct');
    } else {
      event.target.classList.add('incorrect');
      optionsElement.querySelectorAll('button').forEach(button => {
        if (button.textContent === correctAnswer) {
          button.classList.add('correct');
        }
      });
    }
    optionsElement.querySelectorAll('button').forEach(button => {
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      nextButton.style.display = "none";
      displayQuestion();
    } else {
      displayResult();
    }
  });
  
  function displayResult() {
    resultElement.textContent = `Quiz completed! Your final score is ${score}/${questions.length}`;
  }
  
  displayQuestion();
  