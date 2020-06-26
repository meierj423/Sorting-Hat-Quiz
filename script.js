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
    question: "From the following, what is your favorite animal?",
    answerA: "Toad",
    answerB: "Owl",
    answerC: "Rat",
    // correct: "C",
  },
  {
    question: "From of the following, what is your favorite type of wand?",
    answerA: "Holly",
    answerB: "Ash",
    answerC: "Willow",
    // correct: "B",
  },
  {
    question: "From the following, what is your favorite candy?",
    answerA: "Chocolate frogs",
    answerB: "Cockroach Clusters",
    answerC: "Bertie Bott's Every Flavour Beans",
    // correct: "A",
  },

  {
    question: "Which of the following best describes you?",
    answerA: "Brave",
    answerB: "Loyal",
    answerC: "Hard-working",
    // correct: "B",
  },
];

//these will keep track of the index of array
var lastQuestionIndex = multipleChoice.length - 1;
var currentQuestionIndex = 0;

//starts the game
$("#beginBtn").on("click", startQuiz);

function startQuiz() {
  quiz.css("display", "block");
  $(".container").css("display", "none");
  renderQuestion();
}
$(".success").on("click", nextQuestion);

function nextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;
  console.log(currentQuestionIndex);
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
// if (currentQuestionIndex < lastQuestionIndex) {
//   currentQuestionIndex++;
//   renderQuestion();
// } else {
//   alert("Finished!");
// }
