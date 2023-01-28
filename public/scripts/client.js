/*
* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/* eslint-disable no-undef */
$(document).ready(function() {
  ////////////////////////
  ///FUNCTION DECLARATIONS
  ////////////////////////
  const createTweetElement = (tweetData) => {
    const user = tweetData.user;
    const content = tweetData.content;
    const escape = function(str) {
      let div = document.createElement("div");
      div.setAttribute("id", "tweet-body");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    const safeHTML = `<p>${escape(content.text)}</p>`;
    const $tweet = (`<article>
    <header id="tweet-header">
    <div id="tweet-name">
      <img class="avatar" src=${user.avatars}>${user.name}
    </div>
    <div id="tweet-user">
    ${user.handle}
    </div>
  </header>
  ${safeHTML}
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
  const renderTweets = function(tweets) {
    for (let i = tweets.length - 1; i >= 0; i--) {
      let tweet = tweets[i];
      // calls createTweetElement for each tweet and appends it to the tweets container
      let element = createTweetElement(tweet);
      $("#tweets-container").append(element);

    }
  };
  const loadTweets = () => {
    $.get("/tweets", (newTweets) => {
      renderTweets(newTweets);
    });
  };

  /////////////////////
  ///MAIN FUNCTION CALL
  /////////////////////
  loadTweets();

  ///////////////
  //FORM HANDLING
  ///////////////
  const $form = $('form');
  const $input = $('#tweet-text');
  $form.submit((event) => {
    event.preventDefault();
    if ($input.val() === '' || null) {
      $("#error").slideUp(10, ()=>{});
      $('#error').text("Please enter at least one character in your Tweet");
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

  //////////////////////////////
  ///COMPOSE SLIDEDOWN BEHAVIOUR
  //////////////////////////////
  $("#nav-arrow").click(() => {
    if ($(".new-tweet")[0].style.display === 'none') {
      $(".new-tweet").slideDown("slow", () => {});
      $("#nav-arrow").css('offset-position', 'top 100px');
      return;
    } else {
      $(".new-tweet").slideUp("slow", () => {});
      $("#nav-arrow").css('class', 'mirror');
      return;
    }
  });
});