let request = require('request');

let apiKey = 'b8f2f243ab83161f163fd7295aa898aa'; 
let city = 'Leiden';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    console.log(`Weather: 
    Today: ${weather.weather[0].main}
    ${weather.main.temp} deg in ${weather.name}
    min: ${weather.main.temp_min}, max ${weather.main.temp_max}
    `);
  }
});