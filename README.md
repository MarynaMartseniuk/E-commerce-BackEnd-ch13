# E-commerce-BackEnd-ch13
A Back End for an e-commerce site that uses Express.js API configured to use Sequelize to interact with a PostgreSQL database.

## Description
### Motivation to create this App was a wish to have an example of ORM App, that can handle diferent kinds of user requests (RESTful routs).
### I built this App because it had some new coding challanges needed to be solved. For me, as for a begginer, it was importent to get a new skills and got understanding that "I can do it!".
### This App handle GET, POST, Put and DELETE requests, so user can get a data from server, create a new data and save it on server, update existing data and delete data from server.
### This project was interesting and usefull for me because, as a begginer, I learned how:
- to communicate with a server (data transfer); 
- to manage to get a necessary data from database (operating with different tables); 
- to communicate with a server without a Front End using Insomnia.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
### To use this App you need to:
- install NodeJS and Insomnia/Postman on your PC,
- copy this repo with a code on your PC,
- use a cmd/GitBush/Terminal to start this App,
- and run this App in Insomnia/Postman 

## Usage
1. in the Command Line/GitBush/Terminal go to the folder with the code;
2. login into pSQL and run "\i db/schema.sql". After this done, logout of pSQL;
3. run "npm install" to buid the App;
4. run "node server.js" to create/connect db models and then stop the server (for gitBush: ctrl+C);
5. run "node seeds/index.js" to seed database;
6. run "node server.js" to start the App.
7. In Insomnia use routes from routs/api/index.js to make different reqeusts: GET/GET:id/POST/PUT/DELETE and check the resalts in database.
8. to stop the App run "ctrl+C" for gitBush.

### run the App will look like this:
![Run the App will look like this:](https://github.com/MarynaMartseniuk/E-commerce-BackEnd-ch13/blob/main/assets/image/post%20product.jpg)
[![To upload the video click here](https://github.com/MarynaMartseniuk/E-commerce-BackEnd-ch13/blob/main/assets/video/challenge13.mp4)](https://github.com/MarynaMartseniuk/E-commerce-BackEnd-ch13/blob/main/assets/video/challenge13.mp4)

## Credits
1. source of code: UofU bootcamp, module 13, activities 06, 23, 26
2. source for data types: https://sequelize.org/docs/v7/models/data-types/#integers
3. source of code: https://www.youtube.com/watch?v=HJGWu0cZUe8 (52min 46sec)

## License
### All assets and code are under the MIT license. Please, check more info in lisence section of this repo.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## How to Contribute
### this section is comming soon

## Tests
### this section is comming soon

## Questions
### If you have any questions, please, contact me using my contact info bellow:
- my GitHub name: MarynaMartseniuk
- my GitHub link: https://github.com/MarynaMartseniuk
- my email address: marina.ved80@gmail.com
