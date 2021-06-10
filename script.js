//var win = document.querySelector(".win");
//var lose = document.querySelector(".lose");
var timeEl = document.querySelector(".timer-count");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
let shuffleQuestions, currentQuestionIndex
const answerButtonsElement = document.getElementById('answer-btn')
startButton.addEventListener("click", startGame)
startButton.addEventListener("click", setTime)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

var winCounter = 0;
var loseCounter = 0;
let secondsLeft = 60;

function startGame() {
  console.log("hello")
  startButton.classList.add('hide')
  shuffleQuestions = questions.sort(() => Math.random()- .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerText = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      resetState();
      alert("You lose. Bad.")
    }
  }, 1000)
}



function setNextQuestion() {
  resetState()
  showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)

  })
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = "View Scores"
    startButton.classList.remove('hide')
  }
  if (selectedButton === correct) {
    winCounter ++
  } else (
    secondsLeft - 10
  )
  console.log(secondsLeft)
  console.log(winCounter)
  

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Is the DOM a feature of JavaScript?",
    answers: [
      {text: 'Yes, it is', correct: false},
      {text: 'No, it is not', corect: true},
    ]
  },
  {
    question: "Who created JavaScript?",
    answers: [
      {text: 'Thomas Edison', correct: false},
      {text: 'Brendan Eich', corect: true},
      {text: 'Elon Musk', correct: false},
      {text: 'Toby Flenderson', correct: false},
    ]
  },
  {
    question: "Which of the following is not a 3rd party API?",
    answers: [
      {text: 'jQuery', correct: false},
      {text: 'Mojang', corect: true},
      {text: 'Bootstrap', correct: false},
    ]
  },
  {
    question: 'What is the airspeed velocity of an unladen swallow?',
    answers: [ {text: 'African or European?', correct: false},
    {text: "I don't know.", correct: false},
    {text: '24 miles per hour.', correct: true},
    {text: "48 Kilometers per hour.", correct: false},
  ]
  },
]


/*
var winCounter = 0;
var loseCounter = 0;
var timer;
var timerCount;
var questEl = $("<h2>")
*/

/*
for (var i=0; i < questions.length; i++) {
    questEl.text(qestions[i].prompt)
    if (questEl == questions[i].answer) {
        win++
    } else {
        timerCount - 10
    }
}
*/
/*
function init() {
    getWins();
    getLosses();
}
*/





/*
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
*/










/*
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ")
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

*/