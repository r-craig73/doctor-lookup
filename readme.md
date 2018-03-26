# doctor-lookup

#### by Ron Craig (ron.craig@comcast.net)
##### 03/23/2018-03/xx/2018

### GitHub repository: https://github.com/r-craig73/doctor-lookup

## Description
### An app to list  doctors (up to 90 doctors) in Portland, OR (using BetterDoctor API), based on either a medical condition or doctor's name.

## Business Specifications

| Spec   | Input   | Output  | Status   |
|--------|:-------:|---------|----------|
| User inputs a medical issue and receive a list of doctors. | "rash" | #doctor 1 "Susan Koch" up to #doctor 90 "Andrew Zardes" | Completed |
| User inputs a name (First, Middle or Last name) to receive a list of doctors. | "Lowe" | #doctor 1 "Joe Lowe, MD" up to #doctor 90 "Mandy Lowe Hicks, MD" | Completed |
| If results from Spec 1 or Spec 2 includes any doctors, the doctor's information should be included. | "rash" | "Susan Koch, MD", "123 Main Street", Vancouver, WA, 98684, Phone number: 3608675309, Accepting patients: Yes, Website: www.susank_skin_clinic.com | Completed |
| The app should return an error notification if the API call results in an error (any message not a 200 OK) | condition: "allergy" | "Ahhhh choo! An error processing your request: {undefined or API error} Please try again." | Completed |
| If there are no doctors available after the query response, the app returns a message stating no doctors meet the criteria (not route error). | name: "Seuss" OR condition: "cowbell" | "There are no doctors matching your search." | Completed |

## Installation setup
1. Install webpack dependencies using Roger Yee's npm-webpacker script (https://github.com/ryee926/npm-webpacker)
* npm plugins
- [x] creates package.json
- [x] installs most recent version of npm
- [x] webpack development dependency
- [x] CLI - command line interface: allow webpack use from the command line interface
- [x] copy-webpack: allow images to be retrieved from the 'src/img' folder
- [x] jquery: allow jQuery commands
- [x] popper: allow TBD(?)
- [x] bootstrap: allow bootsrap commands
- [x] url-loader: allow images and url link(?)
- [x] style-loader: allow css styling
* webpack plugins
- [x] declutter: clean code notation
- [x] uglify: minimize index.html file coding
- [x] development server: creates a virtual server
- [x] dotenv: insert API_KEYs inside the JS file
* eslint
- [x] eslint: error and warning checker
- [x] eslint loader: load on CLI(?)
* Jasmine
- [x] jasmine node module
- [x] jasmine helper package
- [x] initialize jasmine
* Karma
- [x] karma test-runner
- [x] integrate jasmine and karma
- [x] specify chrome browser
- [x] karma cli
- [x] karma webpack integration
- [x] karma jquery integration
- [x] karma testing reporter
- [x] initialize karma
* Babel
- [x] babel loader

2. Update package.json file (main and scripts section)
```
"main": "index.js",
"scripts": {
  "build": "webpack --mode development",
  "start": "webpack --mode development; webpack-dev-server --open --mode development",
  "lint": "eslint --fix src/*.js",
  "test": "karma start karma.conf.js --mode development"
},
```

2. Install npm packages and dependencies.
```
$ npm install
$ npm run build
```

3. Start webserver to run app.
```
$ npm run start
```

4. Get an API Key to run the app by...
- Visiting the BetterDoctor API (https://developer.betterdoctor.com/) site.
- Click "Get a free API key".
- Fill out the form and list Epicodus as the Organization/Company Name.
- The API key should be listed under My Account->Applications.

## Technologies Used

```
Application: JavaScript, jQuery, Bootstrap, HTML
Testing: Jasmine, Karma
Environment: npm, webpack, babel, esLint
```

## Known Bugs and Issues
### Still need to complete Planning section below.
### js files are split into business and logic ui.  However, promises are not working as planned.
### Displaying API call errors (non 200 OK) with brackets.

### Licensed under MIT License

Copyright (c) 2018 **_RC productions_**
