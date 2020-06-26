$("#beginBtn").on("click", function () {
  var queryURL = "https://www.potterapi.com/v1/sortinghat";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response1) {
    $("#results-house").text(response1);

    var queryURL =
      "https://www.potterapi.com/v1/characters?key=$2a$10$iacULY4a7QR33q5CZCeo6uNiFeU5wWPph51g/LllCxkW8f6kUqYdm";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var housemate = $("#results-house").text();

      function displayName() {
        var newDiv = $("<div>");
        newDiv.text(response[i].name);
        $("#resultscontainer").append(newDiv);
      }

      for (var i = 0; i < response.length; i++) {
        if (housemate === response[i].house) {
          displayName();
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

//sets background color according to house
function houseColor() {
  var result = $("#results-house");
  if (result.text() === "Gryffindor") {
    result.css({ "background-color": "#740001", color: "white" });
  } else if (result.text() === "Ravenclaw") {
    result.css({ "background-color": "#222F5B", color: "white" });
  } else if (result.text() === "Hufflepuff") {
    result.css("background-color", "#ECB939");
  } else {
    result.css({ "background-color": "#2A623D", color: "white" });
  }
}

//checks to see if the last question has been answered, if so display quiz results
function displayResults() {
  if (currentQuestionIndex < lastQuestionIndex + 1) {
    renderQuestion();
  } else {
    quiz.css("display", "none");
    $("#resultscontainer").css("display", "block");
    houseColor();
  }
}
