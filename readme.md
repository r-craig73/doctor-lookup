# doctor-lookup

## Description
### An app to find a doctor in Portland, OR (using BetterDoctor API) based on either a medical issue or doctor's name.

## Business Specifications
| Spec | Input | Output | Status |
| :---------------| :---------------| :---------------|
| User inputs a medical issue and receive a list of doctors in the Portland, OR area. | "rash"| Susan Koch |

## Technologies Used

```
Application: JavaScript, jQuery, Bootstrap, HTML
Testing: Jasmine, Karma
Environment: npm, webpack, babel, esLint
```


## MIT license

## Planning

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

2. Specs
- [ ] Spec 1: User inputs a medical issue and receive a list of doctors in the Portland, OR area, input ("rash", "flu" or "sore throat"), output (Dr. Bob Samuel, Dr. Suzzane Lowe, etc.).
- [ ] Spec 2: User inputs a name to receive a list of doctors in the Portland, OR area, input ("Lowe"), output (Dr. Suzzane Lowe, Dr. Lowe Bowen, etc.).
- [ ] Spec 3: If results from Spec 1 or Spec 2 includes any doctors, the doctor's information should be included (first name, last name, address, phone number, website and whether or not doctor is accepting new patients). input ("rash"), output (Dr. Bob Samuel, 123 Main Street, 360-867-5309, www.drbobs.com, accepting patients).
- [ ] Spec 4: The app should return an error notification if the API call results in an error (any message not a 200 OK). input ("rash"), output (Ahhhh choo! An error occurred, please try again, Message 4xx).
- [ ] Spec 5: If there are no doctors available after the query response, the app returns a message stating no doctors meet the criteria (not an API error). input ("Dr. Seuss" or "cowbell fever"), output ("There are no doctors matching that name" or "There are doctors available to help with your medical issue").

3. Integration
- [x] Read through BetterDoctor API to generate medical issue and doctor's name queries.
- [x] Verify API_KEY and queries are working through postman.
- [x] Generate html template page with two form options, medical condition and doctor's name.
- [ ] Use main js file to combine two searches.
- [ ] Verify query results are working and viewed in HTML.
- [ ] Separate js business and user interface between main and doctor-lookup.  Create two classes showDoctorByCondition and showDoctorsByName.

4. UX/UI
- [ ] Include and modify bootstrap.
- [ ] Develop a custom style, doctor themed.

5. Polish
- [ ] Cleanup README file.
- [ ] Delete unused files.
- [ ] Refactor js and html.
