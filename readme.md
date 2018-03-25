# doctor-lookup

#### by Ron Craig (ron.craig@comcast.net)
##### 03/23/2018-03/xx/2018

### GitHub repository: https://github.com/r-craig73/doctor-lookup

## Description
### An app to list  doctors (up to 90 doctors) in Portland, OR (using BetterDoctor API), based on either a medical condition or doctor's name.

## Business Specifications

| Spec   | Input   | Output  | Status   |
|--------|:-------:|---------|----------|
| User inputs a medical issue and receive a list of doctors. | "rash" | "Susan Koch" | Completed |
| User inputs a name (First, Middle or Last name) to receive a list of doctors. | "Lowe" | "Joe Lowe, MD" | Completed |
| If results from Spec 1 or Spec 2 includes any doctors, the doctor's information should be included. | "rash" | "Susan Koch, MD", "123 Main Street", Vancouver, WA, 98684, Phone number: 3608675309, Accepting patients: Yes, Website: www.susank_skin_clinic.com | Completed |
| The app should return an error notification if the API call results in an error (any message not a 200 OK) | condition: "allergy" | "Ahhhh choo! An error occurred, please try again." | Completed |
| If there are no doctors available after the query response, the app returns a message stating no doctors meet the criteria (not route error). | name: "Seuss" OR condition: "cowbell" | "There are no doctors matching your search." OR "There are no doctors available to help with your medical issue." | Completed |

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
### Still need to complete the Planning section below.
### Need to split js main files into two files.
1. Receive form input (main.js).
2. Make API request and display results and warnings (doctor-lookup.js).

### MIT License

Copyright (c) 2018 **_RC productions_**

##### Planning

1. Integration
- [x] Read through BetterDoctor API to generate medical issue and doctor's name queries.
- [x] Verify API_KEY and queries are working through postman.
- [x] Generate html template page with two form options, medical condition and doctor's name.
- [x] Use main js file to combine two searches.
- [x] Verify query results are working and displayed in HTML.
- [ ] Separate js business and user interface between main and doctor-lookup.  Create two classes showDoctorByCondition and showDoctorsByName.

2. UX/UI
- [x] Include and modify bootstrap.
- [ ] Develop a custom style, doctor themed.

3. Polish
- [ ] Cleanup README file.
- [ ] Delete unused files.
- [ ] Refactor js and html.
