var queryURL =
  "https://www.potterapi.com/v1/characters?key=$2a$10$l2P4zXvq0jsIUhsi015XBugLZCxoQ3TXFFlJQ4rdjS/JPxUeDM0XC";

$(".button").on("click", function () {
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    //console.log(response[0].name);

    //shows other characters in the same house
    for (var i = 0; i < response.length; i++) {
      if (response[i].house === "Ravenclaw") {
        console.log(response[i].name);
      }
    }
  });
}); // closes click event
//hello

var start = $("#start");
var startBtn = $("#start-btn");
var quiz = $("#quiz");
var question = $("#question");
var answerA = $("#A");
var answerB = $("#B");
var answerC = $("#C");
var messageDiv = $("#message");

//all questions are stored in this array as objects
var multipleChoice = [
  {
    question: "Which of these is a Boolean?",
    answerA: "False",
    answerB: "56",
    answerC: "Undefined",
    correct: "A",
  },
  {
    question: "Which of these is an array?",
    answerA: "var number = 123;",
    answerB: "var number = [1, 2, 3];",
    answerC: "function();",
    correct: "B",
  },
  {
    question: "How long is the string 'Hello'?",
    answerA: "7",
    answerB: "6",
    answerC: "5",
    correct: "C",
  },
  {
    question: "How do you declare a variable?",
    answerA: "event",
    answerB: "var",
    answerC: "for",
    correct: "B",
  },
  {
    question: "How do you increment?",
    answerA: "i++",
    answerB: "i==",
    answerC: "i--",
    correct: "A",
  },
];

//these will keep track of the index of array
var lastQuestionIndex = multipleChoice.length - 1;
var currentQuestionIndex = 0;

//starts the game
$(".button").on("click", startQuiz);

function startQuiz() {
  start.css("display", "none");
  quiz.css("display", "block");
  $("#test").css("display", "none");
  renderQuestion();
}

//renders the question to the page
function renderQuestion() {
  var q = multipleChoice[currentQuestionIndex];

  question.html("<p>" + q.question + "<p>");
  answerA.html(q.answerA);
  answerB.html(q.answerB);
  answerC.html(q.answerC);
}

//checks to see if there is a next question
if (currentQuestionIndex < lastQuestionIndex) {
  currentQuestionIndex++;
  renderQuestion();
} else {
  renderScore();
}
