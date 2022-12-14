# Rock, Paper, Scissors Game

This website contains a simple classic game of Rock, Paper, Scissors which is well known and loved by many.
The websites intention is to provide a simple and user friendly game of chance.
The website is targeted against a wide range of users from all ages to provide a couple of minutes of simple entertainment.


<img src="assets/images/am-i-responsive-screenshot.png">
<br>

## Project Goal
<li>To show the developers ability to build a responsive website using HTML, CSS and JavaScript.</li>
<br>

## Target Audience
<li>People of all ages who are interested in playing the classic game for a couple of minutes of entertainment.</li>
<br>

# Features

## Existing Features

### Header
<li>A simple header with the name of the game placed on top of the page.</li>

<img src="assets/images/header-screenshot.png">

<br>

### Game section
<li>The main section holds the game including a simple instruction, three buttons to make a selection, a text alert section and finally the two boxes for user and computer showing their selected symbol.</li>

<img src="assets/images/game-screenshot.png">

<br>

### The Footer
<li>The footer is kept basic and includes the rules of the game as well as developers copyright on the bottom.</li>

 <img src="assets/images/footer-screenshot.png">

 <br>

## Potential future features to implement
<br>

### Game functions
<li>A scoring system to keep track of number of wins.</li> 
<br>
<li>A username input to personalise the experience and save previous scores.</li>
<br>
<li>A leaderboard based on usernames previous scores.</li>
<br>
<li>Animations and movement of the symbols</li>
<br>
<li>The game user experience could also benefit from being developed as an app.</li>
<br>

# Design

## Colour Scheme

<img src="assets/images/colour-scheme-screenshot.png">
<li>The colour scheme was kept very simple with basic grey tones as background, footer and buttons and the addition of two simple contrasting colours with light green for the user and light red for the computer to give the two boxes clear separation.
</li>

<br>

## Typography

<li>Font was chosen and imported from Google Fonts.
All text contains font: Nunito.
It was chosen for its simplicity and playfulness.
The decision to use only one font was based on the very limited amount of text content.
All font is displayed in a basic black colour.</li>
<br>

# Testing

