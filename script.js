$("#beginBtn").on("click", function () {
  var queryURL = "https://www.potterapi.com/v1/sortinghat";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response1) {
    var house = response1;
    $("#results-house").text(response1);
    console.log(response1);
    var queryURL =
      "https://www.potterapi.com/v1/characters?key=$2a$10$p7J2vsj4U1hCIxFwrtomvurZc/RYAid/iAw0Zs.dRHT/Zh5dsJeoa";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var housemate = $("#results-house").text();
      console.log(housemate);
      for (var i = 0; i < response.length; i++) {
        if (housemate === "Ravenclaw" && response[i].house === "Ravenclaw") {
          console.log(response[i].name);
          $("#results-name").append(response[i].name);
        }
        if (housemate === "Gryffindor" && response[i].house === "Gryffindor") {
          console.log(response[i].name);
          $("#results-name").append(response[i].name);
        }
        if (housemate === "Hufflepuff" && response[i].house === "Hufflepuff") {
          console.log(response[i].name);
          $("#results-name").append(response[i].name);
        }
        if (housemate === "Slytherin" && response[i].house === "Slytherin") {
          console.log(response[i].name);
          $("#results-name").append(response[i].name);
        }
      }
    });
  });
});

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
  },
  {
    question: "From of the following, what is your favorite type of wand?",
    answerA: "Holly",
    answerB: "Ash",
    answerC: "Willow",
  },
  {
    question: "From the following, what is your favorite candy?",
    answerA: "Chocolate frogs",
    answerB: "Cockroach Clusters",
    answerC: "Bertie Bott's Every Flavour Beans",
  },

  {
    question: "Which of the following best describes you?",
    answerA: "Brave",
    answerB: "Loyal",
    answerC: "Hard-working",
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
  //console.log(currentQuestionIndex);
  //renderQuestion();
  displayResults();
}

//renders the question to the page
function renderQuestion() {
  var q = multipleChoice[currentQuestionIndex];

  question.html("<p>" + q.question + "<p>");
  answerA.html(q.answerA);
  answerB.html(q.answerB);
  answerC.html(q.answerC);
}

//checks to see if the last question has been answered, if so display quiz results
function displayResults() {
  if (currentQuestionIndex < lastQuestionIndex + 1) {
    renderQuestion();
  } else {
    quiz.css("display", "none");
    $("#resultscontainer").css("display", "block");
  }
}
