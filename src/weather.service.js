const http = require('http');
const model = require('./weather.model');

function findWeather(city) {
  let query = `https://www.metaweather.com/api/location/search/?query=${city}`;
  var request = require("request");

  request(query, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var json = JSON.parse(body);
      return model.getWeather(json);
    } else{
        return [];
    }
  });
}
module.exports = { findWeather };
