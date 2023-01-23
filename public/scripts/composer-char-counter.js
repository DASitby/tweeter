$(document).ready(function() {
  console.log("Ready to Write to DOM");
  
  $("#tweet-text").on('keypress', function() {
    const max = 140;
    let chars = $(this).val().length + 1;
    if (chars >= max) {
      $(".counter").css({'color': "#FF0000"});
    }
    $(".counter").text(max - chars);
  });
});