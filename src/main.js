import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { **insert prototype name** } from './doctor-lookup.js';

$(document).ready(function() {
  $('.start-over').hide();

  $('.condition-button').click(function() {
    event.preventDefault();
    $('.start-over').show();
    $('.doctor-name').hide();
    $('showDoctorsByCondition').empty();
    // const apiKeyTest = "8446975ae1e8f355bf1266e8f4d35fa0";
    let condition = $('#condition').val();
    console.log(condition);
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`)
      .then(function(response) {
        console.log(response);
        let acceptingPatients = response.data[0].practices[0].accepts_new_patients;
        console.log(acceptingPatients);
      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: Please try again.`);
      });
  });

  $('.doctor-name-button').click(function() {
    event.preventDefault();
    $('.start-over').show();
    $('.condition').hide();
    $('showDoctorsByName').empty();
    let name = $('#doctor-name').val();
    console.log(name);
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`)
      .then(function(response) {
        console.log(response);
        let acceptingPatients = response.data[0].practices[0].accepts_new_patients;
        console.log(acceptingPatients);
      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: Please try again.`);
      });
  });

  $('.start-over-button').click(function() {
    event.preventDefault();
    location.reload();
  });


});
