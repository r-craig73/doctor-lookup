import $ from 'jquery';

export class FindDoctorCondition {

  constructor(condition, name) {
    this.condition = condition;
    this.name = name;
  }

  searchByCondition(condition, displayDoctors) {
    const doctorKey = process.env.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=90&user_key=${doctorKey}`).then(function(response) {
      displayDoctors(response);
    }).fail(function(error) {
      $('.showErrors').text(`Ahhhh chooo! There was an error processing your request:${error.responseText} Please try again.`);
    });
  }

  searchByName(name, displayDoctors) {
    const doctorKey = process.env.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=90&user_key=${doctorKey}`).then(function(response) {
      displayDoctors(response);
    }).fail(function(error) {
      $('.showErrors').text(`Ahhhh chooo! There was an error processing your request:${error.responseText} Please try again.`);
    });
  }

}
