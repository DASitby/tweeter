/* eslint-disable no-undef */
$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const max = 140;
    let chars = $(this).val().length + 1;
    if (chars >= max) {
      $(".counter").css({'color': "#FF0000"});
    }
    $(".counter").text(max - chars);
  });
});