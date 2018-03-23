import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { **insert prototype name** } from './doctor-lookup.js';

$(document).ready(function() {
  $(".start-over").hide();

  $('.condition-button').click(function() {
    event.preventDefault();
    $(".start-over").show();
    $(".doctor-name").hide();
    //$('.showCondition').empty();
  });

  $('.doctor-name-button').click(function() {
    event.preventDefault();
    $(".start-over").show();
    $(".condition").hide();
    //$('.showCondition').empty();
  });

  $('.start-over-button').click(function() {
    event.preventDefault();
    location.reload();
    //$('.showCondition').empty();
  });


});
