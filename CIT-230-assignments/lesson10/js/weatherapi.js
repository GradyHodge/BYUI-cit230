const apiURL =
  "http://api.openweathermap.org/data/2.5/data/2.5/weather?id=5604473&units=imperial&APPID=cb95cd9cec06cb48789f04a848fdd7";

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);
  });
