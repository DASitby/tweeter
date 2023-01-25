/* eslint-disable no-undef */
$(document).ready(function() {
  const $form = $('form');
  const $input = $('#tweet-text');

  $form.submit((event) => {
    event.preventDefault();
    if ($input.val() === '' || null) {
      return alert("Please enter at least one character in your Tweet");
    }
    if ($input.val().length > 140) {
      return alert("Your tweet is too long");
    }
    console.log($input.val());
    const tweetQuery = $input.serialize();
    $.post("/tweets", tweetQuery);
  });
});