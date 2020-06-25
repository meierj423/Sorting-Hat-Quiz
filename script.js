var queryURL =
  "https://www.potterapi.com/v1/characters?key=$2a$10$l2P4zXvq0jsIUhsi015XBugLZCxoQ3TXFFlJQ4rdjS/JPxUeDM0XC";

$("#submitBtn").on("click", function () {
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
