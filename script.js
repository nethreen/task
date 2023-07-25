$(document).ready(function () {
  var factsData = $(".factsData");
  factsData.text("Loading...");

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (data) {
      var factItem = "<div class='factList'>";
      for (var i in data) {
        factItem +=
          "<div class='factItem'><div class='factDesription'>" +
          data[i].name +
          '<span class="factId">' +
          data[i].id +
          "</span></div></div>";
      }
      factItem += "</div>";

      factsData.html(factItem);
    },
  });
});
