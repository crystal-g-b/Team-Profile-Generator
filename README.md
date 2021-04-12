# Team Profile Generator

  <a href="https://img.shields.io/badge/License-MIT-brightgreen"><img src="https://img.shields.io/badge/License-MIT-brightgreen"></a>

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test Instructions](#test-instructions)
  * [Contact Information](#contact-information)
  * [License](#license)
  
  
  ## Description
  
  For this Assignment, we were tasked to build a Node.js command-line application. The application takes in information about employees on a software engineering team, then generates an HTML page that displays summaries of each person.
  
  ## Installation
  
  In order to install the Team Profile Generator, the user must install the [`inquirer npm`](https://www.npmjs.com/package/inquirer) that will enable prompts of input on the command line. 
  
  In order to install the inquirer npm, the user must run `npm install` on the command line and that will install the npm package and it's dependencies. Once that is installed, the app itself will start once `node index` is run on the command line.
  
  ## Usage
  
  When the user runs `node index`, the inquirer package prompts you in the command line with a series of questions and input requirements that will populate on cards. This will serve as the basic info for each team member. The info cards will include the team members name, role, id# and so on. Once the information is entered `fs.writeFile` is used to asynchronously write data to the html file created.

  See below for the application Demo and final result of the Profile Generator

  * [Profile Generator Demo](https://drive.google.com/file/d/1hLb7zsY-s1YgbFiGgnov4bjj2g3C9KS0/view?usp=sharing)
  
  ![Final HTML](/ASSETS/finishedpage.png)
  
  ## Contribution
  
  The main contributor was Crystal Barnett.

  Outside contributions are welcomed. If a Developer would like to contribute to this app, they are welcome to fork this repo or create a pull request to provide fixes or other contributions to this projects.
  
  ## Test-Instructions
  
  Tests were carried out for every part of the code to ensure that it passes each test. Testing is key to making code maintainable. In order to carry out the test, I ran `npm run test` on the command line and this initiates the test.
  
  Unfortunately, 1 test repeatedly failed and I am currently working on troubleshooting this test. Once all tests pass, i'll update the repo with the updates. Please see demo below:

  ![demo gif](/ASSETS/test.gif)
  
  ## Contact-Information
  * GitHub: [crystal-g-b](https://github.com/crystal-g-b)
  * Email: crystal.barnett1@gmail.com
  ## License: 
  * [The MIT License](https://opensource.org/licenses/MIT)