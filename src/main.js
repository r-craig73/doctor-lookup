import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { **insert prototype name** } from './doctor-lookup.js';

$(document).ready(function() {
  $('.start-over').hide();
  $('.showDoctorsByCondition').hide();
  $('.showDoctorsByName').hide();

  $('.condition-button').click(function() {
    event.preventDefault();
    $('.start-over').show();
    $('.doctor-name').hide();
    $('showDoctorsByCondition').empty();
    $('showDoctorsByCondition').show();
    let condition = $('#condition').val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=90&user_key=${process.env.exports.apiKey}`)
    .then(function(response) {
      let total = response.meta.total;
      $('.showDoctorsByCondition').show();
      $('.showDoctorsByCondition').append(`Here is a list of doctor(s) in the Portland, OR area matching your medical condition:` + '<br>' + '<br>');
      let acceptingPatients = [];
      let firstName = [];
      let middleName = [];
      let lastName = [];
      let title = [];
      let street = [];
      let city = [];
      let state = [];
      let zipCode = [];
      let phoneNumber = [];
      let urlSite = [];
      if (total == 0) {
        $('.showDoctorsByCondition').text(`There are no doctors matching your search.`);
        } else {
        for(let i = 0; i < response.meta.total ; i++) {
          acceptingPatients[i] = response.data[i].practices[0].accepts_new_patients;
          firstName[i] = response.data[i].profile.first_name;
          middleName[i] = response.data[i].profile.middle_name;
          lastName[i] = response.data[i].profile.last_name;
          title[i] = response.data[i].profile.title;
          street[i] = response.data[i].practices[0].visit_address.street;
          city[i] = response.data[i].practices[0].visit_address.city;
          state[i] = response.data[i].practices[0].visit_address.state;
          zipCode[i] = response.data[i].practices[0].visit_address.zip;
          phoneNumber[i] = response.data[i].practices[0].phones[0].number;
          urlSite[i] = response.data[i].practices[0].website;
          if (typeof urlSite[i] == "undefined") {
            urlSite[i] = "Not Available";
          }
          if (typeof middleName[i] == "undefined") {
            middleName[i] = "";
          }
          if (acceptingPatients[i] == true) {
            acceptingPatients[i] = "Yes";
          } else {
            acceptingPatients[i] = "No";
          }
          if (typeof title[i] == "undefined") {
            title[i] = " ";
          } else {
            title[i] = ", " + title[i];
          }
          $('.showDoctorsByCondition').append(firstName[i] + " " + middleName[i] + " " + lastName[i] + title[i] + '<br>' + "  " + street[i] + '<br>' + city[i] + ", " + state[i] + " " + zipCode[i] + '<br>' + "Phone number: " + phoneNumber[i] + '<br>' + "Accepting patients? " + acceptingPatients[i] + '<br>' + "Website: " + urlSite[i] + '<br>' + '<br>');
        }
      }
      }).fail(function(error) {
        $('.showErrors').text(`Ahhhh chooo! There was an error processing your request: Please try again.`);
      });
  });

  $('.doctor-name-button').click(function() {
    event.preventDefault();
    $('.start-over').show();
    $('.condition').hide();
    $('showDoctorsByName').empty();
    $('showDoctorsByName').show();
    let name = $('#doctor-name').val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=90&user_key=${process.env.exports.apiKey}`)
      .then(function(response) {
        let total = response.meta.total;
        $('.showDoctorsByName').show();
        $('.showDoctorsByName').append(`Here is a list of doctor(s) in the Portland, OR area matching your search:` + '<br>' + '<br>');
        let acceptingPatients = [];
        let firstName = [];
        let middleName = [];
        let lastName = [];
        let title = [];
        let street = [];
        let city = [];
        let state = [];
        let zipCode = [];
        let phoneNumber = [];
        let urlSite = [];
        if (total == 0) {
          $('.showDoctorsByName').text(`There are no doctors matching your search.`);
          } else {
          for(let i = 0; i < response.meta.total ; i++) {
            acceptingPatients[i] = response.data[i].practices[0].accepts_new_patients;
            firstName[i] = response.data[i].profile.first_name;
            middleName[i] = response.data[i].profile.middle_name;
            lastName[i] = response.data[i].profile.last_name;
            title[i] = response.data[i].profile.title;
            street[i] = response.data[i].practices[0].visit_address.street;
            city[i] = response.data[i].practices[0].visit_address.city;
            state[i] = response.data[i].practices[0].visit_address.state;
            zipCode[i] = response.data[i].practices[0].visit_address.zip;
            phoneNumber[i] = response.data[i].practices[0].phones[0].number;
            urlSite[i] = response.data[i].practices[0].website;
            if (typeof urlSite[i] == "undefined") {
              urlSite[i] = "Not Available";
            }
            if (typeof middleName[i] == "undefined") {
              urlSite[i] = "";
            }
            if (acceptingPatients[i] == true) {
              acceptingPatients[i] = "Yes";
            } else {
              acceptingPatients[i] = "No";
            }
            if (typeof title[i] == "undefined") {
              title[i] = " ";
            } else {
              title[i] = ", " + title[i];
            }
            $('.showDoctorsByName').append(firstName[i] + " " + middleName[i] + " " + lastName[i] + title[i] + '<br>' + "  " + street[i] + '<br>' + city[i] + ", " + state[i] + " " + zipCode[i] + '<br>' + "Phone number: " + phoneNumber[i] + '<br>' + "Accepting patients? " + acceptingPatients[i] + '<br>' + "Website: " + urlSite[i] + '<br>' + '<br>');
          }
        }
      }).fail(function(error) {
        $('.showErrors').text(`Ahhhh chooo! There was an error processing your request: Please try again.`);
      });
  });

  $('.start-over-button').click(function() {
    event.preventDefault();
    location.reload();
  });

});
