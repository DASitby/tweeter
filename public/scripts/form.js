/* eslint-disable no-undef */
//FORM HANDLING
$(document).ready(function() {
  const $form = $('form');
  const $input = $('#tweet-text');
  $form.submit((event) => {
    event.preventDefault();
    if ($input.val() === '' || null) {
      $("#error").slideUp(10, ()=>{});
      $('#error').text("Please enter at least one character in your tweet");
      $("#error").slideDown(100, ()=>{});
      return;
    }
    if ($input.val().length > 140) {
      $("#error").slideUp(10, ()=>{});
      $('#error').text("Your tweet is too long");
      $("#error").slideDown(100, ()=>{});
      return;
    }
    const tweetQuery = $input.serialize();
    $.post("/tweets", tweetQuery, () => {
      $("#error").slideUp(10, ()=>{});
      $("#tweets-container").empty();
      loadTweets();
    });
  });
});