/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/* eslint-disable no-undef */
$(document).ready(function() {
  const $form = $('form');
  const $input = $('#tweet-text');

  const createTweetElement = (tweetData) => {
    const user = tweetData.user;
    const content = tweetData.content;
    const $tweet = (`<article>
  <header id="tweet-header">
    <div id="tweet-name">
      ${user.name}
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
    ${tweetData.created_at}
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

  const renderTweets = function(tweets) {
    let $tweetsContainer = $("#tweets-container");
    // loops through tweets
    tweets.forEach(tweet => {
    // calls createTweetElement for each tweet
      let element = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $tweetsContainer.append(element);
    });
  };

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  renderTweets(data);
});