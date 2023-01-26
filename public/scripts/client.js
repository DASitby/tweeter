/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/* eslint-disable no-undef */
$(document).ready(function() {
  const createTweetElement = (tweetData) => {
    const user = tweetData.user;
    const content = tweetData.content;
    const $tweet = (`<article>
    <header id="tweet-header">
    <div id="tweet-name">
      <img class="avatar" src=${user.avatars}>${user.name}
    </div>
    <div id="tweet-user">
    ${user.handle}
    </div>
  </header>
  <div id="tweet-body">
  ${content.text}
  </div>
  <footer id="tweet-footer">
    <div id="tweet-age">
    ${timeago.format(tweetData.created_at)}
    </div> 
    <div id="tweet-icons">
      <i class="fa-solid fa-flag tweet-icon"></i>
      <i class="fa-solid fa-retweet tweet-icon"></i>
      <i class="fa-solid fa-heart tweet-icon"></i>
    </div>
  </footer>
</article>`);
    return $tweet;
  };

  let $tweetsContainer = $("#tweets-container");
  const renderTweets = function(tweets) {
    // loops through tweets
    for (let i = tweets.length - 1; i >= 0; i--) {
      let tweet = tweets[i];
      console.log(tweet);
      // calls createTweetElement for each tweet
      let element = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $tweetsContainer.append(element);
    }
  };

  const loadTweets = () => {
    $.get("/tweets", (newTweets) => {
      renderTweets(newTweets);
    });
  };
  loadTweets();
  ///////////////
  //FORM HANDLING
  ///////////////
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
    const tweetQuery = $input.serialize();
    $.post("/tweets", tweetQuery, () => {
      $tweetsContainer.empty();
      loadTweets();
    });
  });
});