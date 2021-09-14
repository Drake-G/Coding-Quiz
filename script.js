var rules = document.getElementById("rules")
var startButton = document.getElementById("start-quiz");
var secondsLeft = document.getElementById("seconds-left");
var quest = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var next = document.getElementById("next")

var timeLeft = 30
var score = 0



// sets the timer
function setTime(){
    setInterval(function(){

        if(timeLeft <= 0) {
            clearInterval(timeLeft = 0)
            alert("You lost.")
            location.reload();
        }
        secondsLeft.innerHTML = timeLeft
        timeLeft -= 1;
        
    }, 1000)
}
// subtracts time when the wrong answer is selected
function wrong(){
    timeLeft -= 5;
    alert("Try Again!")
}
// adds time when the correct answer is selected
function right(){
    score += 25;
}

// Starts the quiz, hides the start button and instructions as well as calls the setTime function
startButton.addEventListener("click", function () {
    startButton.classList.add("hide");
    rules.classList.add("hide");
    quest.classList.remove("hide");
    answer1.classList.remove("hide")
    answer2.classList.remove("hide")
    answer3.classList.remove("hide")
    answer4.classList.remove("hide")
    //li.classList.remove("hide")
    setTime();
    displayQuestion1();
})

// Selects a question from the question array



//Array of questions and answers
var Questions = [
    {
        Question: "What is the airspeed velocity of an unladen swallow?",
        Answers: {
            1: "African or European?",
            2: "24 miles per hour.",
            3: "46 kilometers per hour.",
            4: "12 parsecs."
        },
        correctAnswer: "1" || "2"
    },
    {
        Question: "Which of the following is a third party API for JavaScript?",
        Answers: {
            1: "Unity Engine",
            2: "Github",
            3: "jQuery",
            4: "Mojang"
        },
        correctAnswer: 3
    },
    {
        Question: "Which of the following can be used to retrieve an HTML element by class",
        Answers: {
            1: "getClass",
            2: "retrieveClassName",
            3: "$(className=)",
            4: "getElementByClassName"
        },
        correctAnswer: "4"
    },
    {
        Question: "Which of the following is not a server-side API",
        Answers: {
            1: "Bootstrap",
            2: "Spotify API",
            3: "Twitter API",
            4: "Instagram API"
        },
        correctAnswer: "1"
    },
];

function displayQuestion1 (){
    quest.innerHTML = Questions[0].Question;
    answer1.innerHTML = Questions[0].Answers[1];
    answer2.innerHTML = Questions[0].Answers[2];
    answer3.innerHTML = Questions[0].Answers[3];
    answer4.innerHTML = Questions[0].Answers[4];
    answer1.addEventListener("click", function() {
        right();
        displayQuestion2();
    });
    answer2.addEventListener("click", () => {
        right();
        displayQuestion2();
    });
    answer3.addEventListener("click", wrong);
    answer4.addEventListener("click", wrong);

}
function displayQuestion2 (){
    quest.innerHTML = Questions[1].Question;
    answer1.innerHTML = Questions[1].Answers[1];
    answer2.innerHTML = Questions[1].Answers[2];
    answer3.innerHTML = Questions[1].Answers[3];
    answer4.innerHTML = Questions[1].Answers[4];
    answer1.addEventListener("click", wrong);
    answer2.addEventListener("click", wrong);
    answer3.addEventListener("click", function() {
        right();
        displayQuestion3();
    });
    answer4.addEventListener("click", wrong);
   
}
function displayQuestion3 (){
    quest.innerHTML = Questions[2].Question;
    answer1.innerHTML = Questions[2].Answers[1];
    answer2.innerHTML = Questions[2].Answers[2];
    answer3.innerHTML = Questions[2].Answers[3];
    answer4.innerHTML = Questions[2].Answers[4];
    answer1.addEventListener("click", wrong);
    answer2.addEventListener("click", wrong);
    answer3.addEventListener("click", wrong);
    answer4.addEventListener("click", function() {
        right();
        displayQuestion4();
    });
     
}
function displayQuestion4 (){
    quest.innerHTML = Questions[3].Question;
    answer1.innerHTML = Questions[3].Answers[1];
    answer2.innerHTML = Questions[3].Answers[2];
    answer3.innerHTML = Questions[3].Answers[3];
    answer4.innerHTML = Questions[3].Answers[4];
    answer1.addEventListener("click", function() {
        right();
        displayScore();
    });
    answer2.addEventListener("click", wrong);
    answer3.addEventListener("click", wrong);
    answer4.addEventListener("click", wrong);
    console.log(score)
}

