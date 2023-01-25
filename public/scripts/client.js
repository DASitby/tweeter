/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like