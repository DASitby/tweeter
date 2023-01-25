/* eslint-disable no-undef */
$(document).ready(function() {
  const $form = $('form');
  const $input = $('#tweet-text');

  $form.submit((event) => {
    event.preventDefault();
    const tweetQuery = $input.serialize();
    console.log(tweetQuery);
    $.post("/tweets", tweetQuery);
  });
});