# SurveyApp

* This is a NodeJs/Express and Angular based sample application
* This will allow to create survey and list the survey added previously
* MongoDB has been used to store the data

## Pre-requisites
* MongoDB 3+
* NodeJs 10+
* Angular-cli 8+

## Steps To Run Application
* open the command window and run the command `mongod` to the mongodb server
* open a new command window and change directory to <SurveyApp> directory using `cd` command
* run the command `npm i` to install npm dependencies
* run the command `npm start` to build the app and run ther server and ui both
* browser `localhost:3064` to see the output

## Steps To Run Application in Live-reload Development Mode
* open the command window and change directory to <SurveyApp>
* run the command `npm i` to install npm dependencies
* run the command `npm run dev` to launch the dev server
* browser `localhost:4200` to see the output and live changes

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Silent Features of the application
* Latest Angular (8.3) has been used with Latest TypeScript and RxJs
* NodeJs express framework has been used to create backend apis
* Angular HttpClient service has been used to featch the data from backend
* Angular Kendo-UI (bootstrap based) has been used
* Angular Unit Testing has been added using Karma/jasmine
* Proxy setup to avoid cross origin issue while development
