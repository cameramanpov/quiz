var currentQuestionIndex = 0;
var score = 0;

var questions = [
    {
        question: "Quel est le plus gros mammifère terrestre ?",
        answers: ["Éléphant", "Girafe", "Rhinocéros", "Hippopotame", "Ta mére"],
        correctAnswer: "ta mére"
    },
    {
        question: "Combien de continents y a-t-il sur Terre ?",
        answers: ["5", "6", "7", "8","autant que de bourlet a ta maman"],
        correctAnswer: "7"
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        answers: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique","océan de ta mére"],
        correctAnswer: "Océan Pacifique"
    }
];

function loadQuestion() {
    var questionContainer = document.getElementById("question-container");
    var currentQuestion = questions[currentQuestionIndex];
    var answersHtml = "";

    questionContainer.innerHTML = "<p>" + currentQuestion.question + "</p>";

    currentQuestion.answers.forEach(function (answer) {
        answersHtml += '<button onclick="checkAnswer(\'' + answer + '\')">' + answer + '</button>';
    });

    questionContainer.innerHTML += answersHtml;
}

function checkAnswer(answer) {
    var currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
        score++;
    }

    document.getElementById("score-count").textContent = score;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    var questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "<p>Quiz terminé ! Votre score est de " + score + " sur " + questions.length + ".</p>";
}
loadQuestion();
