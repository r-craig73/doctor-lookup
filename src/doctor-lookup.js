import $ from 'jquery';

export class FindDoctorCondition {

  constructor(condition) {
    this.condition = condition;
  }

  searchDoctors(condition, displayDoctors) {
    const doctorKey = process.env.exports.apiKey;
    console.log(doctorKey);
    console.log(condition);
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=45.523%2C-122.676%2C20&sort=distance-asc&skip=0&limit=90&user_key=${doctorKey}`).then(function(response) {
      displayDoctors(response);
    })
    .fail(function(error) {
      $('.showErrors').text(`Ahhhh chooo! There was an error processing your request: Please try again.`);
    });
  }


}