| **Type**                | **Comment (note all tests performed both pre- and post-deployment** | **Passed** |
|-------------------------|---------------------------------------------------------------------|------------|
| Buttons                 | Manual testing of buttons to generate game play.                    | Yes        |
| Result message          | Manual testing to ensure text appears as result message.            | Yes        |
| Text content            | Manual testing to ensure correct text result message appears.       | Yes        |
| Indentation and formats | Manual testing of code indentation and correct code formats.        | Yes        |
| Class and ID names      | Manual testing to verify class and id names are used accurately.    | Yes        |
| Device responsiveness   | Chrome dev tools, see list of tested devices below.                 | Yes        |
| HTML validation         | See comments and screen shot below                                  | Yes        |
| CSS validation          | See comments and screen shot below                                  | Yes        |
| javaScript validation   | See comments and screen shot below                                  | Yes        |
| Lighthouse validation   | See comments and screen shot below                                  | Yes        |


<br>

## Responsive devices
Tested with Chrome Dev Tools and found to be responsive on the following devices:
<ul>
<li>Iphone 12 Pro</li>
<li>Pixel 5</li>
<li>Samsung Galaxy S8+</li>
<li>Samsung Galaxy S20 Ultra</li>
<li>Surface Pro 7</li>
<li>Surface Duo</li>
<li>Galaxy Fold</li>
<li>Samsung Galaxy A51/71</li>
<li>Nest Hub</li>
<li>Nest Hub Max</li>
<li>Ipad</li>
<li>Ipad Pro</li>
</ul>

<br>

General comment:
<li>Found to be responsive to dimensions down to 362 x 658. Tested on all suggested devices on Chrome dev tools.</li>
<br>

## Validator testing
<br>

#### HTML
<li>No errors were found when passing through the official W3C validator.</li>
<img src="assets/images/html-validation-screenshot.png">

<br>

#### CSS
<li>One inital error was found on first testing. This was simply a mistake of adding ## twice before a hex colour code. The site still worked and this was not picked up until the CSS validation site. It was a simple mistake to correct and on the second attempt no errors were found when passing through the official (Jigsaw) validator.</li>
<img src="assets/images/css-validation-screenshot.png">

<br>

#### JavaScript
<li>19 errors were found on first testing however 7 of those were simple overuse of semi-colons and were quickly corrected. 12 errors remain as seen in below screenshot from the official (JSHint) validator. 
</li>
<li>Note row 18 error was tested in multiple ways and decided to keep code as is because all attempts at alterations created a bug in the gamePlay function. The game functions as planned regardless of this warning.</li>
<li>Note all other warning except row 18 are similar "available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." Upon searching on forums for a solution to this error I only came across suggestions to change the settings on VS Code in order to prevent this error message. However instructions found on multiple forums to change JSHint settings on VS Code was not possible to follow as it did not come up in settings search on Gitpod. Due to the fact that the game functions as planned I decided to ignore these warnings.</li>
<img src= "assets/images/js-validation-screenshot.png">

<br>

#### Light House
<li>Light House test performed with the below result.</li>
<img src="assets/images/lighthouse-validation-screenshot.png">

<br>

## Fixed Bugs
 <ul>
 <li>Repaired styling errors</li>
 <li>Repaired overuse of semi-colons in javaScript</li>
 <li>Improved website responsiveness to different screen resolutions by adding media queries.</li>
 </ul>

 ## Unfixed Bugs
<li>No known bugs at this time.</li>

<br>

# Technology Used

## Languages
<li>HTML, CSS and JavaScript</li>
<br>

## Tools and libraries
<li>https://fonts.google.com/- to download all fonts used</li>
<li>https://developer.chrome.com/docs/devtools/- for quick testing and live preview adjustments and trouble shooting</li>
<li>https://gitpod.io - to create and host the website.</li>
<li>https://github.com- to deploy the website.</li>
<li>https://amiresponsive.co.uk- to create the image displaying the homepage on multiple devices.</li>
<li>Mac Preview program to alter image by removing background and making simple cut outs.</li>
<li>https://www.tablesgenerator.com/ - to create mark down table for README.md file testing section.</li>
<br>

# Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
<ol>
<li>In the GitHub repository navigate to the Settings.
<img src="assets/images/github-step1.png"></li>

<br>
<li>From the left-hand menu select Pages.
<img src="assets/images/github-step2.png"></li>

<br>
<li>Under Build and deployment-Source-Branch. Select main branch and save.
<img src="assets/images/github-step3.png"></li>

<br>
<li>Wait a couple of minutes and then refresh the page.
At the top of the page your live link will be made available.
<img src="assets/images/github-step4.png"></li>
</ol>

<br>

The live link for this project can be found here - https://josefinlarsson.github.io/Rock-Paper-Scissors-Game/

<br>
<br>

For further information on how to clone or fork the repo in order to create your own version, please see the following information on Githubs website https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop

<br>

# Credits

<li>General code was created from the developers own knowledge gained during Code Institute lessons on learning platform with particular focus on the "Love-Maths" lesson project as well as the example video of Rock, Paper, Scissors Game.</li>


<li>Additionally much research, understanding and inspiration was gained from Code Institute slack forums, Stackoverflow.com, W3schools.com as well as youtube videos by Developedbyed at https://youtu.be/qWPtKtYEsN4 and Code with Ania Kub??w at https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=2057s
</li>
<br>
 

## Content
<li>The game idea is an existing classic game played both online as well as offline but all text and code is written by the developer with the help of resources and credits listed above.</li>
<br>

## Media
<li>The starter image is taken from openphysed.org and simply re-worked with Mac Preview software to remove background as well as cut and make image into three symbols used for gameplay.</li>