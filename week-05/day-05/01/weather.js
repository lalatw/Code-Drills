var request = require("request");

var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?zip=" + process.argv[2] + ",us&units=imperial&appid=6dfde288d113cd4bc33a4249d969ac92";

request(queryUrl, function(error, response, body) { 

  if (!error && response.statusCode === 200) {
    var data = JSON.parse(body);  
    for (var i=0; i<data["list"].length; i++) {
    console.log((data["list"])[i].dt_txt + " " + (data["list"])[i].main.temp);

  }}
});
