# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser 1.15.2 or above
- Chance 1.0.2 or above
- md5 2.1.0 or above
- Sass 1.58.0 or above

## Mobile View
![Mobile View](https://github.com/DASitby/tweeter/blob/master/public/images/Tweeter_Mobile_View.png)*Standard Mobile view of Tweeter*
![New Tweet Form](https://github.com/DASitby/tweeter/blob/master/public/images/Click_down_Field.png)*Click This Button to open the Tweet Menu*
![Scroll Button](https://github.com/DASitby/tweeter/blob/master/public/images/Scroll_Button_example.png)*When you scroll down, you can click this button to return to the top!*

## Desktop View
![Desktop View](https://github.com/DASitby/tweeter/blob/master/public/images/Tweeter_Desktop_View.png)*Desktop View, both the buttons mentioned above also work here!*

## HTML
- App calls all CSS and JS scripts in head of index.html
- Entire page contents located in body of index.html 

## JS
- Javascript logic can be found in /public/scripts
  - Main tweet container construction is handled in client.js
  - New tweet submission is handled in form.js
  - New tweet character counter is in composer-char-counter.js  
  - Scroll button behavior is handled in scroll.js

## CSS
- This project is styled with CSS Sheets found in /public/styles
- These can be edited manually but it is recommended to read the Sass Styling instructions below if making any changes.
- The Desktop Style Sheet is called below the others so it's changes will be lower in the CSS cascade and will only apply after the above styles.

## Sass Styling
- CSS Styles found in /public/styles are linked to .scss files located in /sass.
- After installing Sass dependency run the sass script with the command: run the sass script with the command 'npm run sass-watch'
- 