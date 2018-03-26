import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FindDoctorCondition } from './doctor-lookup.js';

const displayDoctors = function(response) {
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
  if (response.meta.total == 0) {
    $('.showDoctors').show();
    $('.showDoctors').text(`There are no doctors matching your search.`);
  } else if (response.meta.total >= 90) {
    response.meta.total = 90;
    $('.showDoctors').show();
    $('.showDoctors').append(`Here is a list of doctor(s) in the Portland, OR area matching your search:` + '<br>' + '<br>');
    for(let i = 0; i < response.meta.total - 1; i++) {
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
      $('.showDoctors').append(firstName[i] + " " + middleName[i] + " " + lastName[i] + title[i] + '<br>' + "  " + street[i] + '<br>' + city[i] + ", " + state[i] + " " + zipCode[i] + '<br>' + "Phone number: " + phoneNumber[i] + '<br>' + "Accepting patients? " + acceptingPatients[i] + '<br>' + "Website: " + urlSite[i] + '<br>' + '<br>');
    }
  } else {
    $('.showDoctors').show();
    $('.showDoctors').append(`Here is a list of doctor(s) in the Portland, OR area matching your search:` + '<br>' + '<br>');
    for(let i = 0; i < response.meta.total; i++) {
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
      $('.showDoctors').append(firstName[i] + " " + middleName[i] + " " + lastName[i] + title[i] + '<br>' + "  " + street[i] + '<br>' + city[i] + ", " + state[i] + " " + zipCode[i] + '<br>' + "Phone number: " + phoneNumber[i] + '<br>' + "Accepting patients? " + acceptingPatients[i] + '<br>' + "Website: " + urlSite[i] + '<br>' + '<br>');
    } // close for loop
  }
}

$(document).ready(function() {
  $('#new-search-button').hide();
  $('.showDoctors').hide();

  $('#condition-button').click(function() {
    event.preventDefault();
    $('#new-search-button').show();
    $('#condition').show();
    $('#condition-button').hide();
    $('.doctor-name').hide();
    $('showDoctors').empty();
    $('showDoctors').show();
    let condition = $('#condition').val();
    let newConditionAPI = new FindDoctorCondition(condition);
    newConditionAPI.searchByCondition(condition, displayDoctors);
  });

  $('#doctor-name-button').click(function() {
    event.preventDefault();
    $('#new-search-button').show();
    $('#doctor-name').show();
    $('#doctor-name-button').hide();
    $('.condition').hide();
    $('showDoctors').empty();
    $('showDoctors').show();
    let name = $('#doctor-name').val();
    let newConditionAPI = new FindDoctorCondition(name);
    newConditionAPI.searchByName(name, displayDoctors);
  });

  $('#new-search-button').click(function() {
    event.preventDefault();
    location.reload();
  });

});
